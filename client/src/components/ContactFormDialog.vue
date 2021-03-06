<template>
  <Dialog
    header="Contact Us"
    v-model:visible="displayContactForm"
    :style="{ width: '50vw' }"
    :breakpoints="{ '960px': '90vw' }"
    :modal="true"
    :dismissableMask="true"
    :draggable="false"
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
      <label for="message-body">Message</label>
      <Textarea
        type="text"
        :autoResize="true"
        id="message-body"
        v-model="messageBody"
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

    <Button
      type="submit"
      label="Submit"
      class="p-button-md p-button-primary submit-button no-underline"
      @click="submitContactForm"
    />

    <div v-for="(message, index) of validationMessages['submit']" :key="index">
      <div class="validation-message">{{ message }}</div>
    </div>
  </Dialog>
</template>

<script>
const { contactUsValidation } = require("../../../resources/validation.js");
import axios from "axios";

export default {
  name: "Contact Form Dialog",
  data() {
    return {
      email: "",
      name: "",
      subject: "",
      messageBody: "",
      validationMessages: {},
      displayContactForm: false
    };
  },
  methods: {
    submitContactForm() {
      this.validationMessages = {};
      const { error } = contactUsValidation({
        name: this.name,
        email: this.email,
        subject: this.subject,
        messageBody: this.messageBody
      });
      if (error) {
        error.details.forEach(({ path }) => {
          let messages = error.details
            .filter(val => val.path[0] === path[0])
            .map(({ message }) => message);
          messages = [...new Set(messages)];
          return (this.validationMessages[path[0]] = messages);
        });
        this.validationMessages["submit"] = [
          "Please review the errors above before submitting"
        ];
        return;
      }

      axios
        .post("/api/contact-us", {
          name: this.name,
          email: this.email,
          subject: this.subject,
          messageBody: this.messageBody
        })
        .then(() => {
          this.displayContactForm = false;
          this.name = "";
          this.email = "";
          this.subject = "";
          this.messageBody = "";
        })
        .catch(error =>
          console.log("error from /api/contact-us: ", error.response.data)
        );
    },
    showContactForm() {
      return (this.displayContactForm = true);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>