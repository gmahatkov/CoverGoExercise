<template>
  <layout-panel title="Hello There!">
    <p class="mb-12">Let's buy some insurance. It is going to take only a few steps.</p>
    <app-button text="Start" variant="variant-1" @click="goToForm" />
  </layout-panel>
</template>

<script setup lang="ts">
import LayoutPanel from '@/components/LayoutPanel.vue';
import AppButton from '@/components/AppButton.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function goToForm() {
  router.push('form');
}
</script>
