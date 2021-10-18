<template>
  <Head>
    <meta name="description" :content="eventDetails.description" />

    <!-- Open Graph for Social Share -->
    <meta property="og:title" :content="eventDetails.name" />
    <meta
      property="og:image"
      :content="
        'https://humeone.com' + require(`@/assets/${eventDetails.image}`)
      "
    />
    <meta property="og:description" :content="eventDetails.description" />
    <meta property="og:url" :content="eventLink" />
  </Head>

  <section class="section form-section">
    <div class="container form-card px-3 py-4 md:px-4 md:py-5">
      <h1 class="form-header">Registration Confirmation</h1>
      <h2 class="form-title" v-if="eventDetails.name">
        {{ eventDetails.name }}
      </h2>
      <p class="line-height-3 mt-3">
        Thank you for registering! You should receive a confirmation email
        shortly with additional details. If you have any questions or would like
        to cancel, please email
        <a href="mailto:team@humeone.com">team@humeone.com</a>.
      </p>

      <div
        class="flex flex-column md:flex-row-reverse md:align-items-baseline justify-content-center md:justify-content-between"
      >
        <div class="flex flex-row align-items-center mt-3 md:mt-0">
          <a @click="copyUrl()" class="relative mr-2">
            <font-awesome-icon :icon="['fas', 'link']" class="copy-icon" />
            <p
              v-show="showCopyTip"
              class="copy-tip text-sm select-none ml-1 py-1 px-1 absolute left-100 border-round z-1"
              style="background-color: rgb(50,50,50); color: white;"
            >
              Copied!
            </p>
          </a>
          <a
            :href="shareLink.facebook"
            target="_blank"
            @click.prevent="showShareWindow(shareLink.facebook)"
            class="mr-2"
          >
            <font-awesome-icon :icon="['fab', 'facebook-square']" />
          </a>

          <a
            :href="shareLink.twitter"
            target="_blank"
            @click.prevent="showShareWindow(shareLink.twitter)"
            class="mr-2"
          >
            <font-awesome-icon :icon="['fab', 'twitter-square']" />
          </a>

          <a
            :href="shareLink.linkedin"
            @click.prevent="showShareWindow(shareLink.linkedin)"
            target="_blank"
          >
            <font-awesome-icon :icon="['fab', 'linkedin']" />
          </a>
        </div>

        <a href="/" @click.prevent="routeToHome()" class="no-underline mt-3">
          <div class="cta-button border-round">
            Back to Home
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import eventList from "../../../resources/events.json";

export default {
  name: "Event Registration Confirmation",
  data() {
    return {
      showCopyTip: false,
      eventDetails:
        eventList.find(event => event.id === this.$route.query.eventId) || {},
      eventId: this.$route.query.eventId
    };
  },
  computed: {
    eventLink() {
      return `https://www.humeone.com/event-registration?eventId=${this.eventId}`;
    },
    shareLink() {
      return {
        facebook: `https://www.facebook.com/dialog/share?app_id=431777641641190&href=${this.eventLink}&quote=HumeOne is hosting "${this.eventDetails.name}" on ${this.eventDetails.dateTime}. Check it out using the link below.&hashtag=%23HumeOne`,
        twitter: `https://twitter.com/intent/tweet?url=${this.eventLink}&text=HumeOne is hosting "${this.eventDetails.name}" on ${this.eventDetails.dateTime}. Check it out using the link below.&hashtags=HumeOne,ThingsToDo,Events`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${this.eventLink}`
      };
    }
  },
  methods: {
    routeToHome() {
      this.$router.push({ name: "Home" });
    },
    showShareWindow(value) {
      let left = (screen.width - 570) / 2;
      let top = (screen.height - 570) / 2;
      let params =
        "menubar=no,toolbar=no,status=no,width=570,height=570,top=" +
        top +
        ",left=" +
        left;

      const url = encodeURI(value);

      window.open(url, "NewWindow", params);
    },
    copyUrl() {
      navigator.clipboard.writeText(this.eventLink);
      this.showCopyTip = true;
      setTimeout(() => {
        this.showCopyTip = false;
      }, 1000);
    }
  }
};
</script>

<style scoped lang="scss">
.svg-inline--fa {
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

.copy-icon {
  font-size: 24px;
}

.copy-tip {
  top: -2px;
}
</style>