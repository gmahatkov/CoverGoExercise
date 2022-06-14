<template>
    <div>
        <label v-if="label">
            {{ label }}
        </label>
        <div>
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">

import { defineProps } from "vue";

interface IProps {
    label?: string,
}

const { label } = defineProps<IProps>();
</script>