<template>
  <div class="container form-card">
    <h3 class="card-title">Preferences</h3>
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
        />
      </span>
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
        />
      </span>
    </div>

    <div class="form-control">
      <span>
        <label class="regular-label" for="availability">
          What's your general availability?
        </label>
        <MultiSelect
          id="availability"
          v-model="selectedAvailability"
          :options="availabilityOptions"
          optionLabel="time"
          optionValue="value"
          display="chip"
          @change="sendPreferences()"
        />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Preferences Form",
  data() {
    return {
      ageOptions: [
        { ageGroup: "18-24" },
        { ageGroup: "25-34" },
        { ageGroup: "35+" },
      ],
      preferredAgeGroup: [],
      interestNodes: [
        {
          key: "Sports",
          label: "Sports",
          children: [
            { key: "Basketball", label: "Basketball" },
            { key: "Soccer", label: "Soccer" },
            { key: "Volleyball", label: "Volleyball" },
          ],
        },
        {
          key: "Nature",
          label: "Nature",
          children: [
            { key: "Hiking", label: "Hiking" },
            { key: "Bonfire", label: "Bonfire" },
            { key: "Biking", label: "Biking" },
          ],
        },
        {
          key: "Networking",
          label: "Networking",
          children: [
            { key: "Tech", label: "Tech" },
            { key: "Policy", label: "Policy" },
          ],
        },
        {
          key: "Food",
          label: "Food",
          children: [
            { key: "Restaurant Dinner", label: "Restaurant Dinner" },
            { key: "Potluck", label: "Potluck" },
          ],
        },
        {
          key: "Learning Experiences",
          label: "Learning Experiences",
          children: [
            { key: "Personal development", label: "Personal development" },
            { key: "Skillsharing", label: "Skillsharing" },
            { key: "Coding", label: "Coding" },
          ],
        },
      ],
      selectedInterestNodeKey: [],
      selectedAvailability: "",
      availabilityOptions: [
        { time: "Weekday mornings (9-12)", value: "Weekday mornings (9-12)" },
        {
          time: "Weekday afternoons (12-5)",
          value: "Weekday afternoons (12-5)",
        },
        { time: "Weekday evenings (5-10)", value: "Weekday evenings (5-10)" },
        { time: "Weekend mornings (9-12)", value: "Weekend mornings (9-12)" },
        {
          time: "Weekend afternoons (12-5)",
          value: "Weekend afternoons (12-5)",
        },
        { time: "Weekend evenings (5-10)", value: "Weekend evenings (5-10)" },
      ],
      validationMessages: {},
    };
  },
  computed: {
    selectedInterests() {
      return Object.entries(this.selectedInterestNodeKey)
        .filter((interest) => interest[1].checked)
        .map((interest) => interest[0]);
    },
    preferencesPayload() {
      return {
        preferredAgeGroup: this.preferredAgeGroup.map(
          ({ ageGroup }) => ageGroup
        ),
        selectedInterests: this.selectedInterests,
        selectedAvailability: this.selectedAvailability,
      };
    },
  },
  methods: {
    sendPreferences() {
      return this.$emit("send-preferences", this.preferencesPayload);
    },
  },
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
  max-width: 100%;
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
  max-width: 100%;
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
  .validation-message {
    padding-top: 4px;
    font-size: 14px;
    color: rgb(255, 62, 62);
  }
}

.regular-label {
  display: block;
  margin: 8px 0;
}

.submit-button {
  margin-top: 16px;
  max-width: 100%;
}

form {
  max-width: 100%;
}

#hero-image {
  padding: 200px 0;
  border-radius: 8px;
  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 32px;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url("../assets/bonfire-image.jpg");
  background-attachment: scroll;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;
  @media (max-width: $mobile-breakpoint) {
    padding: 125px 0;
  }
}
</style>
