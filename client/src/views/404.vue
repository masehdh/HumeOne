<template>
  <div class="section off-white-bg">
    <div class="container page-not-found-container">
      <div class="mx-3 ">
        <h1>404: Page Not Found</h1>
        <h2>
          If you have any questions, you can reach us at
          <a href="mailto:team@humeone.com">team@humeone.com</a>
        </h2>
        <div class="home-btn mt-5" @click="goHome()">
          Back to Home
        </div>
      </div>
    </div>
  </div>
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
  },
  methods: {
    goHome() {
      this.$router.push({ name: "Home" });
    }
  }
};
</script>

<style scoped lang="scss">
.page-not-found-container {
  color: #444450;
  display: flex;
  flex-direction: column;
  padding: 30vh 0;
  margin-bottom: 32px;
  text-align: center;
  h1 {
    font-size: 32px;
    font-weight: 600;
  }
  h2 {
    margin-top: 16px;
    font-size: 20px;
    font-weight: 400;
  }
}

.home-btn {
  padding: 8px 16px;
  margin-left: auto;
  margin-right: auto;
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