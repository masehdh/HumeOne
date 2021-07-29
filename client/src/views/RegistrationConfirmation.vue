<template>
  <div class="section form-section">
    <div class="container form-card">
      <h1 id="form-title">Registration Confirmation</h1>
      <h2 id="event-title">Bonfire at Earl Bales Park</h2>
      <p>
        Thank you for registering! You should receive a confirmation email
        shortly with additional details. If you have any questions or would like
        to cancel, please email
        <a href="mailto:humeoneteam@gmail.com">humeoneteam@gmail.com</a>.
      </p>
    </div>
  </div>
</template>

<script>
// const { eventRegistrationValidation } = require("@/validation/validation.js");

export default {
  name: "Registration Confirmation",
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
#form-title {
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 500;
  color: #e67e73;
}

#event-title {
  padding-top: 8px;
  padding-bottom: 16px;
  font-size: 32px;
  font-weight: 600;
}
</style>