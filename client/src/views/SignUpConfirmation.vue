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

      <p class="line-height-3 mt-3">
        Want to bring a friend? Use the button below to send them an invite!
      </p>

      <div
        class="flex flex-column-reverse md:flex-row md:align-items-baseline justify-content-center md:justify-content-between"
      >
        <div
          class="cta-button border-round no-underline mt-3"
          @click="showInviteModal()"
          v-if="firstName && lastName"
        >
          Invite Friends
        </div>

        <router-link :to="{ name: 'Home' }" class="no-underline" v-else>
          <div class="cta-button border-round mt-3 mr-3">
            Back to Home
          </div>
        </router-link>

        <InviteDialog
          v-if="firstName && lastName"
          :messageProp="
            `${firstName.charAt(0).toUpperCase()}${firstName.slice(
              1
            )} ${lastName.charAt(0).toUpperCase()}${lastName.slice(
              1
            )} has signed up for HumeOne and would like to invite you to join! HumeOne brings people together by organizing intimate social gatherings and events. Sign up for free using the the button below and let us know what you are interested in to start receiving invites today!`
          "
          :subjectProp="
            `${firstName.charAt(0).toUpperCase()}${firstName.slice(
              1
            )} ${lastName.charAt(0).toUpperCase()}${lastName.slice(
              1
            )} is inviting you to join HumeOne`
          "
          :linkProp="'https://www.humeone.com/'"
          ref="inviteModal"
        />

        <div class="flex flex-row align-items-center mt-3 md:mt-0">
          <p class="font-medium mr-2 opacity-70 select-none">Share:</p>
          <SocialShareIcons
            :description="
              'HumeOne brings people together by organizing intimate social gatherings and events. Sign up for free to start receiving invites in your area.'
            "
            :linkProp="'https://www.humeone.com'"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SocialShareIcons from "../components/SocialShareIcons.vue";
import InviteDialog from "../components/InviteDialog.vue";

export default {
  name: "Sign Up Confirmation",
  components: { SocialShareIcons, InviteDialog },
  data() {
    return {
      firstName: this.$route.query.firstName,
      lastName: this.$route.query.lastName
    };
  },
  methods: {
    showInviteModal() {
      return this.$refs.inviteModal.showInviteModal();
    }
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