<template>
  <div class="container form-card px-3 py-4 md:px-4 md:py-5">
    <h3 class="form-section-title">Preferences</h3>
    <div class="form-control">
      <span>
        <label class="regular-label" for="preferred-age-group">
          What age group do you want to hang out with?
        </label>
        <MultiSelect
          id="preferred-age-group"
          v-model="preferredAgeGroup"
          :options="ageOptions"
          optionLabel="ageGroup"
          @change="sendPreferences()"
          :class="{
            'p-invalid': validationMessages.hasOwnProperty('preferredAgeGroup')
          }"
        />
      </span>
      <div
        v-for="(message, index) of validationMessages['preferredAgeGroup']"
        :key="index"
      >
        <div class="validation-message">{{ message }}</div>
      </div>
    </div>

    <div class="form-control">
      <span>
        <label class="regular-label" for="interests">
          What are you interested in?
        </label>
        <TreeSelect
          id="interests"
          v-model="selectedInterestNodeKey"
          :options="interestNodes"
          display="chip"
          selectionMode="checkbox"
          @change="sendPreferences()"
          :class="{
            'p-invalid': validationMessages.hasOwnProperty('interests')
          }"
        />
      </span>
      <div
        v-for="(message, index) of validationMessages['interests']"
        :key="index"
      >
        <div class="validation-message">{{ message }}</div>
      </div>
    </div>

    <div class="form-control">
      <span>
        <label class="regular-label" for="availability">
          What's your general availability?
        </label>
        <MultiSelect
          id="availability"
          v-model="availability"
          :options="availabilityOptions"
          optionLabel="time"
          optionValue="value"
          display="chip"
          @change="sendPreferences()"
          :class="{
            'p-invalid': validationMessages.hasOwnProperty('availability')
          }"
        />
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
export default {
  name: "Preferences Form",
  props: {
    validationMessagesProp: Object
  },
  data() {
    return {
      ageOptions: [
        { ageGroup: "18-24" },
        { ageGroup: "25-34" },
        { ageGroup: "35+" }
      ],
      preferredAgeGroup: [],
      interestNodes: [
        {
          key: "Sports",
          label: "Sports",
          children: [
            { key: "Basketball", label: "Basketball" },
            { key: "Soccer", label: "Soccer" },
            { key: "Volleyball", label: "Volleyball" }
          ]
        },
        {
          key: "Nature",
          label: "Nature",
          children: [
            { key: "Hiking", label: "Hiking" },
            { key: "Bonfire", label: "Bonfire" },
            { key: "Biking", label: "Biking" }
          ]
        },
        {
          key: "Networking",
          label: "Networking",
          children: [
            { key: "Tech", label: "Tech" },
            { key: "Policy", label: "Policy" }
          ]
        },
        {
          key: "Food",
          label: "Food",
          children: [
            { key: "Restaurant Dinner", label: "Restaurant Dinner" },
            { key: "Potluck", label: "Potluck" }
          ]
        },
        {
          key: "Learning Experiences",
          label: "Learning Experiences",
          children: [
            { key: "Personal development", label: "Personal development" },
            { key: "Skillsharing", label: "Skillsharing" },
            { key: "Coding", label: "Coding" }
          ]
        }
      ],
      selectedInterestNodeKey: [],
      availability: "",
      availabilityOptions: [
        { time: "Weekday mornings (9-12)", value: "Weekday mornings (9-12)" },
        {
          time: "Weekday afternoons (12-5)",
          value: "Weekday afternoons (12-5)"
        },
        { time: "Weekday evenings (5-10)", value: "Weekday evenings (5-10)" },
        { time: "Weekend mornings (9-12)", value: "Weekend mornings (9-12)" },
        {
          time: "Weekend afternoons (12-5)",
          value: "Weekend afternoons (12-5)"
        },
        { time: "Weekend evenings (5-10)", value: "Weekend evenings (5-10)" }
      ],
      validationMessages: this.validationMessagesProp
    };
  },
  computed: {
    selectedInterests() {
      return Object.entries(this.selectedInterestNodeKey)
        .filter(interest => interest[1].checked)
        .map(interest => interest[0]);
    },
    preferencesPayload() {
      return {
        preferredAgeGroup: this.preferredAgeGroup.map(
          ({ ageGroup }) => ageGroup
        ),
        interests: this.selectedInterests,
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
</style>
