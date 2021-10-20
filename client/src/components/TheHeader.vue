<template>
  <div class="container mb-4">
    <header
      class="flex justify-content-between md:justify-content-center align-items-center h-4rem px-3 md:px-4 py-2"
    >
      <nav class="hidden md:flex flex-row">
        <template
          v-for="(navLink, index) in navLinks.slice(0, navLinks.length / 2)"
          :key="index"
        >
          <router-link :to="{ name: navLink.target }" class="nav-link">
            <p>{{ navLink.name }}</p>
            <div class="link-underline"></div>
          </router-link>
        </template>
      </nav>

      <router-link :to="{ name: 'Home' }" class="no-underline h-full md:mx-5">
        <img
          id="humeone-logo__img"
          class="max-h-full"
          src="@/assets/humeone-square-logo.png"
          alt="HumeOne Logo"
        />
      </router-link>

      <nav class="hidden md:flex flex-row">
        <template
          v-for="(navLink, index) in navLinks.slice(navLinks.length / 2)"
          :key="index"
        >
          <router-link :to="{ name: navLink.target }" class="nav-link">
            <p>{{ navLink.name }}</p>
            <div class="link-underline"></div>
          </router-link>
        </template>
      </nav>

      <div
        class="block md:hidden no-underline cursor-pointer"
        @click="showMobileMenu()"
      >
        <p class="flex align-items-center font-medium">
          <font-awesome-icon :icon="['fas', 'bars']" class="mr-2" />
          Menu
        </p>
      </div>

      <Sidebar
        v-model:visible="displayMobileMenu"
        position="right"
        class="mobile-menu sidebar-sm w-15rem"
      >
        <nav class="flex flex-column">
          <template v-for="(navLink, index) in navLinks" :key="index">
            <router-link
              :to="{ name: navLink.target }"
              class="mobile-nav-link mb-3 no-underline"
            >
              <p>{{ navLink.name }}</p>
            </router-link>
          </template>
        </nav>
      </Sidebar>
    </header>
  </div>
</template>

<script>
export default {
  name: "The Header",
  data() {
    return {
      navLinks: [
        { name: "Home", target: "Home" },
        { name: "About", target: "Home" },
        { name: "Contact", target: "Home" },
        { name: "Host", target: "Home" },
        { name: "Log In", target: "Home" },
        { name: "Sign Up", target: "Sign Up" }
      ],
      displayMobileMenu: false
    };
  },
  methods: {
    showMobileMenu() {
      return (this.displayMobileMenu = true);
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

.mobile-nav-link {
  p {
    color: white;
    opacity: 0.4;
    font-weight: 500;
  }

  &:hover {
    p {
      opacity: 1;
    }
  }
}
</style>