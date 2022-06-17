<template>
  <layout-panel title="Summary">
    <ul class="mb-6">
      <li v-for="[key, val] of values" :key="key" class="mb-4">
      {{ key }}: {{ val }}
      </li>
    </ul>
    <div class="px-14 flex justify-around">
      <app-button
        text="Back"
        variant="variant-1"
        @click="goToForm"
      />
      <app-button
        text="Buy"
        variant="variant-2"
        @click="submitPurchase"
      />
    </div>
  </layout-panel>
</template>

<script setup lang="ts">
import LayoutPanel from '@/components/LayoutPanel.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';
import useRouterShortcuts from '@/utils/router-shortcuts';
import { IState, ContriesOptions, PackagesOptions } from '@/store';
import AppButton from '@/components/AppButton.vue';

const store = useStore<IState>();
const { goToHome, goToForm } = useRouterShortcuts();

// computed
const values = computed<Array<Array<any>>>(() => {
  const {
    age, name, country, pack,
  } = store.state.formValues;
  return Object.entries({
    'Name': name,
    'Age': age,
    'Where do you live': ContriesOptions.find((i) => i.value === country)?.text,
    'Package': PackagesOptions.find((i) => i.value === pack)?.text,
    'Premium': `${store.getters.summary}${country}`,
  });
});

// methods
function submitPurchase() {
  goToHome();
  store.commit('setFormStateToDefault');
}
</script>
