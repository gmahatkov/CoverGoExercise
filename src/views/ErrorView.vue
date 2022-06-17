<template>
  <layout-panel title="Ooops">
    <p class="error-msg">
      {{ errorMsg }}
    </p>
    <app-button
      text="Ok :("
      variant="variant-2"
      class="w-full"
      @click="leave"
    />
  </layout-panel>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { computed } from 'vue';
import LayoutPanel from '@/components/LayoutPanel.vue';
import AppButton from '@/components/AppButton.vue';
import { IState } from '@/store';
import useRouterShortcuts from '@/utils/router-shortcuts';

const store = useStore<IState>();
const { goToHome } = useRouterShortcuts();

// computed
const errorMsg = computed(() => store.state.appState.error?.message);

// methods
function leave() {
  store.commit('setFormStateToDefault');
  goToHome();
}
</script>

<style>
.error-msg {
  white-space: break-spaces;
  @apply mb-8;
}
</style>
