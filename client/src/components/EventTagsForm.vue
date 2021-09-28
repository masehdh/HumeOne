<template>
  <div class="container form-card px-3 py-4 md:px-4 md:py-5">
    <h3 class="form-section-title">Event Tags (Optional)</h3>

    <div>
      <p class="mt-3 line-height-3">
        Click the tags below to let our hosts know what kinds of events you want
        to see
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
    </div>

    <!-- List of tags -->
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
      tagFilter: "",
      tagOptions: eventTags,
      validationMessages: this.validationMessagesProp,
      maxTags: 10
    };
  },
  computed: {
    filteredTagOptions() {
      return this.tagOptions.filter(({ category, tag }) => {
        if (this.tagFilter.length > 0) {
          return tag.toLowerCase().includes(this.tagFilter.toLowerCase());
        } else {
          return (
            category === "General" ||
            this.interestsProp.includes(category) ||
            this.selectedEventTags.includes(tag)
          );
        }
      });
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
</style>
