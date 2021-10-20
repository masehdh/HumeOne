<template>
  <div class="container mb-4">
    <header class="flex justify-content-between align-items-center h-4rem py-2">
      <router-link :to="{ name: 'Home' }" class="no-underline h-full">
        <img
          id="humeone-logo__img"
          class="max-h-full"
          src="@/assets/humeone-square-logo.png"
          alt="HumeOne Logo"
        />
      </router-link>

      <nav class="hidden md:flex flex-row align-items-baseline">
        <template v-for="(navLink, index) in navLinks" :key="index">
          <router-link
            :to="{ name: navLink.target }"
            v-if="!navLink.mobileOnly"
            class="nav-link"
          >
            <p>{{ navLink.name }}</p>
            <div class="link-underline"></div>
          </router-link>
        </template>

        <router-link :to="{ name: 'Sign Up' }" class="no-underline">
          <div class="nav-button border-pill">
            Sign Up
          </div>
        </router-link>
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
        { name: "Upcoming Events", target: "Upcoming Events" },
        // { name: "Log In", target: "Home" },
        { name: "Sign Up", target: "Sign Up", mobileOnly: true }
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

  &:hover,
  &:is(.router-link-active) {
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
    font-weight: 500;
    transition: all 0.2s ease;
  }
}

.mobile-nav-link {
  p {
    color: white;
    opacity: 0.6;
    font-weight: 500;
  }

  &:hover {
    p {
      opacity: 1;
    }
  }
}

.nav-button {
  cursor: pointer;
  text-decoration: none;
  padding: 10px 20px;
  width: fit-content;
  background: rgb(255, 124, 172);
  background: linear-gradient(
    90deg,
    rgba(255, 124, 172, 1) 0%,
    rgba(255, 245, 108, 1) 100%
  );
  max-width: 100%;
  font-weight: 500;
  font-size: 16px;
  box-shadow: 3px 3px 12px rgba($color: #000000, $alpha: 0.15);
  color: #444444;
  transition: all 0.2s ease;
  &:hover {
    box-shadow: 6px 6px 10px rgba($color: #000000, $alpha: 0.15);
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
    transition: opacity 0.3s ease;
  }
}
</style>