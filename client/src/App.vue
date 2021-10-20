<template>
  <router-view />
</template>

<script>
export default {
  name: "Home"
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

html {
  scroll-behavior: smooth;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  color: $primary-font-color;
}

.color-accent-red {
  color: $accent-red;
}

.off-white-bg {
  background-color: $off-white;
}

.violet-bg {
  background-color: $violet;
}

.primary-font-color {
  color: $primary-font-color;
}

.accent-divider {
  background: linear-gradient(
    90deg,
    rgba(230, 92, 138, 0.9) 0%,
    rgba(255, 204, 102, 0.9) 100%
  );
  height: 2.5px;
}

.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  &:last-child {
    padding-bottom: 100px;
  }

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

.border-pill {
  border-radius: 100px;
}

.cta-button {
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
  font-weight: 600;
  font-size: 16px;
  box-shadow: 3px 3px 12px rgba($color: #000000, $alpha: 0.2);
  color: #444444;
  transition: all 0.3s ease-out;
  &:hover {
    box-shadow: 6px 6px 10px rgba($color: #000000, $alpha: 0.2);
    transform: scale(1.04);
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

.form-section {
  background-color: $off-white;
  padding: 0 10px 40px 10px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .form-card {
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: 3px 3px 16px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;

    .form-header {
      font-size: 16px;
      text-transform: uppercase;
      font-weight: 500;
      color: $accent-red;
    }

    .form-title {
      padding-top: 8px;
      font-size: 32px;
      font-weight: 600;
    }

    .form-section-title {
      font-weight: 500;
      font-size: 24px;
      max-width: 100%;
    }

    .event-detail-item {
      &:not(:first-child) {
        margin-top: 16px;
      }
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
    }

    .submit-button {
      margin-top: 16px;
      max-width: 100%;
    }

    #event-image {
      padding: 200px 0;
      border-radius: 4px 4px 0px 0px;
      box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.1);
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
  max-width: 100% !important;
  margin-top: -0.2rem;
  .p-tooltip-text {
    background-color: rgba(54, 60, 66, 0.95) !important;
  }
}

.p-inputtext {
  padding: 0.8rem 0.8rem !important;
}

.p-autocomplete {
  max-width: 100%;

  .p-inputtext {
    width: 100%;
    max-width: 100%;
  }
}

.p-autocomplete-panel {
  max-width: 100%;
}

.p-scrolltop.p-link {
  background: $accent-red !important;
}

.p-dialog-header {
  color: $primary-font-color !important;
}

#event-modal {
  box-shadow: none !important;

  .p-dialog-header {
    padding: 0 !important;
    background-color: transparent !important;

    .p-dialog-header-close-icon {
      color: rgb(255, 255, 255, 0.7);
    }
  }
}

.p-sidebar {
  background-color: $accent-red !important;
  .p-sidebar-close {
    &:hover {
      background-color: rgba(255, 255, 255, 0.1) !important;
      .p-sidebar-close-icon {
        opacity: 1;
      }
    }

    .p-sidebar-close-icon {
      color: white;
      opacity: 0.6;
    }
  }
}
</style>