<template>
  <div class="text-md px-6 breadcrumbs">
    <ul>
      <li class="font-semibold">{{ title }}</li>
    </ul>
  </div>
</template>

<script setup>
// import { useRoute } from "vue-router";

// TODO: Add breadcrumbs
const props = defineProps({
  title: {
    type: String,
    required: true,
    default: "Home",
  },
});

// const route = useRoute();
// const {
//   meta: { title },
// } = route;
</script>

<style lang="scss" scoped></style>
