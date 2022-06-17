<template>
  <div class="radio-list">
    <label
      v-for="option of props.options"
      :key="option.value"
      class="radio-list__item"
    >
      <input
        type="radio"
        class="radio-list__input"
        :value="option.value"
        :name="props.name"
        :checked="option.value === props.modelValue"
        :required="props.required ?? false"
        :disabled="props.disabled ?? false"
        @focus="$emit('focus', $event)"
        @blur="$emit('blur', $event)"
        @input="update"
      />
      <span class="radio-list__label-text">
        {{ option.text }}
      </span>
    </label>
  </div>
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

<style>
.radio-list {
  @apply flex flex-col items-start;
}
.radio-list__item {
  @apply flex items-center mb-2;
}
.radio-list__input {
  width: 20px;
  height: 20px;
  appearance: none;
  border-radius: 50%;
  position: relative;
  @apply mr-2 bg-white border-2 border-slate-900;
}
.radio-list__input::before {
  content: '';
  position: absolute;
}
.radio-list__input:checked {
  @apply border-blue-700 bg-blue-700;
}
.radio-list__input:checked::before {
  background-color: #fff;
  border-radius: 50%;
  width: 8px;
  height: 8px;
  left: 4px;
  top: 4px;
}
</style>
