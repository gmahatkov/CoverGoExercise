<template>
  <input
    class="px-4 py-3 w-full rounded border-2 border-slate-900"
    :class="{ 'error': isError }"
    :name="props.name"
    :value="props.modelValue"
    :disabled="props.disabled ?? false"
    :placeholder="props.placeholder ?? ''"
    :type="props.type"
    :required="props.required"
    :min="props.min"
    :max="props.max"
    :step="props.step"
    @focus="$emit('focus', $event)"
    @blur="$emit('blur', $event)"
    @input="update"
  />
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue';

interface IProps {
  modelValue: string | number;
  name: string;
  type: 'text' | 'number';
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  pattern?: string;
  min?: number;
  max?: number;
  step?: number;
}

const props = defineProps<IProps>();

const isError = ref<boolean>(false);

interface IEmits {
  (event: 'update:modelValue', value: string | number): void;
  (event: 'focus', eventObj: FocusEvent): void;
  (event: 'blur', eventObj: FocusEvent): void;
}

const emit = defineEmits<IEmits>();

function updateTypeText(value: string) {
  emit('update:modelValue', value);
}

function updateTypeNumber(value: string) {
  emit('update:modelValue', Number.parseFloat(value));
}

function update(event: Event) {
  const value = (event.target as HTMLInputElement)?.value ?? '';
  isError.value = !value;
  switch (props.type) {
    case 'text':
      updateTypeText(value);
      break;
    case 'number':
      updateTypeNumber(value);
      break;
    default:
      throw new Error('props.type should be either text or number');
  }
}
</script>

<style>
.error {
  @apply border-red-600 text-red-600;
}
</style>
