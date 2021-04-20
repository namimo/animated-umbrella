<script setup lang="ts">
import { ref, watch } from "vue"

const isOpen = ref(false)

const toggle = () => {
  isOpen.value = !isOpen.value
}

watch(isOpen, () => {
  document.body.style.overflow = isOpen.value ? "hidden" : "auto"
})
</script>

<template>
  <slot name="button" :toggle="toggle" />
  <teleport to="body">
    <transition leave-active-class="duration-200 ease-in">
      <div class="fixed inset-0 z-20 overflow-y-auto" v-show="isOpen">
        <div
          class="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0"
        >
          <transition
            enter-active-class="duration-300 ease-out"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="duration-200 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <div class="fixed inset-0 transition-opacity" v-show="isOpen">
              <div class="absolute inset-0 bg-gray-900 opacity-50" @click="toggle"></div>
            </div>
          </transition>
          <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
          <transition
            enter-active-class="duration-300 ease-out"
            enter-from-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
            enter-to-class="translate-y-0 opacity-100 sm:scale-100"
            leave-active-class="duration-200 ease-in"
            leave-from-class="translate-y-0 opacity-100 sm:scale-100"
            leave-to-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
          >
            <div
              class="z-30 inline-block text-left align-bottom transition-all transform bg-white rounded shadow-xl sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full"
              v-if="isOpen"
            >
              <div
                class="relative p-4 overflow-y-auto sm:p-6"
                style="max-height: calc(100vh - 150px)"
              >
                <div class="absolute top-0 right-0 m-3 sm:m-4.5">
                  <button class="p-2 text-black rounded-full focus:outline-none" @click="toggle">
                    <span class="sr-only">Close</span>
                    <fa-regular:times-circle class="w-6 h-6 sm:w-8 sm:h-8" />
                  </button>
                </div>
                <slot />
              </div>
            </div>
          </transition>
        </div>
      </div>
    </transition>
  </teleport>
</template>
