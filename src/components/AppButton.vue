<template>
    <button
        @click.prevent="$emit('click', $event)"
        :disabled='props.disabled ?? false'
        class="app-button"
        :class='variantClass'
    >
        {{ props.text }}
    </button>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, ref } from 'vue';

interface IProps {
  variant?: 'variant-1' | 'variant-2',
  text: string,
  disabled?: boolean,
}

const props = defineProps<IProps>();

interface IEmits {
  (event: 'click', eventObj: MouseEvent): void,
}

defineEmits<IEmits>();

const variantClass = ref({
  'variant-1': 'app-button__variant_1',
  'variant-2': 'app-button__variant_2',
}[props.variant ?? 'variant-1']);
</script>

<style>
.app-button {
  @apply w-32 rounded border-2 border-slate-900 py-2 px-4;
}
.app-button__variant_1 {
  @apply bg-transparent text-slate-900;
}
.app-button__variant_2 {
  @apply bg-slate-900 text-white;
}
.app-button__variant_1:disabled {
  @apply border-slate-500 text-slate-400;
}
.app-button__variant_2:disabled {
  @apply border-slate-500 bg-slate-400;
}
</style>
