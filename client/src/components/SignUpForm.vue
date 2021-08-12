<template>
  <div class="container form-card px-3 py-4 md:px-4 md:py-5">
    <h3 class="form-section-title">Attendee Sign Up</h3>
    <div class="form-control">
      <span class="p-float-label">
        <InputText
          type="text"
          id="first-name"
          v-model="firstName"
          :class="{
            'p-invalid': validationMessages.hasOwnProperty('firstName')
          }"
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

    <div class="form-control">
      <span class="p-float-label">
        <InputText
          type="text"
          id="last-name"
          v-model="lastName"
          :class="{
            'p-invalid': validationMessages.hasOwnProperty('lastName')
          }"
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

    <div class="form-control">
      <span class="p-float-label">
        <InputText
          type="text"
          id="email"
          v-model="email"
          :class="{
            'p-invalid': validationMessages.hasOwnProperty('email')
          }"
          @blur="sendSignUpInfo()"
        />
        <label for="email">Email</label>
      </span>
      <div v-for="(message, index) of validationMessages['email']" :key="index">
        <div class="validation-message">{{ message }}</div>
      </div>
    </div>

    <div class="form-control">
      <span class="p-float-label">
        <AutoComplete
          forceSelection
          type="text"
          id="city"
          v-model="city"
          :suggestions="filteredCityOptions"
          @complete="searchCityOptions($event)"
          :class="{
            'p-invalid': validationMessages.hasOwnProperty('city')
          }"
          @blur="sendSignUpInfo()"
        />
        <label for="city">City</label>
      </span>
      <div v-for="(message, index) of validationMessages['city']" :key="index">
        <div class="validation-message">{{ message }}</div>
      </div>
    </div>

    <div class="form-control">
      <span class="p-float-label">
        <AutoComplete
          type="text"
          id="gender"
          v-model="gender"
          :suggestions="filteredGenderOptions"
          @complete="searchGenderOptions($event)"
          :class="{
            'p-invalid': validationMessages.hasOwnProperty('gender')
          }"
          @blur="sendSignUpInfo()"
        />
        <label for="gender">Gender (optional)</label>
      </span>
      <div
        v-for="(message, index) of validationMessages['gender']"
        :key="index"
      >
        <div class="validation-message">{{ message }}</div>
      </div>
    </div>

    <div class="form-control">
      <span class="p-float-label">
        <Dropdown
          v-model="ageGroup"
          :options="ageOptions"
          optionLabel="ageGroup"
          @change="sendSignUpInfo()"
          :class="{
            'p-invalid': validationMessages.hasOwnProperty('ageGroup')
          }"
        />
        <label for="ageGroup">Age Group</label>
      </span>
      <div
        v-for="(message, index) of validationMessages['ageGroup']"
        :key="index"
      >
        <div class="validation-message">{{ message }}</div>
      </div>
    </div>

    <div class="form-control">
      <span class="p-float-label">
        <InputText
          type="text"
          id="phone-number"
          v-model="phoneNumber"
          :class="{
            'p-invalid': validationMessages.hasOwnProperty('phoneNumber')
          }"
          @blur="sendSignUpInfo()"
        />
        <label for="phone-number">Phone Number</label>
      </span>
      <div
        v-for="(message, index) of validationMessages['phoneNumber']"
        :key="index"
      >
        <div class="validation-message">{{ message }}</div>
      </div>
    </div>

    <div class="form-control">
      <span>
        <label class="regular-label" for="attendee-info">
          Anything else you would like us to know?
        </label>
        <Textarea
          id="attendee-info"
          v-model="attendeeInfo"
          :autoResize="true"
          placeholder="E.g. Allergies, transportation, etc."
          :class="{
            'p-invalid': validationMessages.hasOwnProperty('attendeeInfo')
          }"
          @blur="sendSignUpInfo()"
        />
      </span>
      <div
        v-for="(message, index) of validationMessages['attendeeInfo']"
        :key="index"
      >
        <div class="validation-message">{{ message }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import cityList from "../../../resources/canadianCities.json";

export default {
  name: "Sign Up Form",
  props: {
    validationMessagesProp: Object,
    emailProp: String
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      filteredCityOptions: [],
      city: "",
      gender: "",
      ageOptions: [
        { ageGroup: "18-24" },
        { ageGroup: "25-34" },
        { ageGroup: "35+" }
      ],
      ageGroup: "",
      phoneNumber: "",
      attendeeInfo: "",
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
  created() {
    if (this.emailProp) return (this.email = this.emailProp);
  },
  methods: {
    searchCityOptions(city) {
      setTimeout(() => {
        if (city.query.trim().length < 1) {
          this.filteredCityOptions = this.cityOptions;
        } else {
          this.filteredCityOptions = this.cityOptions.filter(option => {
            return option.toLowerCase().startsWith(city.query.toLowerCase());
          });
        }
      }, 250);
    },
    sendSignUpInfo() {
      return this.$emit("send-sign-up-info", this.signUpInfoPayload);
    },
    searchGenderOptions(event) {
      setTimeout(() => {
        if (event.query.trim().length < 1) {
          this.filteredGenderOptions = this.genderOptions;
        } else {
          this.filteredGenderOptions = this.genderOptions.filter(option => {
            return option.toLowerCase().startsWith(event.query.toLowerCase());
          });
        }
      }, 250);
    }
  },
  computed: {
    cityOptions() {
      return cityList.map(
        cityEntry => `${cityEntry.city}, ${cityEntry.province}`
      );
    },
    signUpInfoPayload() {
      return {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        city: this.city,
        gender: this.gender,
        ageGroup: this.ageGroup.ageGroup,
        phoneNumber: this.phoneNumber,
        attendeeInfo: this.attendeeInfo
      };
    }
  }
};
</script>

<style scoped lang="scss">
</style>
