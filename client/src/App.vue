<template>
  <div id="nav">
    <div id="header-logo">
      <img id="humeone-logo" src="@/assets/humeone-logo.png" alt="" />
    </div>
    <router-link :to="{ name: 'Event Registration' }"
      >Event Registration</router-link
    >
    <router-link :to="{ name: 'Registration Confirmation' }"
      >Registration Confirmation</router-link
    >
  </div>
  <router-view />
</template>

<style scoped lang="scss">
#nav {
  display: flex;
  justify-content: center;
  max-height: 30px;

  #header-logo {
    max-height: 100%;
    display: flex;
    justify-content: center;
    #humeone-logo {
      max-height: 100%;
    }
  }
}

.section {
  display: flex;
  justify-content: center;
  .container {
    width: 1140px;
    padding: 10px;
  }
}
</style>
