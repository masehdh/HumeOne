<template>
  <div class="section off-white-bg">
    <div class="container">
      <div id="nav" class="mx-3">
        <div id="header-logo">
          <img
            id="humeone-logo"
            src="../../resources/humeone-logo.png"
            alt="HumeOne Logo"
            @click.prevent="goHome()"
          />
        </div>
      </div>
    </div>
  </div>

  <router-view />
</template>

<script>
export default {
  name: "Home",
  methods: {
    goHome() {
      return this.$router.push({ name: "Home" });
    }
  }
};
</script>

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

.violet-bg {
  background-color: $violet;
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
      transition: all 0.5s ease;
      &:hover {
        cursor: pointer;
        transform: scale(0.95);
      }
    }
  }
}

.section {
  display: flex;
  flex-direction: column;
  align-items: center;

  .container {
    width: 1140px;
    max-width: 100%;
  }
}

.validation-message {
  padding-top: 4px;
  font-size: 14px;
  color: rgb(255, 62, 62);
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
    margin-bottom: 16px;

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

    .form-section-title {
      font-weight: 400;
      font-size: 24px;
      max-width: 100%;
    }

    .event-detail-item {
      margin-top: 16px;
      font-size: 16px;
      line-height: 1.5;
      .event-detail-title {
        font-weight: 500;
      }
    }

    .form-control {
      margin-top: 20px;
      max-width: 100%;
      .p-inputtext {
        max-width: 100%;
      }
      .p-inputtextarea {
        max-width: 100%;
      }
      .p-autocomplete .p-inputtext {
        width: 100%;
      }
    }

    .submit-button {
      margin-top: 16px;
      max-width: 100%;
    }

    #event-image {
      padding: 200px 0;
      border-radius: 8px 8px 0px 0px;
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

.p-selectbutton
  .p-button:focus:not(.p-button:hover):not(.p-disabled):not(.p-highlight) {
  background-color: initial !important;
}

.p-selectbutton .p-button,
.p-buttonset .p-button:not(:last-child) {
  margin-right: 4px !important;
  margin-bottom: 4px !important;
  border-right: 1px solid rgba(0, 0, 0, 0.12) !important;
  border-radius: 0px !important;
}

.p-selectbutton .p-button .p-button-label {
  font-weight: 400;
  color: $primary-font-color !important;
}

.p-tooltip {
  width: 20rem !important;
  max-width: 20rem !important;
  margin-top: -0.2rem;
  .p-tooltip-text {
    background-color: rgba(54, 60, 66, 0.95) !important;
  }
}

.p-inputtext {
  padding: 0.8rem 0.8rem !important;
}
</style>
