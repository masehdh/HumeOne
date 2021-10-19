<template>
  <div class="container mb-4">
    <header
      class="flex justify-content-between md:justify-content-center align-items-center h-4rem px-3 md:px-4 py-2"
    >
      <nav class="hidden md:flex flex-row">
        <a href="/" @click.prevent="routeToHome()" class="nav-link">
          <p>Home</p>
          <div class="link-underline"></div>
        </a>
        <a href="/" @click.prevent="routeToHome()" class="nav-link">
          <p>About</p>
          <div class="link-underline"></div>
        </a>
        <a href="/" @click.prevent="routeToHome()" class="nav-link">
          <p>Contact</p>
          <div class="link-underline"></div>
        </a>
      </nav>

      <a
        href="/"
        @click.prevent="routeToHome()"
        class="no-underline h-full md:mx-5"
      >
        <img
          id="humeone-logo__img"
          class="max-h-full"
          src="@/assets/humeone-square-logo.png"
          alt="HumeOne Logo"
        />
      </a>

      <nav class="hidden md:flex flex-row">
        <a href="/" @click.prevent="routeToHome()" class="nav-link">
          <p>Host</p>
          <div class="link-underline"></div>
        </a>
        <a href="/" @click.prevent="routeToHome()" class="nav-link">
          <p>Log In</p>
          <div class="link-underline"></div>
        </a>
        <a href="/" @click.prevent="routeToHome()" class="nav-link">
          <p>Sign Up</p>
          <div class="link-underline"></div>
        </a>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "The Header",
  methods: {
    routeToHome() {
      return this.$router.push({ name: "Home" });
    }
  }
};
</script>

<style scoped lang="scss">
#humeone-logo__img {
  object-fit: contain;
  transition: all 0.5s ease;

  &:hover {
    cursor: pointer;
    transform: scale(0.95);
  }
}

.nav-link {
  text-decoration: none;
  opacity: 0.8;
  position: relative;

  &:not(:last-child) {
    margin-right: 32px;
  }

  &:hover {
    opacity: 1;

    .link-underline {
      width: 100%;
    }

    p {
      color: $accent-red;
    }
  }

  .link-underline {
    position: absolute;
    background: linear-gradient(
      90deg,
      rgba(230, 92, 138, 0.9) 0%,
      rgba(255, 204, 102, 0.9) 100%
    );
    width: 0px;
    margin-top: 4px;
    height: 2px;
    transition: all 0.2s ease;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    transition: all 0.2s ease;
  }
}
</style>