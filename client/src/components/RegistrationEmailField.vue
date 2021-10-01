<template>
  <div class="form-control">
    <span class="p-float-label">
      <InputText
        type="text"
        id="email"
        v-model="email"
        @input="sendEmail()"
        @keyup.enter="$emit('submit-registration')"
        :class="{
          'p-invalid': validationMessagesProp.hasOwnProperty('email')
        }"
        class="w-20rem "
      />

      <label for="email">Email</label>
    </span>

    <div
      v-for="(message, index) of validationMessagesProp['email']"
      :key="index"
    >
      <div class="validation-message">{{ message }}</div>
    </div>
  </div>

  <div>
    <Button
      label="Next"
      class="p-button-md p-button-primary submit-button"
      @click="$emit('submit-registration')"
    />
  </div>
  <div
    v-for="(message, index) of validationMessagesProp['submit']"
    :key="index"
  >
    <div class="validation-message">{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "Registration Email Field",
  props: { validationMessagesProp: Object },
  emits: ["send-email", "submit-registration"],
  data() {
    return {
      email: ""
    };
  },
  methods: {
    sendEmail() {
      this.$emit("send-email", { email: this.email });
    }
  }
};
</script>

<style>
</style>