<template>
  <ScrollTop />
  <div class="section off-white-bg">
    <div class="container home-page">
      <img
        class="hero-image fadein animation-duration-1000"
        src="../../../resources/home-page-squad.png"
      />

      <div class="tagline mx-3 md:mx-4 fadein animation-duration-1000">
        <h1>
          Make new friends, grow your circle
        </h1>
      </div>

      <div class="details mx-3 md:mx-4 fadein animation-duration-1000">
        <p class="line-height-3">
          HumeOne brings people together by organizing intimate social
          gatherings and events. Let us know what you're looking for to start
          receiving invites today!
        </p>
      </div>

      <router-link class="router-link mx-3 md:mx-4" :to="{ name: 'Sign Up' }">
        <div class="cta-button fadein animation-duration-1000">
          SIGN UP FOR FREE
        </div>
      </router-link>
    </div>
  </div>

  <div class="section off-white-bg">
    <svg
      class="divider"
      viewBox="0 0 1441 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M729 19.4999C408.5 -22.5001 0 19.4999 0 19.4999V42.5001H1441V19.4999C1441 19.4999 1049.5 61.5 729 19.4999Z"
        fill="#ECECF9"
      />
    </svg>
  </div>

  <div class="section how-it-works-section violet-bg">
    <div class="container">
      <div class="row">
        <div class="horizontal-spacer">&nbsp;</div>
        <h2 class="section-title mx-3 md:mx-4">How It Works</h2>
      </div>

      <!-- Step 1. Sign Up -->
      <div class="row mx-3 md:mx-4">
        <div class="horizontal-row-item">
          <div class="timeline-image">
            <img src="../../public/sign-up-illustration.png" alt="sign up" />
          </div>

          <div class="timeline">
            <svg
              viewBox="0 0 1 100"
              class="line"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <line
                x1="0.5"
                y1="2.18557e-08"
                x2="0.499996"
                y2="100"
                stroke="#FF6672"
              />
            </svg>

            <svg
              class="marker"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="10" cy="10" r="10" fill="#FF6672" />
            </svg>
          </div>
          <p class="step-number">1</p>
        </div>

        <div class="vertical-row-item mx-3 md:mx-4">
          <h3>Sign Up For Free</h3>
          <p class="line-height-3">Let us know what you are interested in.</p>
          <div class="vertical-spacer">&nbsp;</div>
        </div>
      </div>

      <!-- Step 2. We'll Plan Events -->
      <div class="row mx-3 md:mx-4">
        <div class="horizontal-row-item">
          <div class="timeline-image">
            <img
              src="../../public/event-planning-illustration.png"
              alt="planning events"
            />
          </div>

          <div class="timeline">
            <svg
              viewBox="0 0 1 100"
              class="line"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <line
                x1="0.5"
                y1="2.18557e-08"
                x2="0.499996"
                y2="100"
                stroke="#FF6672"
              />
            </svg>

            <svg
              class="marker"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="10" cy="10" r="10" fill="#FF6672" />
            </svg>
          </div>
          <p class="step-number">2</p>
        </div>

        <div class="vertical-row-item mx-3 md:mx-4">
          <h3>We'll Plan Events</h3>
          <p class="line-height-3">
            For you and others nearby with shared interests.
          </p>
          <div class="vertical-spacer">&nbsp;</div>
        </div>
      </div>

      <!-- Step 3. Receive Invites -->
      <div class="row mx-3 md:mx-4">
        <div class="horizontal-row-item">
          <div class="timeline-image">
            <img
              src="../../public/invite-illustration.png"
              alt="planning events"
            />
          </div>

          <div class="timeline">
            <svg
              viewBox="0 0 1 100"
              class="line"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <line
                x1="0.5"
                y1="2.18557e-08"
                x2="0.499996"
                y2="100"
                stroke="#FF6672"
              />
            </svg>

            <svg
              class="marker"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="10" cy="10" r="10" fill="#FF6672" />
            </svg>
          </div>
          <p class="step-number">3</p>
        </div>

        <div class="vertical-row-item mx-3 md:mx-4">
          <h3>Receive Invites</h3>
          <p class="line-height-3">
            Directly to your inbox, according to your preferences.
          </p>
          <div class="vertical-spacer">&nbsp;</div>
        </div>
      </div>

      <!-- Step 4. Reserve your spot -->
      <div class="row mx-3 md:mx-4">
        <div class="horizontal-row-item">
          <div class="timeline-image">
            <img
              src="../../public/reservation-illustration.png"
              alt="planning events"
            />
          </div>

          <div class="timeline">
            <svg
              viewBox="0 0 1 100"
              class="line"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <line
                x1="0.5"
                y1="2.18557e-08"
                x2="0.499996"
                y2="100"
                stroke="#FF6672"
              />
            </svg>

            <svg
              class="marker"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="10" cy="10" r="10" fill="#FF6672" />
            </svg>
          </div>
          <p class="step-number">4</p>
        </div>

        <div class="vertical-row-item mx-3 md:mx-4">
          <h3>Reserve Your Spot</h3>
          <p class="line-height-3">
            You pay a small fee to support our Hosts for facilitating events,
            and they make sure you have a great time.
          </p>
          <div class="vertical-spacer">&nbsp;</div>
        </div>
      </div>
    </div>
  </div>

  <div class="section who-we-are-section off-white-bg pt-6">
    <div class="container">
      <h2 class="mx-3 md:mx-4">
        Who We Are
      </h2>

      <div class="line-divider mx-3 md:mx-4">&nbsp;</div>

      <div class="mb-4 max-w-full">
        <div class="host-image">
          <img
            src="../../../resources/shareef-portrait.jpg"
            alt="Portrait of a host"
          />
          <div class="img-overlay">&nbsp;</div>
        </div>

        <div class="host-image">
          <img
            src="../../../resources/maseh-host-portrait.jpg"
            alt="Portrait of a host"
          />
          <div class="img-overlay">&nbsp;</div>
        </div>

        <div class="host-image">
          <img
            src="../../../resources/anika-host-portrait.jpg"
            alt="Portrait of a host"
          />
          <div class="img-overlay">&nbsp;</div>
        </div>
      </div>

      <p class="line-height-3 mx-3 md:mx-4">
        We believe humans are better together, hence our name (a portmanteau of
        human + one). We are creating a platform that builds authentic human
        connection through social gatherings. Anyone can take part by attending
        or hosting events as long as they meet basic qualifications. If you have
        questions or would like to become a Host, click the button below to
        contact us!
      </p>

      <div class="contact-button mx-3 md:mx-4" @click="showContactForm">
        CONTACT US
      </div>
    </div>
  </div>

  <Dialog
    header="Contact Us"
    v-model:visible="displayContactForm"
    :style="{ width: '50vw' }"
    :breakpoints="{ '960px': '90vw' }"
    :modal="true"
    :dismissableMask="true"
  >
    <div class="field">
      <label for="name">Name</label>
      <InputText
        type="text"
        id="name"
        v-model="name"
        class="inputfield w-full "
        :class="{
          'p-invalid': validationMessages.hasOwnProperty('name')
        }"
      />

      <div v-for="(message, index) of validationMessages['name']" :key="index">
        <div class="validation-message">{{ message }}</div>
      </div>
    </div>

    <div class="field">
      <label for="email">Email</label>
      <InputText
        type="text"
        id="email"
        v-model="email"
        class="inputfield w-full "
        :class="{
          'p-invalid': validationMessages.hasOwnProperty('email')
        }"
      />

      <div v-for="(message, index) of validationMessages['email']" :key="index">
        <div class="validation-message">{{ message }}</div>
      </div>
    </div>

    <div class="field">
      <label for="subject">Subject</label>
      <InputText
        type="text"
        id="subject"
        v-model="subject"
        class="inputfield w-full "
        :class="{
          'p-invalid': validationMessages.hasOwnProperty('subject')
        }"
      />

      <div
        v-for="(message, index) of validationMessages['subject']"
        :key="index"
      >
        <div class="validation-message">{{ message }}</div>
      </div>
    </div>

    <div class="field">
      <label for="message">Message</label>
      <Textarea
        type="text"
        :autoResize="true"
        id="message"
        v-model="message"
        class="inputfield w-full"
        :class="{
          'p-invalid': validationMessages.hasOwnProperty('message')
        }"
      />

      <div
        v-for="(message, index) of validationMessages['message']"
        :key="index"
      >
        <div class="validation-message">{{ message }}</div>
      </div>
    </div>
    <br />
    <Button
      type="submit"
      label="Submit"
      class="p-button-md p-button-primary submit-button"
      @click="submitContactForm"
    />
  </Dialog>
