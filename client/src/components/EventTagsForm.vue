<template>
  <div class="container form-card px-3 py-4 md:px-4 md:py-5">
    <h3 class="form-section-title">Event Tags (Optional)</h3>

    <div>
      <p class="mt-3">
        Click the tags below to let our hosts know what kinds of events you want
        them to plan for you
      </p>
    </div>

    <div class="form-control">
      <div class="align-items-center scroll">
        <SelectButton
          v-model="selectedEventTags"
          :options="filteredTagOptions.slice(0, maxTags)"
          :multiple="true"
          optionLabel="tag"
          optionValue="tag"
        />
      </div>

      <Button
        label="Show More"
        class="p-button-text my-1 block"
        @click="maxTags += 10"
        icon="pi pi-plus"
        iconPos="left"
        v-if="maxTags < filteredTagOptions.length"
      />

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
    validationMessagesProp: Object,
    interestsProp: Array
  },
  data() {
    return {
      selectedEventTags: [],
      tagOptions: eventTags,
      validationMessages: this.validationMessagesProp,
      maxTags: 10
    };
  },
  computed: {
    filteredTagOptions() {
      return this.tagOptions.filter(
        ({ category }) =>
          category === "General" || this.interestsProp.includes(category)
      );
    }
  },
  watch: {
    validationMessagesProp: function(newVal) {
      return (this.validationMessages = newVal);
    },
    selectedEventTags: function() {
      this.$emit("send-tags", { selectedEventTags: this.selectedEventTags });
    }
  }
};
</script>

<style scoped lang="scss">
</style>
