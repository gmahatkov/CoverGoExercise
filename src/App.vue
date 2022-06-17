<template>
  <main class="flex">
    <router-view class="mx-auto max-w-xl w-full"/>
  </main>
</template>

<script setup lang="ts">
import { onErrorCaptured } from 'vue';
import { useStore } from 'vuex';
import errors from '@/errors/validity-errors';
import useRouterShortcuts from '@/utils/router-shortcuts';
import { IState } from './store';

const { goToError } = useRouterShortcuts();
const store = useStore<IState>();

onErrorCaptured((err) => {
  if (err instanceof errors.AppError) {
    store.commit('setAppError', err);
    goToError();
  }
});
</script>
