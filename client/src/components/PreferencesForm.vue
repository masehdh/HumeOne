<template>
  <div class="container form-card px-3 py-4 md:px-4 md:py-5">
    <h3 class="form-section-title">Preferences</h3>

    <div>
      <p class="mt-3 line-height-3">
        The information below will help us fine-tune what invites you will
        receive
      </p>
    </div>

    <div class="form-control">
      <span class="p-float-label">
        <InputText
          id="maxTravelDistance"
          class="w-20rem select-none p-inputtext-sm"
          readonly
          v-model="displayTravelDistance"
        />

        <Slider
          class="w-20rem"
          v-model.number="maxTravelDistance"
          @change="sendPreferences()"
          :max="100"
          :min="5"
          :step="5"
        />

        <label for="maxTravelDistance">
          Maximum Travel Distance
        </label>
      </span>

      <div
        v-for="(message, index) of validationMessages['maxTravelDistance']"
        :key="index"
      >
        <div class="validation-message">{{ message }}</div>
      </div>
    </div>

    <div class="form-control">
      <span class="p-float-label">
        <MultiSelect
          id="interests"
          v-model="interests"
          :options="interestOptions"
          optionLabel="interest"
          optionValue="interest"
          @change="sendPreferences()"
          :class="{
            'p-invalid': validationMessages.hasOwnProperty('interests')
          }"
          class="w-20rem p-inputtext-sm"
        />

        <label for="interests">
          Interests
        </label>
      </span>

      <div
        v-for="(message, index) of validationMessages['interests']"
        :key="index"
      >
        <div class="validation-message">{{ message }}</div>
      </div>
    </div>

    <div class="form-control">
      <span class="p-float-label">
        <MultiSelect
          id="availability"
          v-model="availability"
          :options="availabilityOptions"
          optionLabel="availability"
          optionValue="availability"
          @change="sendPreferences()"
          :class="{
            'p-invalid': validationMessages.hasOwnProperty('availability')
          }"
          class="w-20rem"
        />

        <label for="availability">
          Availability
        </label>
      </span>

      <div
        v-for="(message, index) of validationMessages['availability']"
        :key="index"
      >
        <div class="validation-message">{{ message }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import interestCategories from "../../../resources/interests.json";
import availabilityCategories from "../../../resources/availability.json";

export default {
  name: "Preferences Form",
  props: {
    validationMessagesProp: Object
  },
  data() {
    return {
      availability: [],
      interests: [],
      maxTravelDistance: 50,
      interestOptions: interestCategories.map(interest => {
        return { interest: interest };
      }),
      availabilityOptions: availabilityCategories.map(availability => {
        return { availability: availability };
      }),
      validationMessages: this.validationMessagesProp
    };
  },
  computed: {
    displayTravelDistance() {
      return `${this.maxTravelDistance} km`;
    },
    preferencesPayload() {
      return {
        maxTravelDistance: this.maxTravelDistance,
        interests: this.interests,
        availability: this.availability
      };
    }
  },
  watch: {
    validationMessagesProp: function(newVal) {
      return (this.validationMessages = newVal);
    }
  },
  methods: {
    sendPreferences() {
      return this.$emit("send-preferences", this.preferencesPayload);
    }
  }
};
</script>

<style scoped lang="scss">
.p-multiselect,
.p-treeselect,
.p-dropdown,
.p-autocomplete,
.p-autocomplete-input {
  max-width: 100%;
  width: 200px;
}

.p-inputtextarea {
  width: 100%;
  max-width: 100%;
}

#maxTravelDistance {
  border-radius: 4px 4px 0px 0px;
  border-bottom: none;
  cursor: default;
}
</style>
