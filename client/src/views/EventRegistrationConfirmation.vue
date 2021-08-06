<template>
  <div class="section form-section">
    <div class="container form-card">
      <h1 class="form-header">Registration Confirmation</h1>
      <h2 class="form-title">{{ eventDetails.name }}</h2>
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
import axios from "axios";
import eventList from "../../../resources/events.json";

export default {
  name: "Event Registration Confirmation",
  data() {
    return {
      eventDetails:
        eventList.find(event => event.id === this.$route.query.eventId) || {},
      eventId: this.$route.query.eventId,
      email: this.$route.query.email
    };
  },
  mounted() {
    axios
      .post("/api/event-registration/confirmation", {
        email: this.email,
        eventId: this.eventId
      })
      .catch(error => console.log(error.response.data));
  }
};
</script>

<style scoped lang="scss">
</style>