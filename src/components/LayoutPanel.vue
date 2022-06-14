<template>
    <section class="px-12 py-16 mt-8 bg-slate-100">
        <header class="text-4xl font-bold text-center mb-10">
            {{ title }}
        </header>
        <div class="text-center">
            <slot />
        </div>
    </section>
</template>

<script setup lang="ts">

import { defineProps } from 'vue';

interface IProps {
    title: string
}

const props = defineProps<IProps>();

</script>
