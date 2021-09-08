<template>
  <div class="section off-white-bg">
    <div class="container home-page">
      <img
        class="hero-image fadein animation-duration-1000"
        src="../../../resources/home-page-squad.png"
      />

      <div class="tagline mx-3 fadein animation-duration-1000">
        <h1>
          Make new friends, grow your circle
        </h1>
      </div>

      <div class="details mx-3 fadein animation-duration-1000">
        <p class="line-height-3">
          HumeOne brings people together by organizing intimate social
          gatherings and events. No endless feeds or coordination required, our
          hosts create events designed for you and those in your area. Let us
          know what you're looking for to start receiving invites today!
        </p>
      </div>

      <router-link
        class="router-link mx-3 fadein animation-duration-1000"
        :to="{ name: 'Sign Up' }"
      >
        <div class="cta-button">
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

        <div class="vertical-row-item">
          <h3>Sign Up For Free</h3>
          <p class="line-height-3">Let us know what you are interested in</p>
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

        <div class="vertical-row-item">
          <h3>We'll Plan Events</h3>
          <p class="line-height-3">
            For you and others nearby with shared interests
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

        <div class="vertical-row-item">
          <h3>Receive Invites</h3>
          <p class="line-height-3">
            Directly to your inbox, according to your preferences
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

        <div class="vertical-row-item">
          <h3>Reserve Your Spot</h3>
          <p class="line-height-3">
            Which usually involves a small fee, and get ready to make new
            friends
          </p>
          <div class="vertical-spacer">&nbsp;</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
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

  .hero-image {
    max-width: 100%;
    width: 680px;
    height: auto;
    align-self: center;
    margin-top: 24px;
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
    margin-top: 28px;
    margin-bottom: 28px;
    font-size: 18px;
    max-width: 726px;
  }

  .router-link {
    text-decoration: none;
    align-self: center;
    margin-bottom: 40px;
  }

  .cta-button {
    padding: 8px 16px;
    border-radius: 50px;
    background: rgb(255, 124, 172);
    background: linear-gradient(
      90deg,
      rgba(255, 124, 172, 1) 0%,
      rgba(255, 245, 108, 1) 100%
    );
    max-width: 100%;
    width: 200px;
    text-align: center;
    font-weight: 600;
    font-size: 16px;
    box-shadow: 3px 3px 12px rgba($color: #000000, $alpha: 0.2);
    color: rgb(80, 80, 80);
    transition: all 0.3s ease-out;
    &:hover {
      box-shadow: 6px 6px 10px rgba($color: #000000, $alpha: 0.2);
      transform: scale(1.05);
    }
  }
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
    padding-bottom: 100px;
    margin-top: 20px;
    margin-bottom: 60px;
    @media (max-width: $mobile-breakpoint) {
      background-image: none;
    }
  }

  .row {
    display: flex;
    margin-bottom: -2px;
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
        color: #ff6672;
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

      .vertical-spacer {
        padding-bottom: 40px;
      }
    }
  }

  h2 {
    font-size: 32px;
    color: $primary-font-color;
    margin-top: 32px;
    margin-bottom: 28px;
  }
}
</style>
