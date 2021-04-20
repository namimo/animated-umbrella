<script setup lang="ts">
import { defineProps } from "vue"

defineProps({
  i: {
    type: String,
    required: true,
  },
  reverse: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <li class="relative flex items-center pb-16">
    <!-- Complete Step -->
    <div class="flex w-2/5 h-full" :class="reverse ? `order-3` : `order-1 justify-end`">
      <slot name="icon" />
    </div>
    <div
      class="-ml-px absolute mt-0.5 w-1 h-full bg-lightBlue-400"
      aria-hidden="true"
      style="left: 50%"
    ></div>
    <div class="flex justify-center order-2 w-1/5">
      <span
        class="relative z-10 flex items-center justify-center w-10 h-10 mx-auto rounded-full bg-lightBlue-400 group-hover:bg-lightBlue-400"
      >
        <span class="text-2xl font-semibold text-white">{{ $props.i }}</span>
      </span>
    </div>
    <div class="w-2/5" :class="reverse ? `text-right order-1` : `order-3 text-left`">
      <slot name="description" />
    </div>
  </li>
</template>
