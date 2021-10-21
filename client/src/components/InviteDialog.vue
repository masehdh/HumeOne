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
      <label for="message-body">Preview Message</label>
      <Textarea
        type="text"
        :autoResize="true"
        rows="8"
        id="message-body"
        v-model="messageBody"
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
      @click="submitInviteForm"
    />

    <div v-for="(message, index) of validationMessages['submit']" :key="index">
      <div class="validation-message">{{ message }}</div>
    </div>
  </Dialog>
</template>

<script>
import axios from "axios";
const { userInviteValidation } = require("../../../resources/validation.js");

export default {
  name: "Invite Dialog",
  props: { subjectProp: String, messageProp: String, linkProp: String },
  data() {
    return {
      subject: this.subjectProp,
      messageBody: this.messageProp,
      displayInviteModal: false,
      validationMessages: {},
      emails: []
    };
  },
  methods: {
    showInviteModal() {
      this.displayInviteModal = true;
    },
    submitInviteForm() {
      this.validationMessages = {};
      const { error } = userInviteValidation({
        emails: this.emails,
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
        .post("/api/user-invite", {
          emails: this.emails,
          subject: this.subject,
          messageBody: this.messageBody,
          link: this.linkProp
        })
        .then(res => {
          this.emails = [];
          this.displayInviteModal = false;
          console.log(res.data);
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
  .p-chips-token {
    margin-top: 0.1rem !important;
    margin-bottom: 0.1rem !important;
  }
}
</style>