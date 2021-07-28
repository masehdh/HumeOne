<template>
  <div class="section">
    <div class="container">
      <div id="nav">
        <div id="header-logo">
          <img id="humeone-logo" src="@/assets/humeone-logo.png" alt="" />
        </div>
        <router-link :to="{ name: 'Event Registration' }">
          Event Registration
        </router-link>
        <router-link :to="{ name: 'Registration Confirmation' }">
          Registration Confirmation
        </router-link>
      </div>
    </div>
  </div>

  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");


* {
  padding: 0px;
  margin: 0px;
  font-family: "Montserrat";
}

#nav {
  display: flex;
  justify-content: center;
  max-height: 60px;

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
    max-width: 100%;
    padding: 10px;
  }
  .form-card {
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 3px 3px 16px rgba(0, 0, 0, 0.1);
    color: #444450;
    display: flex;
    flex-direction: column;
    padding: 32px;
    margin-bottom: 32px;

    @media (max-width: $tablet-breakpoint) {
      padding: 16px;
    }
  }
}

.form-section {
  background-color: #f7f7f7;
  padding: 40px 10px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
</style>
