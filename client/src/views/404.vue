<template>
  <div class="section">
    <div class="container">
      <h1>404: Page Not Found</h1>
      <h2>If you have any questions, you can reach us at <a href="mailto:humeoneteam@gmail.com">humeoneteam@gmail.com</a></h2>
    </div>
  </div>
</template>

<script>
// const { eventRegistrationValidation } = require("@/validation/validation.js");

export default {
  name: "404",
  data() {
    return {
      name: "",
      email: "",
      messages: [],
      validationMessages: {},
    };
  },
};
</script>

<style scoped lang="scss">

</style>