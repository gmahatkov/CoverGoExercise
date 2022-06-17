<template>
    <div class="mb-8">
        <div v-if="label" class="mb-2 text-left">
            {{ props.label }}
        </div>
        <div>
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">

import { defineProps } from 'vue';

interface IProps {
    label?: string,
}

const props = defineProps<IProps>();
</script>
