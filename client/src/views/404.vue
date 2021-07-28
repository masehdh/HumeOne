<template>
  <div class="section">
    <div class="container">
      <h1>404: Page Not Found</h1>
      <h2>
        If you have any questions, you can reach us at
        <a href="mailto:humeoneteam@gmail.com">humeoneteam@gmail.com</a>
      </h2>
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
      validationMessages: {}
    };
  }
};
</script>

<style scoped lang="scss">
.container {
  color: #444450;
  display: flex;
  flex-direction: column;
  padding: 32px;
  margin-bottom: 32px;
  text-align: center;
  h1 {
    font-size: 32px;
    font-weight: 600;
  }
  h2 {
    margin-top: 16px;
    font-size: 20px;
    font-weight: 400;
  }
}
</style>