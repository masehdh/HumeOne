<template>
  <section class="section off-white-bg">
    <div
      class="container page-not-found-container flex flex-column text-center justify-content-center align-items-center mx-3"
    >
      <h1>404: Page Not Found</h1>

      <h2>
        If you have any questions, you can reach us at
        <a href="mailto:team@humeone.com">team@humeone.com</a>
      </h2>

      <div class="cta-button mt-5 border-round" @click="routeToHome()">
        Back to Home
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "404",
  data() {
    return {
      name: "",
      email: "",
      messages: [],
      validationMessages: {}
    };
  },
  methods: {
    routeToHome() {
      this.$router.push({ name: "Home" });
    }
  }
};
</script>

<style scoped lang="scss">
.page-not-found-container {
  color: #444450;
  padding: 30vh 0;
  margin-bottom: 32px;
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