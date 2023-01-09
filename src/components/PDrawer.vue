<template>
  <div class="drawer min-w-3/12 shadow-2xl">
    <div class="drawer-side">
      <header
        class="bg-base-200 bg-opacity-90 backdrop-blur sticky w-full top-0 items-center gap-2 px-4 py-2 hidden lg:flex"
      >
        <a
          href="/"
          aria-current="page"
          aria-label="Homepage"
          class="flex-0 btn btn-ghost px-2"
          ><div
            class="font-title text-primary inline-flex text-lg transition-all duration-200 md:text-3xl"
          >
            <span class="capitalize">Papito</span>
            <span class="text-base-content uppercase">UI</span>
          </div></a
        >
      </header>
      <ul
        class="menu p-4 bg-base-200 shadow-sm h-full text-base-content min-w-82"
      >
        <!-- Sidebar content here -->

        <RouterLink
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          exact
          custom
          v-slot="{ navigate, isActive }"
        >
          <li class="mb-1" @click="navigate">
            <a :class="{ active: isActive }">{{ item.title }}</a>
          </li>
        </RouterLink>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { toRefs, defineProps } from "vue";
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});
const { items } = toRefs(props);
</script>

<style lang="scss" scoped></style>
