<template>
    <button
        @click.prevent="$emit('click', $event)"
        :disabled='props.disabled ?? false'
        class="w-32 text-md rounded border-2 border-slate-900 py-2 px-4"
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
  'variant-1': 'bg-transparent text-slate-900',
  'variant-2': 'bg-slate-900 text-white',
}[props.variant ?? 'variant-1']);
</script>
