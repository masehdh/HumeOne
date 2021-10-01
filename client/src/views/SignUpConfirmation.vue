<template>
  <div class="section form-section">
    <div class="container form-card px-3 py-4 md:px-4 md:py-5">
      <h1 class="text-2xl">Sign Up Confirmation</h1>
      <p class="line-height-3 mt-3">
        Thank you for registering! You will now receive invites for events in
        your area that match your interests. If you have any questions or would
        like to unsubscribe, please let us know at
        <a href="mailto:team@humeone.com">team@humeone.com</a>.
      </p>
      <div class="home-btn mt-3" @click="goHome()">
        Return to Home
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sign Up Confirmation",
  data() {
    return {};
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
  }
}
</style>