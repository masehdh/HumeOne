<template>
  <!-- First Name Field -->
  <div class="form-control">
    <span class="p-float-label">
      <InputText
        type="text"
        id="first-name"
        v-model="firstName"
        v-tooltip.bottom.focus="'Your name will be displayed publicly'"
        :class="{
          'p-invalid': validationMessagesProp.hasOwnProperty('firstName')
        }"
        class="w-20rem"
        @input="sendAdditionalInfo()"
      />
      <label for="first-name">First Name</label>
    </span>
    <div
      v-for="(message, index) of validationMessagesProp['firstName']"
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
          'p-invalid': validationMessagesProp.hasOwnProperty('lastName')
        }"
        class="w-20rem"
        @input="sendAdditionalInfo()"
      />
      <label for="last-name">Last Name</label>
    </span>
    <div
      v-for="(message, index) of validationMessagesProp['lastName']"
      :key="index"
    >
      <div class="validation-message">{{ message }}</div>
    </div>
  </div>

  <!-- Over 18 field -->
  <div class="form-control">
    <div class="field-checkbox mb-0">
      <Checkbox
        v-model="over18"
        id="over-18"
        :binary="true"
        @change="sendAdditionalInfo()"
      />
      <label for="over-18">I am 18 years old or over</label>
    </div>
    <div
      v-for="(message, index) of validationMessagesProp['over18']"
      :key="index"
    >
      <div class="validation-message">{{ message }}</div>
    </div>
  </div>

  <div class="mt-3">
    <Button
      label="Back"
      class="p-button-md p-button-primary submit-button mr-1 mt-0"
      @click="$emit('back')"
    />
    <Button
      label="Submit"
      class="p-button-md p-button-primary submit-button mt-0"
      @click="$emit('submit-sign-up')"
    />
    <div
      v-for="(message, index) of validationMessagesProp['submit']"
      :key="index"
    >
      <div class="validation-message">{{ message }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Registration Additional Fields",
  props: { validationMessagesProp: Object },
  emits: ["submit-sign-up", "back", "send-additional-info"],
  data() {
    return {
      firstName: "",
      lastName: "",
      over18: false
    };
  },
  methods: {
    sendAdditionalInfo() {
      this.$emit("send-additional-info", {
        firstName: this.firstName,
        lastName: this.lastName,
        over18: this.over18
      });
    }
  }
};
</script>

<style>
</style>