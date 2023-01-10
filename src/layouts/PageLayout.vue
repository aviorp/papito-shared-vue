<template>
  <main class="h-screen w-full">
    <header
      class="navbar bg-base-100 shadow-lg rounded-sm sticky top-0 z-10 flex items-center justify-between"
    >
      <PBreadcrumbs />
      <slot name="page-actions" />
    </header>
    <PLoading class="top-0" v-if="state === states.LOADING" />
    <div v-else class="p-6 grid grid-cols-3 gap-6">
      <slot />
    </div>
  </main>
</template>

<script setup>
import PLoading from "@/components/PLoading.vue";
import PBreadcrumbs from "@/components/PBreadcrumbs.vue";
import { toRefs } from "vue";
import { states } from "@/constants";
const { state } = toRefs(props);

const props = defineProps({
  state: {
    type: String,
    required: true,
    validator: (value) => !!states[value],
    default: states.INIT,
  },
});
</script>

<style lang="scss" scoped></style>
