<template>
  <div class="container form-card px-3 py-4 md:px-4 md:py-5">
    <h3 class="form-section-title">
      Profile &amp; Preferences (Optional)
    </h3>

    <div>
      <p class="mt-3 line-height-3">
        The following information will help us fine-tune what invites you will
        receive
      </p>
    </div>

    <!-- Age Field -->
    <div class="form-control md:mr-3">
      <span class="p-float-label">
        <InputMask
          v-model="age"
          v-tooltip.bottom.focus="'Helps us connect you with others your age'"
          mask="9?99"
          slotChar=""
          :class="{
            'p-invalid': validationMessages.hasOwnProperty('birthYear')
          }"
          class="w-20rem"
        />

        <label for="age">Age</label>
      </span>

      <div
        v-for="(message, index) of validationMessages['birthYear']"
        :key="index"
      >
        <div class="validation-message">{{ message }}</div>
      </div>
    </div>

    <div class="form-control">
      <span class="p-float-label">
        <InputText
          id="maxTravelDistance"
          class="w-20rem select-none"
          readonly
          v-model="displayTravelDistance"
        />

        <Slider
          class="w-20rem"
          v-model.number="maxTravelDistance"
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
          :class="{
            'p-invalid': validationMessages.hasOwnProperty('interests')
          }"
          class="w-20rem"
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

    <!-- Gender Field -->
    <div class="form-control">
      <span class="p-float-label">
        <AutoComplete
          type="text"
          id="gender"
          v-model="gender"
          v-tooltip.bottom.focus="
            'Helps us facilitate certain events (e.g. women\'s soccer)'
          "
          :suggestions="filteredGenderOptions"
          :minLength="1"
          :delay="0"
          @complete="searchGenderOptions($event)"
          :class="{
            'p-invalid': validationMessages.hasOwnProperty('gender')
          }"
          class="w-20rem"
        />

        <label for="gender">Gender</label>
      </span>

      <div
        v-for="(message, index) of validationMessages['gender']"
        :key="index"
      >
        <div class="validation-message">{{ message }}</div>
      </div>
    </div>
  </div>

  <div class="container form-card px-3 py-4 md:px-4 md:py-5">
    <h3 class="form-section-title">Event Tags (Optional)</h3>

    <div>
      <p class="mt-3 line-height-3">
        Click the tags below to let our hosts know what events want planned
      </p>
    </div>

    <!-- Filter -->
    <div class="form-control md:mr-3 p-input-filled">
      <span class="p-float-label">
        <InputText
          type="text"
          id="tag-filter"
          v-model="tagFilter"
          class="w-full"
        />
        <label for="tag-filter">Search tags</label>
      </span>

      <small
        id="reset-filter"
        class="no-underline"
        v-if="tagFilter.length > 0"
        @click="tagFilter = ''"
        >Reset filter</small
      >
    </div>

    <!-- List of tags -->
    <div class="form-control">
      <div class="align-items-center scroll">
        <SelectButton
          v-model="selectedEventTags"
          :options="filteredTagOptions"
          :multiple="true"
          optionLabel="tag"
          optionValue="tag"
        />
      </div>

      <Button
        label="Show More"
        class="p-button-text my-1 block no-underline"
        @click="incrementTags"
        icon="pi pi-plus"
        iconPos="left"
        v-if="maxTags <= filteredTagOptions.length && tagFilter.length < 1"
      />

      <div
        v-for="(message, index) of validationMessages['selectedEventTags']"
        :key="index"
      >
        <div class="validation-message">{{ message }}</div>
      </div>
    </div>
  </div>

  <div class="mt-2">
    <Button
      label="Submit"
      class="p-button-md p-button-primary submit-button no-underline"
      @click="submitPreferences"
    />
  </div>

  <div v-for="(message, index) of validationMessages['submit']" :key="index">
    <div class="validation-message">{{ message }}</div>
  </div>

  <Message
    v-for="msg of serverResponses"
    :severity="msg.severity"
    :key="msg.content"
  >
    {{ msg.content }}
  </Message>
