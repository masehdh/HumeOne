<template>
  <div class="section form-section">
    <div class="container form-card">
      <h1 id="form-title">Payment Processing</h1>
      {{ emailProp }}
      {{ eventIdProp }}
    </div>
  </div>
</template>

<script>
// const { eventRegistrationValidation } = require("@/validation/validation.js");

export default {
  name: "Payment Processing",
  props: {
    emailProp: String,
    eventIdProp: String,
  },
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