<template>
  <div class="form-control">
    <span class="p-float-label">
      <InputText
        type="text"
        id="email"
        v-model="email"
        ref="emailInput"
        @input="sendEmail()"
        @keyup.enter="$emit('submit-registration')"
        :class="{
          'p-invalid': validationMessagesProp.hasOwnProperty('email')
        }"
        class="w-20rem"
      />

      <label for="email">Email</label>
    </span>

    <div
      v-for="(message, index) of validationMessagesProp['email']"
      :key="index"
    >
      <div class="validation-message">{{ message }}</div>
    </div>
  </div>

  <!-- Vaccine Field -->
  <div class="form-control" v-if="vaccineRequiredProp">
    <div class="field-checkbox mb-1">
      <Checkbox
        v-model="vaccineCertification"
        id="vaccine-certification"
        :binary="true"
        @change="sendEmail()"
      />
      <label for="vaccine-certification" class="line-height-3">
        I confirm that I am fully vaccinated (this information will not be
        stored)
      </label>
    </div>
    <div
      v-for="(message, index) of validationMessagesProp['vaccineCertification']"
      :key="index"
    >
      <div class="validation-message">{{ message }}</div>
    </div>
  </div>

  <div>
    <Button
      label="Next"
      class="p-button-md p-button-primary submit-button"
      @click="$emit('submit-registration')"
    />
  </div>

  <div
    v-for="(message, index) of validationMessagesProp['submit']"
    :key="index"
  >
    <div class="validation-message">{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "Registration Email Field",
  props: { validationMessagesProp: Object, vaccineRequiredProp: Boolean },
  emits: ["send-email", "submit-registration"],
  data() {
    return {
      email: "",
      vaccineCertification: false
    };
  },
  methods: {
    sendEmail() {
      this.$emit("send-email", {
        email: this.email,
        vaccineCertification: this.vaccineCertification
      });
    },
    focusEmail() {
      // $el allows us to focus on root elements of custom components (i.e. input element of InputText component)
      this.$refs.emailInput.$el.focus();
    }
  }
};
</script>

<style>
</style>