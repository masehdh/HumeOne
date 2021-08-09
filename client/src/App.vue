<template>
  <div class="section off-white-bg">
    <div class="container">
      <div id="nav" class="h-mg-10">
        <router-link id="header-logo" :to="{name: 'Home'}">
          <div >
            <img
              id="humeone-logo"
              src="../../resources/humeone-logo.png"
              alt="HumeOne Logo"
            />
          </div>
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
  font-family: "Montserrat", sans-serif;
  box-sizing: border-box;
}

.off-white-bg {
  background-color: $off-white;
}

#nav {
  display: flex;
  justify-content: center;
  max-height: 60px;

  #header-logo {
    max-height: 100%;
    max-width: 100%;
    display: flex;
    justify-content: center;
    #humeone-logo {
      max-height: 100%;
    }
  }
}

.h-mg-10 {
  margin-left: 10px;
  margin-right: 10px;
}

.max-w-100 {
  max-width: 100%;
}

.section {
  display: flex;
  justify-content: center;

  .container {
    width: 1140px;
    max-width: 100%;
  }
}

.form-section {
  background-color: $off-white;
  padding: 40px 10px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .form-card {
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 3px 3px 16px rgba(0, 0, 0, 0.1);
    color: $primary-font-color;
    display: flex;
    flex-direction: column;
    padding: 32px;
    margin-bottom: 32px;

    @media (max-width: $tablet-breakpoint) {
      padding: 16px;
    }

    .form-header {
      font-size: 16px;
      text-transform: uppercase;
      font-weight: 500;
      color: #e67e73;
    }

    .form-title {
      padding-top: 8px;
      font-size: 32px;
      font-weight: 600;
    }

    .line-divider {
      background: linear-gradient(
        90deg,
        rgba(230, 92, 138, 0.9) 0%,
        rgba(255, 204, 102, 0.9) 100%
      );
      margin: 8px 0px;
      height: 1.8px;
      width: 80px;
      max-width: 100%;
    }

    .form-section-title {
      font-weight: 400;
      font-size: 24px;
      max-width: 100%;
    }

    .event-detail-item {
      margin-top: 16px;
      font-size: 16px;
      .event-detail-title {
        font-weight: 500;
      }
    }

    .form-control {
      margin-top: 16px;
      max-width: 100%;
      .p-inputtext {
        max-width: 100%;
      }
      .p-inputtextarea {
        width: 100%;
        max-width: 100%;
      }
      .validation-message {
        padding-top: 4px;
        font-size: 14px;
        color: rgb(255, 62, 62);
      }
    }

    .regular-label {
      display: block;
      margin: 8px 0;
    }

    .submit-button {
      margin-top: 16px;
      max-width: 100%;
    }

    #hero-image {
      padding: 200px 0;
      border-radius: 8px;
      box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.1);
      margin-bottom: 32px;
      background-attachment: scroll;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center bottom;
      @media (max-width: $mobile-breakpoint) {
        padding: 125px 0;
      }
    }
  }
}
</style>
