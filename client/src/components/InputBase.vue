<script setup lang="ts">
import { defineEmit, defineProps } from "vue"

const props = defineProps({
  label: { type: String },
  modelValue: { type: String, required: true },
})
const emit = defineEmit(["update:modelValue"])

const onInput = (e: Event) => {
  emit("update:modelValue", (e.target as HTMLInputElement).value)
}
</script>

<template inherit-attrs="false">
  <label class="block text-left">
    <span class="block font-medium">{{ props.label }}</span>
    <div class="mt-2">
      <input
        type="text"
        class="block w-full px-3 py-2 leading-normal text-black bg-white border border-gray-300 rounded-lg appearance-none"
        v-bind="$attrs"
        :value="props.modelValue"
        @input="onInput"
      />
    </div>
  </label>
</template>
