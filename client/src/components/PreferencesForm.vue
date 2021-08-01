<template>
  <div class="container form-card">
    {{selectedInterestNodeKey}}
    <br>
    {{test}}
    <h3 class="card-title">Preferences</h3>
    <div class="form-control">
      <span class="p-float-label">
        <MultiSelect v-model="preferredAgeGroup" :options="ageOptions" optionLabel="ageGroup" />
        <label for="age">Age Group</label>
      </span>
    </div>

    <div class="form-control">
      <span class="p-float-label">
        <AutoComplete
          type="text"
          id="city"
          v-model="selectedCity"
          :suggestions="filteredCityOptions"
          @complete="searchCityOptions($event)"
          :class="{
            'p-invalid': validationMessages.hasOwnProperty('city')
          }"
        />
        <label for="city">City</label>
      </span>
    </div>

    <div class="form-control">
      <span class="p-float-label">
        <TreeSelect v-model="selectedInterestNodeKey" :options="interestNodes" display="chip" selectionMode="checkbox" />
        <label for="interests">Interests</label>
      </span>
    </div>

      <div class="form-control">
        <span class="p-float-label">
          <MultiSelect v-model="selectedAvailability" :options="availabilityOptions" optionLabel="time" optionValue="value" display="chip"/>
          <label for="availability">Availability</label>
        </span>
      </div>
  </div>
</template>

<script>

import cityList from "@/assets/canadianCities.json";

export default {
  name: "Preferences Form",
  data() {
    return {
      ageOptions: [
        {ageGroup:"18-24"},
        {ageGroup:"25-34"},
        {ageGroup:"35+"}
        ],
      preferredAgeGroup: [],
      interestNodes: [
        {"key":"0","label":"Sports","data":"Sports", "children": [{"key": "0-0","label": "Basketball","data": "Basketball"},{"key": "0-1","label": "Soccer","data": "Soccer"},{"key": "0-2","label": "Basketball","data": "Basketball"},{"key": "0-3","label": "Volleyball","data": "Volleyball"}]},{"key":"1","label":"Nature","data":"Nature","children": [{"key": "1-0","label": "Hiking","data": "Hiking"},{"key": "1-1","label": "Bonfire","data": "Bonfire"},{"key": "1-2","label": "Biking","data": "Biking"}]},
        {"key":"2","label":"Networking","data":"Networking","children": [{"key": "2-0","label": "Tech","data": "Tech"},{"key": "2-1","label": "Policy","data": "Policy"}]},
        {"key":"3","label":"Food","data":"Food","children": [{"key": "3-0","label": "Trendy Restaurants","data": "Trendy Restaurants"},{"key": "3-1","label": "Potlucks and picnics","data": "Potlucks and picnics"}]},
        {"key":"4","label":"Learning Experiences","data":"Learning Experiences","children": [{"key": "4-0","label": "Personal development","data": "Personal development"},{"key": "4-1","label": "Skillsharing","data": "Skillsharing"},{"key": "4-2","label": "Coding","data": "Coding"}]}
        ],
      selectedInterestNodeKey: [],
      filteredCityOptions: [],
      selectedCity: "",
      selectedAvailability: "",
      availabilityOptions: [{time: "Weekday mornings (9-12)", value:"Weekday mornings (9-12)"}, {time:"Weekday afternoons (12-5)",value:"Weekday afternoons (12-5)"},{time:"Weekday evenings (5-10)",value:"Weekday evenings (5-10)"},{time:"Weekend mornings (9-12)",value:"Weekend mornings (9-12)"},{time:"Weekend afternoons (12-5)",value:"Weekend afternoons (12-5)"},{time:"Weekend evenings (5-10)",value:"Weekend evenings (5-10)"}],
      validationMessages: {}
    };
  },
  computed: {
    test() {
      return this.interestNodes.filter((node)=> Object.keys(selectedInterestNodeKey).includes(node.)))
    },
    cityOptions() {
      return cityList.map((cityEntry)=>`${cityEntry.city}, ${cityEntry.province}`)
    },
    preferencesPayload() {
      return {
        preferredAgeGroup: this.preferredAgeGroup,
        lastName: this.lastName,
        email: this.email,
        gender: this.gender,
        phoneNumber: this.phoneNumber,
        attendeeInfo: this.attendeeInfo,
      };  
    }
  },
  methods: {
    searchCityOptions(city) {
      setTimeout(() => {
        if (city.query.trim().length < 1) {
          this.filteredCityOptions = this.cityOptions;
        } else {
          this.filteredCityOptions = this.cityOptions.filter(option => {
            return option.toLowerCase().startsWith(city.query.toLowerCase());
          });
        }
      }, 250);
    }
  }
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
  .p-multiselect, .p-treeselect, .p-dropdown, .p-autocomplete, .p-autocomplete-input {
    max-width: 100%;
    width: 200px;
  };
  .p-inputtextarea {
    width: 100%;
    max-width: 100%;
  };
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