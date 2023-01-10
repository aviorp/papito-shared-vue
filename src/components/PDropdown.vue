<template>
  <div :class="`dropdown dropdown-${position}`">
    <label tabindex="0">
      <slot>
        <button class="btn btn-primary">Dropdown</button>
      </slot>
    </label>
    <ul
      tabindex="0"
      class="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4"
    >
      <li v-for="item in items" :key="item" @click="$emit('select', item)">
        <a>{{ item }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { toRefs, defineProps } from "vue";
const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  position: {
    type: String,
    required: false,
    default: "bottom",
  },
});
const { items, position } = toRefs(props);
</script>

<style lang="scss" scoped></style>