</template>

<script>
import interestCategories from "../../../resources/interests.json";
import availabilityCategories from "../../../resources/availability.json";
import eventTags from "../../../resources/eventTags.json";
import axios from "axios";
import { preferencesValidation } from "../../../resources/validation";

export default {
  name: "Preferences Form",
  props: {
    emailProp: String
  },
  data() {
    return {
      serverResponses: [],
      availability: [],
      interests: [],
      maxTravelDistance: 25,
      interestOptions: interestCategories.map(interest => {
        return { interest: interest };
      }),
      availabilityOptions: availabilityCategories.map(availability => {
        return { availability: availability };
      }),
      gender: "",
      age: "",
      filteredGenderOptions: [],
      genderOptions: [
        "Female",
        "Male",
        "Two spirit",
        "Transgender",
        "Non-binary",
        "Agender",
        "Genderqueer"
      ],
      selectedEventTags: [],
      tagFilter: "",
      tagOptions: eventTags,
      maxTags: 10,
      validationMessages: {}
    };
  },
  computed: {
    displayTravelDistance() {
      return `${this.maxTravelDistance} km`;
    },
    filteredTagOptions() {
      if (this.tagFilter.length > 0) {
        return this.tagOptions
          .filter(({ tag }) => {
            return tag.toLowerCase().includes(this.tagFilter.toLowerCase());
          })
          .slice(0, 10);
      }

      const filteredTags = this.tagOptions.filter(({ category }) => {
        return category === "General" || this.interests.includes(category);
      });

      const selectedTags = this.tagOptions.filter(({ tag }) => {
        return this.selectedEventTags.includes(tag);
      });

      const remainingTags = filteredTags.filter(({ tag }) => {
        return !this.selectedEventTags.includes(tag);
      });

      return selectedTags.concat(
        remainingTags.slice(
          0,
          selectedTags.length >= this.maxTags
            ? 0
            : this.maxTags - selectedTags.length
        )
      );
    },
    birthYear() {
      const age = this.age.length > 0 ? Number(this.age) : null;
      const val = new Date().getFullYear() - age;
      if (typeof age === "number") return val;
      return undefined;
    },
    preferencesPayload() {
      return {
        gender: this.gender,
        birthYear: this.birthYear,
        interests: this.interests,
        maxTravelDistance: this.maxTravelDistance * 1000,
        availability: this.availability,
        selectedEventTags: this.selectedEventTags
      };
    }
  },
  methods: {
    incrementTags() {
      return this.selectedEventTags.length < this.maxTags
        ? (this.maxTags += 10)
        : (this.maxTags = this.selectedEventTags.length + 10);
    },
    submitPreferences() {
      this.validationMessages = {};
      const { error } = preferencesValidation(this.preferencesPayload);
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
        .put("/api/sign-up/preferences", {
          email: this.emailProp,
          preferences: this.preferencesPayload
        })
        .then(() => {
          this.$router.push({
            name: "Sign Up Confirmation"
          });
        })
        .catch(error =>
          this.serverResponses.push({
            severity: "error",
            content: error.response.data.message
          })
        );
    },
    searchGenderOptions(event) {
      return (this.filteredGenderOptions = this.genderOptions.filter(option => {
        return option.toLowerCase().startsWith(event.query.toLowerCase());
      }));
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

#tag-filter {
  padding: 1.4rem 0.8rem 0.5rem 1rem !important;
  background-color: rgba(0, 0, 0, 0.03);
  background-image: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  &:hover,
  &:focus {
    border-bottom: 2px solid rgba(63, 81, 181, 0.92);
  }
}

#reset-filter {
  color: rgba(63, 81, 181, 0.92);
  &:hover {
    cursor: pointer;
  }
}

.optional-text {
  opacity: 0.6;
  font-size: 16px;
  font-weight: 500;
}
</style>
