<template>
  <div class="text-md px-6 breadcrumbs">
    <ul>
      <li class="font-semibold">{{ title }}</li>
    </ul>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const {
  meta: { title },
} = route;
</script>

<style lang="scss" scoped></style>
