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

      <div
        class="flex flex-column-reverse md:flex-row md:align-items-baseline justify-content-center md:justify-content-between"
      >
        <div class="flex flex-row">
          <router-link :to="{ name: 'Home' }" class="no-underline">
            <div class="cta-button border-round mt-3 mr-3">
              Back to Home
            </div>
          </router-link>
        </div>

        <div class="flex flex-row align-items-center mt-3 md:mt-0">
          <p class="font-medium mr-2 opacity-70 select-none">Share:</p>
          <SocialShareIcons
            :description="
              'HumeOne brings people together by organizing intimate social gatherings and events. Sign up for free to start receiving invites in your area.'
            "
            :linkProp="'https://www.humeone.com/'"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SocialShareIcons from "../components/SocialShareIcons.vue";

export default {
  name: "Sign Up Confirmation",
  components: { SocialShareIcons },
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
:deep(.svg-inline--fa:not(.fa-bars)) {
  color: $primary-font-color;
  transition: all 0.2s;
  font-size: 28px;
  opacity: 0.5;

  &:hover {
    opacity: 1;
    cursor: pointer;
    transform: scale(0.95);
  }
}

:deep(.copy-icon) {
  font-size: 24px !important;
}
</style>