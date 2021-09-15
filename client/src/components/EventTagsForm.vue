<template>
  <div class="container form-card px-3 py-4 md:px-4 md:py-5">
    <h3 class="form-section-title">Event Tags</h3>

    <div>
      <p class="mt-3">
        Click the tags below to let our hosts know what kinds of events you want
        them to plan for you
      </p>
    </div>

    <div class="form-control">
      <div class="align-items-center ">
        <p class="tag-category-header mb-3 font-medium">
          General
        </p>

        <SelectButton
          v-model="selectedEventTags"
          :options="tagOptions.filter(({ category }) => category === 'general')"
          :multiple="true"
          optionLabel="tag"
          optionValue="tag"
          @change="sendTags()"
        />
      </div>

      <div class="align-items-center ">
        <p class="tag-category-header my-3 font-medium">
          Learning and Development
        </p>

        <SelectButton
          v-model="selectedEventTags"
          :options="
            tagOptions.filter(
              ({ category }) => category === 'learning and development'
            )
          "
          :multiple="true"
          optionLabel="tag"
          optionValue="tag"
          @change="sendTags()"
        />
      </div>

      <div class="align-items-center ">
        <p class="tag-category-header my-3 font-medium">
          Physical Activity
        </p>

        <SelectButton
          v-model="selectedEventTags"
          :options="
            tagOptions.filter(
              ({ category }) => category === 'physical activity'
            )
          "
          :multiple="true"
          optionLabel="tag"
          optionValue="tag"
          @change="sendTags()"
        />
      </div>

      <div class="align-items-center ">
        <p class="tag-category-header my-3 font-medium">
          Arts and Culture
        </p>

        <SelectButton
          v-model="selectedEventTags"
          :options="
            tagOptions.filter(({ category }) => category === 'arts and culture')
          "
          :multiple="true"
          optionLabel="tag"
          optionValue="tag"
          @change="sendTags()"
        />
      </div>

      <div class="align-items-center ">
        <p class="tag-category-header my-3 font-medium">
          Games
        </p>

        <SelectButton
          v-model="selectedEventTags"
          :options="tagOptions.filter(({ category }) => category === 'games')"
          :multiple="true"
          optionLabel="tag"
          optionValue="tag"
          @change="sendTags()"
        />
      </div>

      <div
        v-for="(message, index) of validationMessages['selectedEventTags']"
        :key="index"
      >
        <div class="validation-message">{{ message }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import eventTags from "../../../resources/eventTags.json";

export default {
  name: "Event Tags Form",
  props: {
    validationMessagesProp: Object
  },
  data() {
    return {
      selectedEventTags: [],
      tagOptions: eventTags,
      filteredTagOptions: [],
      validationMessages: this.validationMessagesProp
    };
  },
  computed: {
    interestsPayload() {
      return {
        selectedEventTags: this.selectedEventTags
      };
    }
  },
  watch: {
    validationMessagesProp: function(newVal) {
      return (this.validationMessages = newVal);
    }
  },
  methods: {
    sendTags() {
      return this.$emit("send-tags", this.interestsPayload);
    }
  }
};
</script>

<style scoped lang="scss">
</style>
