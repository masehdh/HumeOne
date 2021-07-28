<template>
  <div class="section form-section">
    <div class="container form-card">
      <h1 id="form-title">Event Registration</h1>
      <h2 id="event-title">Bonfire at Earl Bales Park</h2>
      <div class="line-divider">&nbsp;</div>
      <p class="event-detail-item">
        <span class="event-detail-title">Date & time:</span>
        something about the location
      </p>
      <p class="event-detail-item">
        <span class="event-detail-title">Location:</span>
        something about the location
      </p>
      <p class="event-detail-item">
        <span class="event-detail-title">What to bring:</span>
        something about the location
      </p>
      <p class="event-detail-item">
        <span class="event-detail-title">When you arrive:</span>
        something about the location
      </p>
      <p class="event-detail-item">
        <span class="event-detail-title">What to expect:</span>
        something about the location
      </p>
      <p class="event-detail-item">
        <span class="event-detail-title">Cancellation:</span>
        something about the location
      </p>
    </div>

    <form action="#" @submit.prevent="submitRegistration">
      <div class="container form-card">
        <h3 class="card-title">Attendee Info</h3>

        <div class="form-control" >
          <span class="p-float-label">
            <InputText
              type="text"
              id="first-name"
              v-model="firstName"
              :class="{
                'p-invalid': validationMessages.hasOwnProperty('firstName')
              }"
            />
            <label for="first-name">First Name</label>
          </span>
          <div
            v-for="(message, index) of validationMessages['firstName']"
            :key="index"
          >
            <div class="error-message">{{ message }}</div>
          </div>
        </div>

        <div class="form-control">
          <span class="p-float-label">
            <InputText type="text" id="last-name" v-model="lastName" :class="{
                'p-invalid': validationMessages.hasOwnProperty('lastName'),
              }"/>
            <label for="last-name">Last Name</label>
          </span>
          <div
            v-for="(message, index) of validationMessages['lastName']"
            :key="index"
          >
            <div class="error-message">{{ message }}</div>
          </div>
        </div>
        <div class="form-control">
          <span class="p-float-label">
            <InputText type="text" id="email" v-model="email" :class="{
                'p-invalid': validationMessages.hasOwnProperty('email'),
              }"/>
            <label for="email">Email</label>
          </span>
          <div
            v-for="(message, index) of validationMessages['email']"
            :key="index"
          >
            <div class="error-message">{{ message }}</div>
          </div>
        </div>
        <div class="form-control">
          <span class="p-float-label">
            <InputText type="text" id="phone-number" v-model="phoneNumber" :class="{
                'p-invalid': validationMessages.hasOwnProperty('phoneNumber'),
              }"/>
            <label for="phone-number">Phone Number</label>
          </span>
          <div
            v-for="(message, index) of validationMessages['phoneNumber']"
            :key="index"
          >
            <div class="error-message">{{ message }}</div>
          </div>
        </div>

        <div class="form-control">
          <span>
            <label class="regular-label" for="attendee-info">
              Anything else you would like us to know?
            </label>
            <Textarea
              id="attendee-info"
              v-model="attendeeInfo"
              :autoResize="true"
              placeholder="E.g. Allergies, transportation, etc."
              :class="{
                'p-invalid': validationMessages.hasOwnProperty('attendeeInfo'),
              }"
            />
          </span>
          <div
            v-for="(message, index) of validationMessages['attendeeInfo']"
            :key="index"
          >
            <div class="error-message">{{ message }}</div>
          </div>
        </div>
      </div>

      <div class="container form-card">
        <h3 class="card-title">Payment to reserve spot</h3>
        <div class="form-control">
          <span class="p-float-label">
            <InputText type="text" id="first-name" v-model="firstName" />
            <label for="first-name">First Name</label>
          </span>
        </div>
        <Button
          type="submit"
          label="Submit"
          class="p-button-md p-button-primary submit-button"
        />
      </div>
    </form>
  </div>
</template>

<script>
const { eventRegistrationValidation } = require("@/validation/validation.js");

export default {
  name: "Event Registration",
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      attendeeInfo: "",
      validationMessages: {}
    };
  },
  methods: {
    submitRegistration() {
      this.validationMessages = {};
      const { error } = eventRegistrationValidation({
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phoneNumber: this.phoneNumber,
        attendeeInfo: this.attendeeInfo
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
    }
  }
};
</script>

<style scoped lang="scss">
#form-title {
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 500;
  color: #e67e73;
}

#event-title {
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

.card-title {
  font-weight: 400;
  font-size: 24px;
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
  .p-inputtext {
    max-width: 100%;
  }
  .p-inputtextarea {
    width: 100%;
    max-width: 100%;
  }
}

.regular-label {
  display: block;
  margin: 8px 0;
}

.submit-button {
  margin-top: 16px;
}
</style>