</template>

<script>
const { contactUsValidation } = require("../../../resources/validation.js");
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      displayContactForm: false,
      name: "",
      email: "",
      subject: "",
      message: "",
      validationMessages: {}
    };
  },
  methods: {
    showContactForm() {
      return (this.displayContactForm = true);
    },
    submitContactForm() {
      this.validationMessages = {};
      const { error } = contactUsValidation({
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message
      });
      if (error) {
        error.details.forEach(({ path }) => {
          let messages = error.details
            .filter(val => val.path[0] === path[0])
            .map(({ message }) => message);
          messages = [...new Set(messages)];
          return (this.validationMessages[path[0]] = messages);
        });
        return;
      }

      axios
        .post("/api/contact-us", {
          name: this.name,
          email: this.email,
          subject: this.subject,
          message: this.message
        })
        .then(() => {
          this.displayContactForm = false;
          this.name = "";
          this.email = "";
          this.subject = "";
          this.message = "";
        })
        .catch(error =>
          console.log("error from /api/contact-us: ", error.response.data)
        );
    }
  }
};
</script>

<style lang="scss" scoped>
.divider {
  width: 100%;
  margin-bottom: -1px;
}

.off-white-bg {
  background-color: $off-white;
}

.home-page {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 40px;

  .hero-image {
    max-width: 100%;
    width: 680px;
    height: auto;
    align-self: center;
    margin-top: 32px;
    padding: 10px;
  }

  .tagline {
    text-align: center;
    margin-top: 40px;
    color: $primary-font-color;
    h1 {
      font-size: 32px;
    }
  }

  .details {
    color: $primary-font-color;
    text-align: center;
    align-self: center;
    margin-top: 32px;
    margin-bottom: 32px;
    font-size: 16px;
    max-width: 726px;
  }

  .router-link {
    text-decoration: none;
    align-self: center;
    margin-bottom: 40px;
  }
}

