<template>
  <select
    class="px-4 py-3 w-full rounded border-2 border-slate-900 bg-white"
    :value="props.modelValue"
    :name="props.name"
    :required="props.required ?? false"
    :disabled="props.disabled ?? false"
    @focus="$emit('focus', $event)"
    @blur="$emit('blur', $event)"
    @input="update"
  >
    <option
      v-for="option of props.options"
      :value="option.value"
      :key="option.value"
    >
      {{ option.text }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { TOption } from '@/store';

interface IProps {
  modelValue: string | number;
  name: string;
  options: Array<TOption>;
  required?: boolean;
  disabled?: boolean;
}

const props = defineProps<IProps>();

interface IEmits {
  (event: 'update:modelValue', value: string | number): void;
  (event: 'focus', eventObj: FocusEvent): void;
  (event: 'blur', eventObj: FocusEvent): void;
}

const emit = defineEmits<IEmits>();

function update(event: Event) {
  const value = (event.target as HTMLSelectElement)?.value ?? '';
  emit('update:modelValue', value);
}

</script>
