<template>
  <div class="section form-section">
    <div class="container form-card">
      <h1 id="form-title">Registration Confirmation</h1>
      <h2 id="event-title">{{ eventDetails.name }}</h2>
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
#form-title {
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 500;
  color: #e67e73;
}

#event-title {
  padding-top: 8px;
  padding-bottom: 16px;
  font-size: 32px;
  font-weight: 600;
}
</style>