.cta-button {
  padding: 10px 20px;
  width: fit-content;
  border-radius: 50px;
  background: rgb(255, 124, 172);
  background: linear-gradient(
    90deg,
    rgba(255, 124, 172, 1) 0%,
    rgba(255, 245, 108, 1) 100%
  );
  max-width: 100%;
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  box-shadow: 3px 3px 12px rgba($color: #000000, $alpha: 0.2);
  color: #444444;
  transition: all 0.3s ease-out;
  &:hover {
    box-shadow: 6px 6px 10px rgba($color: #000000, $alpha: 0.2);
    transform: scale(1.05);
  }
}

.p-scrolltop.p-link {
  background: $brand-red;
}

.how-it-works-section {
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url("../../public/blob.svg");
    background-attachment: scroll;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 70% center;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-top: 20px;
    margin-bottom: 80px;
    @media (max-width: $mobile-breakpoint) {
      background-image: none;
      margin-bottom: 40px;
    }
  }

  .row {
    display: flex;
    width: 600px;
    max-width: 100%;

    .horizontal-spacer {
      padding-right: 120px;
      @media (max-width: $mobile-breakpoint) {
        display: none;
      }
    }

    .horizontal-row-item {
      display: flex;
      .timeline-image {
        width: 100px;
        text-align: right;
        img {
          max-width: 100%;
        }
        @media (max-width: $mobile-breakpoint) {
          display: none;
        }
      }

      .timeline {
        position: relative;
        margin-left: 40px;
        margin-right: 20px;

        @media (max-width: $mobile-breakpoint) {
          margin-left: 16px;
        }

        .marker {
          z-index: 2;
          position: relative;
          margin-top: 20px;
        }
        .line {
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          margin-right: auto;
          margin-left: auto;
          width: 1px;
          height: 100%;
          z-index: 1;
        }
      }

      .step-number {
        margin-top: 14px;
        font-size: 24px;
        font-weight: 600;
        margin-right: 20px;
        color: $brand-red;
      }
    }

    .vertical-row-item {
      display: flex;
      flex-direction: column;
      color: $primary-font-color;
      margin-top: 18px;

      h3 {
        margin-bottom: 16px;
        font-size: 18px;
      }

      p {
        font-size: 16px;
      }

      .vertical-spacer {
        padding-bottom: 40px;
      }
    }
  }

  h2 {
    font-size: 32px;
    color: $primary-font-color;
    margin-top: 32px;
    margin-bottom: 32px;
    @media (max-width: $mobile-breakpoint) {
      display: block;
      width: 100%;
      text-align: center;
    }
  }
}

.who-we-are-section {
  padding-bottom: 100px;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  h2 {
    font-size: 32px;
    color: $primary-font-color;
  }

  p {
    color: $primary-font-color;
    font-size: 16px;
  }

  .line-divider {
    background: linear-gradient(
      90deg,
      rgba(230, 92, 138, 0.9) 0%,
      rgba(255, 204, 102, 0.9) 100%
    );
    margin: 16px 0px 32px 0px;
    height: 2.5px;
    width: 100px;
    max-width: 80%;
  }

  .host-image {
    display: inline-flex;
    flex-direction: row;
    overflow: hidden;
    position: relative;
    border-radius: 100%;
    width: 150px;
    max-width: 150px;
    aspect-ratio: 1 / 1;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
    &:not(:first-child) {
      margin-left: -20px;
    }
    @media (max-width: $mobile-breakpoint) {
      width: 35%;
    }

    img {
      height: 100%;
    }

    .img-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
      background-color: black;
      opacity: 0.12;
      transition: all 0.3s ease;
      &:hover {
        opacity: 0;
      }
    }
  }

  .contact-button {
    cursor: pointer;
    padding: 10px 20px;
    width: fit-content;
    margin-top: 32px;
    border-radius: 50px;
    background: rgb(255, 124, 172);
    background: linear-gradient(
      90deg,
      rgba(255, 124, 172, 1) 0%,
      rgba(255, 245, 108, 1) 100%
    );
    max-width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 16px;
    box-shadow: 3px 3px 12px rgba($color: #000000, $alpha: 0.2);
    color: #444444;
    transition: all 0.3s ease-out;
    &:hover {
      box-shadow: 6px 6px 10px rgba($color: #000000, $alpha: 0.2);
      transform: scale(1.05);
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
}
</style>
