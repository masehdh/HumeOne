<template>
  <div class="section form-section">
    <div class="container form-card">
      <h1 id="form-title">Sign Up Confirmation</h1>
      <p>
        Thank you for registering! You should receive a confirmation email
        shortly with additional details. If you have any questions or would like
        to cancel, please email
        <a href="mailto:team@humeone.com">team@humeone.com</a>.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sign Up Confirmation",
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