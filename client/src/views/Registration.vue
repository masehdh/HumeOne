<template>
  <div class="section">
    <div class="container"></div>
  </div>
</template>

<script>
const { eventRegistrationValidation } = require("@/validation/validation.js");

export default {
  name: "Register",
  data() {
    return {
      name: "",
      email: "",
      messages: [],
      validationMessages: {}
    };
  }
};
</script>

<style scoped lang="scss">
</style>