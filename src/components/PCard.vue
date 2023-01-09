<template>
  <div class="card card-compact w-full bg-base-100 shadow-xl">
    <slot name="header">
      <figure class="h-2 bg-primary" />
    </slot>
    <div class="card-body">
      <slot />
      <div class="card-actions justify-end">
        <slot name="card-actions" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
