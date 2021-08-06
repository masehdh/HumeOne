<template>
  <div class="section form-section">
    <div class="container form-card">
      <h1 class="form-header">Payment Processing</h1>
      {{ emailProp }}
      {{ eventIdProp }}
    </div>
  </div>
</template>

<script>

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
</style>