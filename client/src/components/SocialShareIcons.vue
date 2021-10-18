<template>
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
</template>

<script>
export default {
  name: "Social Share Icons",
  props: {
    eventLink: String,
    eventDetails: Object
  },
  data() {
    return {
      showCopyTip: false,
    }
  },
  computed: {
    shareLink() {
      return {
        facebook: `https://www.facebook.com/dialog/share?app_id=431777641641190&href=${this.eventLink}&quote=HumeOne is hosting "${this.eventDetails.name}" on ${this.eventDetails.dateTime}. Check it out using the link below.&hashtag=%23HumeOne`,
        twitter: `https://twitter.com/intent/tweet?url=${this.eventLink}&text=HumeOne is hosting "${this.eventDetails.name}" on ${this.eventDetails.dateTime}. Check it out using the link below.&hashtags=HumeOne,ThingsToDo,Events`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${this.eventLink}`
      };
    }
  },
  methods: {
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

<style lang="scss" scoped>
.copy-tip {
  top: -2px;
}
</style>