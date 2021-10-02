<template>
  <div class="section form-section">
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
      <div class="home-btn mt-3" @click="goHome()">
        Back to Home
      </div>
    </div>
  </div>
</template>

<script>
import eventList from "../../../resources/events.json";

export default {
  name: "Event Registration Confirmation",
  data() {
    return {
      eventDetails:
        eventList.find(event => event.id === this.$route.query.eventId) || {},
      eventId: this.$route.query.eventId
    };
  },
  methods: {
    goHome() {
      this.$router.push({ name: "Home" });
    }
  }
};
</script>

<style scoped lang="scss">
.home-btn {
  padding: 8px 16px;
  width: fit-content;
  border-radius: 4px;
  background: rgb(255, 124, 172);
  background: linear-gradient(
    90deg,
    rgba(255, 124, 172, 1) 0%,
    rgba(255, 245, 108, 1) 100%
  );
  max-width: 100%;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  box-shadow: 3px 3px 12px rgba($color: #000000, $alpha: 0.2);
  color: #444444;
  transition: all 0.3s ease-out;
  &:hover {
    box-shadow: 6px 6px 10px rgba($color: #000000, $alpha: 0.2);
    cursor: pointer;
    transform: scale(1);
    &:before {
      opacity: 1;
    }
  }

  &:before {
    border-radius: inherit;
    background-image: linear-gradient(
      90deg,
      rgba(255, 245, 108, 1) 0%,
      rgba(255, 124, 172, 1) 100%
    );
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: -1;
    transition: opacity 0.45s ease;
  }
}
</style>