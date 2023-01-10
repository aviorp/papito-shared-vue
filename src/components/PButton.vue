<template>
  <button class="btn" :class="buttonClassBuilder" v-bind="$attrs">
    <slot />
  </button>
</template>

<script setup>
import { computed, defineProps, toRefs } from "vue";
const props = defineProps({
  color: {
    type: String,
    default: "primary",
  },
  size: {
    type: String,
    default: "sm",
  },
  outline: {
    type: Boolean,
    default: false,
  },
  wide: {
    type: Boolean,
    default: false,
  },
  block: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});

const { color, size, outline, wide, block, loading } = toRefs(props);

const buttonClassBuilder = computed(() => ({
  [`btn-${color.value}`]: color.value,
  [`btn-${size.value}`]: size.value,
  "btn-outline": outline.value,
  "btn-wide": wide.value,
  "btn-block": block.value,
  loading: loading.value,
}));
</script>

<style lang="scss" scoped></style>
