<template>
  <div
    class="flex justify-content-between align-items-center h-4rem px-3 md:px-4 py-2 mb-3"
  >
    <a href="/" @click.prevent="routeToHome()" class="no-underline h-full">
      <img
        id="humeone-logo__img"
        class="max-h-full"
        src="@/assets/humeone-square-logo.png"
        alt="HumeOne Logo"
      />
    </a>

    <p>test</p>
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
</style>