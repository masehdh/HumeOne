<template>
  <div class="container form-card px-3 py-4 md:px-4 md:py-5">
    <h3 class="form-section-title">Sign Up</h3>
    <div>
      <p class="mt-3 mb-2">
        Fill out the form below to register for events and recieve invites for
        events in your area that match your preferences.
      </p>
    </div>

    <div class="form-control">
      <span class="p-float-label">
        <InputText
          type="text"
          id="first-name"
          v-model="firstName"
          :class="{
            'p-invalid': validationMessages.hasOwnProperty('firstName')
          }"
          class="w-20rem"
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
          class="w-20rem"
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
          class="w-20rem"
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
        <InputMask
          v-model="phoneNumber"
          mask="(999)-999-9999"
          slotChar="X"
          @change="sendSignUpInfo()"
          :class="{
            'p-invalid': validationMessages.hasOwnProperty('phoneNumber')
          }"
          class="w-20rem"
        />
        <label for="phoneNumber">Phone Number (Optional)</label>
      </span>
      <div
        v-for="(message, index) of validationMessages['phoneNumber']"
        :key="index"
      >
        <div class="validation-message">{{ message }}</div>
      </div>
    </div>

    <div class="form-control">
      <span class="p-float-label">
        <AutoComplete
          forceSelection
          type="text"
          id="address"
          field="address"
          v-model="address"
          :suggestions="filteredAddressOptions"
          :minLength="5"
          :delay="500"
          @complete="searchAddressOptions($event)"
          :class="{
            'p-invalid': validationMessages.hasOwnProperty('address')
          }"
          class="w-20rem"
          @blur="sendSignUpInfo()"
        />
        <label for="address">Address</label>
      </span>
      <div
        v-for="(message, index) of validationMessages['address']"
        :key="index"
      >
        <div class="validation-message">{{ message }}</div>
      </div>
    </div>

    <div class="form-control">
      <span class="p-float-label">
        <InputMask
          v-model="birthdate"
          mask="99/99/9999"
          slotChar="MM/DD/YYYY"
          @change="sendSignUpInfo()"
          :class="{
            'p-invalid': validationMessages.hasOwnProperty('birthdate')
          }"
          class="w-20rem"
        />
        <label for="birthdate">Birthdate</label>
      </span>
      <div
        v-for="(message, index) of validationMessages['birthdate']"
        :key="index"
      >
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
          :minLength="1"
          :delay="0"
          @complete="searchGenderOptions($event)"
          :class="{
            'p-invalid': validationMessages.hasOwnProperty('gender')
          }"
          class="w-20rem"
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

    <div class="form-control">
      <span>
        <label class="block mb-2" for="attendee-info">
          Anything else you would like us to know?
        </label>
        <Textarea
          id="attendee-info"
          v-model="attendeeInfo"
          :autoResize="true"
          placeholder="Allergies, transportation, concerns..."
          :class="{
            'p-invalid': validationMessages.hasOwnProperty('attendeeInfo')
          }"
          class="w-12"
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
import axios from "axios";

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
      filteredAddressOptions: [],
      address: "",
      gender: "",
      birthdate: "",
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
    searchAddressOptions(address) {
      axios
        .post("/api/map/auto-complete", { input: address.query })
        .then(
          res =>
            (this.filteredAddressOptions = res.data.output.map(
              ({ place_name, center }) => {
                return {
                  address: place_name,
                  location: { type: "Point", coordinates: center }
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
  },
  computed: {
    yearRange() {
      return `${new Date().getFullYear() - 115} : ${new Date().getFullYear() -
        17}`;
    },
    signUpInfoPayload() {
      return {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        address: this.address,
        gender: this.gender,
        birthdate: this.birthdate,
        phoneNumber: this.phoneNumber,
        attendeeInfo: this.attendeeInfo
      };
    }
  }
};
</script>

<style scoped lang="scss">
#address {
  width: 100% !important;
}
</style>
