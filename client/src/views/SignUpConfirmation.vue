<template>
  <Head>
    <meta name="robots" content="noindex" />
  </Head>

  <section class="section form-section">
    <TheHeader />

    <div class="container form-card px-3 py-4 md:px-4 md:py-5">
      <h1 class="text-2xl">Sign Up Confirmation</h1>
      <p class="line-height-3 mt-3">
        Thank you for registering! You will now receive invites for events in
        your area that match your interests. If you have any questions or would
        like to unsubscribe, please let us know at
        <a href="mailto:team@humeone.com">team@humeone.com</a>.
      </p>

      <a href="/" @click.prevent="routeToHome()" class="no-underline mt-3">
        <div class="cta-button border-round">
          Back to Home
        </div>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: "Sign Up Confirmation",
  data() {
    return {};
  },
  methods: {
    routeToHome() {
      this.$router.push({ name: "Home" });
    }
  }
};
</script>

<style scoped lang="scss">
</style>