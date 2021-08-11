<template>
  <div class="section off-white-bg">
    <div class="container home-page">
      <img
        class="hero-image fadein animation-duration-1000"
        src="../../../resources/home-page-squad.png"
      />
      <div class="tagline mx-3 fadein animation-duration-1000">
        <h1>
          Make new friends, grow your circle
        </h1>
      </div>
      <div class="details mx-3 fadein animation-duration-1000">
        <p>
          Humeone brings people together by organizing intimate hyper-local
          events. No endless feeds, no need to coordinate. We'll only invite you
          to events that match your interests. We don't just tell you what's
          already out there, our hosts create events designed for you and those
          in your area. Whether you’re looking to network, learn, or play, sign
          up today.
        </p>
      </div>
      <router-link
        class="router-link mx-3 fadein animation-duration-1000"
        :to="{ name: 'Sign Up' }"
      >
        <div class="cta-button">
          SIGN UP
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="scss" scoped>
.off-white-bg {
  background-color: $off-white;
}
.home-page {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;

  .hero-image {
    max-width: 100%;
    width: 680px;
    height: auto;
    align-self: center;
    margin-top: 24px;
    padding: 10px;
  }

  .tagline {
    text-align: center;
    margin-top: 40px;
    color: $primary-font-color;
  }

  .details {
    color: $primary-font-color;
    text-align: center;
    align-self: center;
    margin-top: 28px;
    margin-bottom: 28px;
    font-size: 18px;
    max-width: 726px;
  }

  .router-link {
    text-decoration: none;
    align-self: center;
    margin-bottom: 40px;
  }

  .cta-button {
    padding: 8px 16px;
    border-radius: 50px;
    background: rgb(255, 124, 172);
    background: linear-gradient(
      90deg,
      rgba(255, 124, 172, 1) 0%,
      rgba(255, 245, 108, 1) 100%
    );
    max-width: 100%;
    width: 140px;
    text-align: center;
    font-weight: 500;
    font-size: 16px;
    box-shadow: 3px 3px 12px rgba($color: #000000, $alpha: 0.2);
    color: $primary-font-color;
    transition: all 0.3s ease-out;
    &:hover {
      box-shadow: 6px 6px 10px rgba($color: #000000, $alpha: 0.2);
      transform: scale(1.05);
    }
  }
}
</style>
