<template>
  <Head>
    <meta name="robots" content="noindex" />
  </Head>

  <section class="section off-white-bg min-h-screen">
    <TheHeader />

    <div
      class="container page-not-found-container flex flex-column text-center justify-content-center align-items-center"
    >
      <h1 class="text-3xl mt-8">404: Page Not Found</h1>

      <h2 class="mt-3 text-xl font-normal">
        If you have any questions, you can reach us at
        <a href="mailto:team@humeone.com">team@humeone.com</a>
      </h2>

      <router-link :to="{ name: 'Home' }" class="no-underline mt-5">
        <div class="cta-button border-round">
          Back to Home
        </div>
      </router-link>
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
  }
};
</script>