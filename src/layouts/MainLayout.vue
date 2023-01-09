<template>
  <div class="flex justify-between max-h-screen">
    <PDrawer :items="items" class="w-3/12" />
    <RouterView class="flex-1 overflow-y-auto" />
  </div>
</template>

<script setup>
import PDrawer from "@/components/PDrawer.vue";
const items = [
  {
    title: "Dashboard",
    icon: "mdi-home",
    to: {
      name: "dashboard",
    },
  },
  {
    title: "About",
    icon: "mdi-account",
    to: {
      name: "about",
    },
  },
  {
    title: "Login",
    icon: "mdi-login",
    to: {
      name: "login",
    },
  },
];
</script>

<style lang="scss" scoped></style>
