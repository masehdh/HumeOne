<template>
  <Dialog
    header="Invite Friends"
    v-model:visible="displayInviteModal"
    :style="{ width: '50vw' }"
    :breakpoints="{ '960px': '90vw' }"
    :modal="true"
    :dismissableMask="true"
    :draggable="false"
  >
    <div class="field">
      <label for="emails">Invitee Email(s)</label>
      <Chips
        v-model="emails"
        separator=","
        :allowDuplicate="false"
        :addOnBlur="true"
        :max="50"
        :placeholder="
          emails.length < 1 ? 'To enter multiple emails use a comma' : ''
        "
        class="inputfield w-full p-inputtext-sm"
        :class="{ 'p-invalid': validationMessages.hasOwnProperty('emails') }"
      />

      <div
        v-for="(message, index) of validationMessages['emails']"
        :key="index"
      >
        <div class="validation-message">{{ message }}</div>
      </div>
    </div>

    <div class="field">
      <label for="subject">Preview Subject</label>
      <InputText
        type="text"
        id="subject"
        v-model="subject"
        readonly
        class="inputfield w-full select-none "
      />
    </div>

    <div class="field">
      <label for="message">Preview Message</label>
      <Textarea
        type="text"
        :autoResize="true"
        rows="8"
        id="message"
        v-model="message"
        readonly
        class="inputfield w-full select-none"
      />
      <small>
        <span class="font-medium">Note:</span> A button will be displayed below
        the message linking to HumeOne
      </small>
    </div>

    <Button
      type="submit"
      :label="`Send Invite${emails.length > 1 ? 's' : ''}`"
      class="p-button-md p-button-primary submit-button no-underline"
      @click="submitContactForm"
    />
  </Dialog>
</template>

<script>
import axios from "axios";

export default {
  name: "Invite Dialog",
  props: { subjectProp: String, messageProp: String },
  data() {
    return {
      subject: this.subjectProp,
      message: this.messageProp,
      displayInviteModal: false,
      validationMessages: {},
      emails: []
    };
  },
  methods: {
    showInviteModal() {
      this.displayInviteModal = true;
    },
    submitContactForm() {
      this.validationMessages = {};
      // const { error } = contactUsValidation({
      //   name: this.name,
      //   email: this.email,
      //   subject: this.subject,
      //   message: this.message
      // });
      // if (error) {
      //   error.details.forEach(({ path }) => {
      //     let messages = error.details
      //       .filter(val => val.path[0] === path[0])
      //       .map(({ message }) => message);
      //     messages = [...new Set(messages)];
      //     return (this.validationMessages[path[0]] = messages);
      //   });
      //   return;
      // }

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
:deep(.p-chips .p-inputtext) {
  width: 100%;
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
}
</style>