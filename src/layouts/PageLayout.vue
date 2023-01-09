<template>
  <main class="h-screen w-full">
    <header class="navbar bg-base-100 shadow-md rounded-sm sticky top-0 z-10">
      <PBreadcrumbs />
    </header>
    <div class="p-6 grid grid-cols-3 gap-6">
      <slot />
    </div>
  </main>
</template>

<script setup>
import PBreadcrumbs from "@/components/PBreadcrumbs.vue";
</script>

<style lang="scss" scoped></style>
