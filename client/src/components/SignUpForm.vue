<template>
  <div class="container form-card px-3 py-4 md:px-4 md:py-5">
    <h3 class="form-section-title">Sign Up</h3>
    <div>
      <p class="mt-3 mb-2 line-height-3">
        Complete the form below to start receiving invites
      </p>
    </div>

    <div class="md:flex md:flex-row">
      <!-- First Name Field -->
      <div class="form-control md:mr-3">
        <span class="p-float-label">
          <InputText
            type="text"
            id="first-name"
            v-model="firstName"
            v-tooltip.bottom.focus="'Your name will be displayed publicly'"
            :class="{
              'p-invalid': validationMessages.hasOwnProperty('firstName')
            }"
            class="w-20rem p-inputtext-sm"
            @blur="sendSignUpInfo()"
          />
          <label for="first-name">First Name</label>
        </span>
        <div
          v-for="(message, index) of validationMessages['firstName']"
          :key="index"
        >
          <div class="validation-message">{{ message }}</div>
        </div>
      </div>

      <!-- Last Name Field -->
      <div class="form-control">
        <span class="p-float-label">
          <InputText
            type="text"
            id="last-name"
            v-model="lastName"
            v-tooltip.bottom.focus="'Your name will be displayed publicly'"
            :class="{
              'p-invalid': validationMessages.hasOwnProperty('lastName')
            }"
            class="w-20rem p-inputtext-sm"
            @blur="sendSignUpInfo()"
          />
          <label for="last-name">Last Name</label>
        </span>
        <div
          v-for="(message, index) of validationMessages['lastName']"
          :key="index"
        >
          <div class="validation-message">{{ message }}</div>
        </div>
      </div>
    </div>

    <div class="md:flex md:flex-row">
      <!-- Email Field -->
      <div class="form-control md:mr-3">
        <span class="p-float-label">
          <InputText
            type="text"
            id="email"
            v-model="email"
            :class="{
              'p-invalid': validationMessages.hasOwnProperty('email')
            }"
            class="w-20rem p-inputtext-sm"
            @blur="sendSignUpInfo()"
          />
          <label for="email">Email</label>
        </span>
        <div
          v-for="(message, index) of validationMessages['email']"
          :key="index"
        >
          <div class="validation-message">{{ message }}</div>
        </div>
      </div>

      <!-- City Field -->
      <div class="form-control">
        <span class="p-float-label">
          <AutoComplete
            forceSelection
            type="text"
            id="city"
            :field="area => `${area.name}, ${area.region}, ${area.country}`"
            v-model="area"
            v-tooltip.bottom.focus="'Helps us plan events in your area'"
            :suggestions="filteredCityOptions"
            :minLength="3"
            :delay="300"
            @complete="searchCityOptions($event)"
            :class="{
              'p-invalid': validationMessages.hasOwnProperty('area')
            }"
            class="w-20rem p-inputtext-sm"
            @blur="sendSignUpInfo()"
          />
          <label for="city">City</label>
        </span>
        <div
          v-for="(message, index) of validationMessages['area']"
          :key="index"
        >
          <div class="validation-message">{{ message }}</div>
        </div>
      </div>
    </div>

    <div class="md:flex md:flex-row">
      <!-- Birthdate Field -->
      <div class="form-control md:mr-3">
        <span class="p-float-label">
          <InputMask
            v-model="birthdate"
            v-tooltip.bottom.focus="'Helps us connect you with others your age'"
            mask="99/99/9999"
            slotChar="MM/DD/YYYY"
            @change="sendSignUpInfo()"
            :class="{
              'p-invalid': validationMessages.hasOwnProperty('birthdate')
            }"
            class="w-20rem p-inputtext-sm"
          />
          <label for="birthdate">Birth Date</label>
        </span>
        <div
          v-for="(message, index) of validationMessages['birthdate']"
          :key="index"
        >
          <div class="validation-message">{{ message }}</div>
        </div>
      </div>

      <!-- Gender Field -->
      <div class="form-control">
        <span class="p-float-label">
          <AutoComplete
            type="text"
            id="gender"
            v-model="gender"
            v-tooltip.bottom.focus="'Helps us facilitate certain events like women\'s soccer'"
            :suggestions="filteredGenderOptions"
            :minLength="1"
            :delay="0"
            @complete="searchGenderOptions($event)"
            :class="{
              'p-invalid': validationMessages.hasOwnProperty('gender')
            }"
            class="w-20rem p-inputtext-sm"
            @blur="sendSignUpInfo()"
          />
          <label for="gender">Gender (Optional)</label>
        </span>
        <div
          v-for="(message, index) of validationMessages['gender']"
          :key="index"
        >
          <div class="validation-message">{{ message }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Sign Up Form",
  props: {
    validationMessagesProp: Object
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      filteredCityOptions: [],
      area: "",
      gender: "",
      birthdate: "",
      filteredGenderOptions: [],
      genderOptions: [
        "Female",
        "Male",
        "Two spirit",
        "Transgender",
        "Non-binary",
        "Agender",
        "Genderqueer"
      ],
      validationMessages: this.validationMessagesProp
    };
  },
  watch: {
    validationMessagesProp: function(newVal) {
      return (this.validationMessages = newVal);
    }
  },
  computed: {
    signUpInfoPayload() {
      return {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        area: this.area,
        gender: this.gender,
        birthdate: this.birthdate
      };
    },
    isMobile() {
      return window.innerWidth <= 768;
    }
  },
  methods: {
    searchCityOptions(city) {
      axios
        .post("/api/map/auto-complete", { input: city.query })
        .then(
          res =>
            (this.filteredCityOptions = res.data.output.map(
              ({ name, region, country, coordinates }) => {
                return {
                  name: name,
                  region: region,
                  country: country,
                  location: { type: "Point", coordinates: coordinates }
                };
              }
            ))
        )
        .catch(error => console.log("Error from /api/maps", error));
    },
    sendSignUpInfo() {
      return this.$emit("send-sign-up-info", this.signUpInfoPayload);
    },
    searchGenderOptions(event) {
      return (this.filteredGenderOptions = this.genderOptions.filter(option => {
        return option.toLowerCase().startsWith(event.query.toLowerCase());
      }));
    }
  }
};
</script>

<style scoped lang="scss">
#city {
  width: 100% !important;
}
</style>