<template>
  <div class="container form-card px-3 py-4 md:px-4 md:py-5">
    <h3 class="form-section-title">Sign Up</h3>
    <div>
      <p class="mt-3 line-height-3">
        Complete the form below to start receiving invites
      </p>
    </div>
    <!-- First Name Field -->
    <div class="form-control">
      <span class="p-float-label">
        <InputText
          type="text"
          id="first-name"
          v-model="firstName"
          v-tooltip.bottom.focus="'Your name will be displayed publicly'"
          :class="{
            'p-invalid': validationMessages.hasOwnProperty('firstName'),
          }"
          class="w-20rem "
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
            'p-invalid': validationMessages.hasOwnProperty('lastName'),
          }"
          class="w-20rem "
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

    <!-- Email Field -->
    <div class="form-control ">
      <span class="p-float-label">
        <InputText
          type="text"
          id="email"
          v-model="email"
          :class="{
            'p-invalid': validationMessages.hasOwnProperty('email'),
          }"
          class="w-20rem "
          @input="$emit('send-email', email)"
        />
        <label for="email">Email</label>
      </span>
      <div v-for="(message, index) of validationMessages['email']" :key="index">
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
          :field="(area) => `${area.name}, ${area.region}, ${area.country}`"
          v-model="area"
          v-tooltip.bottom.focus="'Helps us plan events in your area'"
          :suggestions="filteredCityOptions"
          :minLength="3"
          :delay="300"
          @complete="searchCityOptions($event)"
          :class="{
            'p-invalid': validationMessages.hasOwnProperty('area'),
          }"
          class="w-20rem "
        />
        <label for="city">City</label>
      </span>
      <div v-for="(message, index) of validationMessages['area']" :key="index">
        <div class="validation-message">{{ message }}</div>
      </div>
    </div>

    <!-- Over 18 field -->
    <div class="form-control">
      <div class="field-checkbox mb-0 mt-2">
        <Checkbox v-model="over18" id="over-18" :binary="true" />
        <label for="over-18">I am 18 years old or over</label>
      </div>
      <div
        v-for="(message, index) of validationMessages['over18']"
        :key="index"
      >
        <div class="validation-message">{{ message }}</div>
      </div>
    </div>

    <div class="mt-2">
      <Button
        label="Submit"
        class="p-button-md p-button-primary submit-button"
        @click="submitSignUp"
      />
    </div>
    <Message
      v-for="msg of serverResponses"
      :severity="msg.severity"
      :key="msg.content"
    >
      {{ msg.content }}
    </Message>
  </div>
</template>

<script>
import axios from "axios";
import { signUpValidation } from "../../../resources/validation";

export default {
  name: "Sign Up Form",
  emits: ["next-step", "send-email"],
  data() {
    return {
      serverResponses: [],
      firstName: "",
      lastName: "",
      email: "",
      over18: false,
      filteredCityOptions: [],
      area: "",
      validationMessages: {},
    };
  },
  methods: {
    searchCityOptions(city) {
      axios
        .post("/api/map/auto-complete", { input: city.query })
        .then(
          (res) =>
            (this.filteredCityOptions = res.data.output.map(
              ({ name, region, country, coordinates }) => {
                return {
                  name: name,
                  region: region,
                  country: country,
                  location: { type: "Point", coordinates: coordinates },
                };
              }
            ))
        )
        .catch((error) => console.log("Error from /api/maps", error));
    },
    submitSignUp() {
      this.validationMessages = {};
      const { error } = signUpValidation({
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        area: this.area,
        over18: this.over18,
      });
      if (error) {
        error.details.forEach(({ path }) => {
          let messages = error.details
            .filter((val) => val.path[0] === path[0])
            .map(({ message }) => message);
          messages = [...new Set(messages)];
          return (this.validationMessages[path[0]] = messages);
        });
        return;
      }
      axios
        .post("/api/sign-up", {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          area: this.area,
          over18: this.over18,
        })
        .then(() => {
          this.$emit("next-step", "PreferencesForm");
        })
        .catch((error) =>
          this.serverResponses.push({
            severity: "error",
            content: error.response.data.message,
          })
        );
    },
  },
};
</script>

<style scoped lang="scss">
#city {
  width: 100% !important;
}
</style>
