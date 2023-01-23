<template>
  <TransitionRoot appear :show="show" as="template">
    <Dialog as="div" @close="$emit('close')" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="flex flex-col justify-around gap-10 w-full max-w-4xl transform overflow-hidden rounded bg-base-100 p-6 text-left align-middle shadow-xl transition-all"
            >
              <div class="flex flex-col">
                <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                  {{ title }}
                </DialogTitle>
                <div class="mt-4 max-h-96 overflow-y-auto">
                  <slot />
                </div>
              </div>
              <slot name="modal-footer">
                <div class="mt-4 max-h-16 row justify-between items-start self-end gap-2">
                  <button class="btn bg-base-200 text-black hover:bg-base-300 btn-small" type="button" @click="$emit('close')">
                    Close
                  </button>
                  <button class="btn btn-primary ml-2 -py-8 small" type="button" @click="$emit('close')">Confirm</button>
                </div>
              </slot>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
/**
 * @props {Boolean} show
 * @props {String} title
 * @emits {Function} close
 * @emits {Function} onConfirm
 */
import { toRefs } from "vue";
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from "@headlessui/vue";
const props = defineProps({
  show: {
    type: Boolean,
    default: true,
  },
  title: {
    type: String,
    default: "Modal Title",
  },
});
const { show, title } = toRefs(props);
</script>

<style lang="scss" scoped></style>
>
