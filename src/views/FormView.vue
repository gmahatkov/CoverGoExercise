<template>
  <layout-panel title="Tell us about yourself">
    <form class="mb-4 px-12">
      <form-field label="Name">
        <text-input
          v-model="formValues.name"
          name="name"
          type="text"
          :required="true"
        />
      </form-field>
      <form-field label="Age">
        <text-input
          v-model="formValues.age"
          name="age"
          type="number"
          :required="true"
          :step="1"
          :min="1"
        />
      </form-field>
      <form-field label="Country">
        <select-list
          v-model="formValues.country"
          name="country"
          :options="ContriesOptions"
          :required="true"
        />
      </form-field>
      <form-field>
        <radio-list
          v-model="formValues.pack"
          name="package"
          :options="packageOptions"
          :required="true"
        />
      </form-field>
    </form>
    <div class="text-3xl font-bold mb-12">
      Your premium is: {{summary}}{{formValues.country}}
    </div>
    <div class="px-12 flex justify-between">
      <app-button
        text="Back"
        variant="variant-1"
        @click="goToHome"
      />
      <app-button
        text="Next"
        variant="variant-2"
        @click="validateAndProceed"
        :disabled="disableSubmit"
      />
    </div>
  </layout-panel>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import LayoutPanel from '@/components/LayoutPanel.vue';
import FormField from '@/components/FormField.vue';
import TextInput from '@/components/TextInput.vue';
import SelectList from '@/components/SelectList.vue';
import RadioList from '@/components/RadioList.vue';
import AppButton from '@/components/AppButton.vue';
import {
  IState, IFormValues, ContriesOptions,
  PackagesOptions, TOption, PackageRates,
} from '@/store';
import useRouterShortcuts from '@/utils/router-shortcuts';
import errors from '@/errors/validity-errors';

const store = useStore<IState>();
const { goToHome, goToSummary } = useRouterShortcuts();

// computed
const formValues = computed<IFormValues>({
  get() {
    return store.state.formValues;
  },
  set(values) {
    store.commit('setFormState', values);
  },
});

const packageOptions = computed<Array<TOption>>(() => {
  const { summaryWithoutRate } = store.getters;
  return PackagesOptions.map((opt) => {
    const rate = summaryWithoutRate * PackageRates[opt.value];
    return {
      value: opt.value,
      text: `${opt.text} ${rate === 0 ? '' : `+(${rate}${formValues.value.country}, ${PackageRates[opt.value] * 100}%)`}`,
    };
  });
});

const summary = computed(() => store.getters.summary);

const disableSubmit = computed(() => !formValues.value.age || !formValues.value.name);

// Methods
function validateAndProceed() {
  if (formValues.value.age > 100) {
    throw new errors.InvalidAgeError();
  }
  goToSummary();
}
</script>
