<script setup lang="ts">
import { ref } from "vue"
import { useHead } from "@vueuse/head"
import Timer from "../components/Timer.vue"
import Steps from "../components/Steps.vue"
import Step from "../components/Step.vue"

useHead({
  title: "Iphone 12 PRO giveaway",
})

let endDate = "2021/06/30 00:00:00 +0000"

const isImageLoaded = ref(false)
</script>

<template>
  <div class="flex flex-col items-center text-center text-white">
    <h1 class="text-3xl font-bold leading-relaxed tracking-wider sm:text-5xl lg:text-6xl">
      iPhone 12 Pro
      <span class="block text-5xl text-lightBlue-500 lg:text-7xl"> GIVEAWAY </span>
    </h1>
    <div class="relative max-w-xl mx-auto my-12">
      <picture>
        <source srcset="../assets/iphone.webp" type="image/webp" />
        <img
          src="../assets/iphone.png"
          alt="iphone-stack"
          class="scale-up-center"
          @load="isImageLoaded = true"
        />
      </picture>
      <Timer v-if="isImageLoaded" :endDate="endDate" />
    </div>
    <div class="w-full my-16">
      <h2
        class="text-3xl font-bold leading-relaxed tracking-wider uppercase text-lightBlue-400 sm:text-5xl"
      >
        How to qualify?
      </h2>
      <hr class="mt-4 mb-12 border-2" />
      <Steps>
        <Step i="1">
          <template #icon>
            <fa-solid:hand-point-up class="w-18 h-18" />
          </template>
          <template #description>
            <div>
              <h1 class="mb-2 text-3xl font-semibold uppercase text-lightBlue-400">Enter</h1>
              <p class="text-2xl">Click Participate now button</p>
            </div>
          </template>
        </Step>
        <Step i="2" reverse>
          <template #icon>
            <fa-solid:file-alt class="w-18 h-18" />
          </template>
          <template #description>
            <div>
              <h1 class="mb-2 text-3xl font-semibold uppercase text-lightBlue-400">Form fillup</h1>
              <p class="text-2xl">Provide the required information</p>
            </div>
          </template>
        </Step>
        <Step i="3">
          <template #icon>
            <fa-solid:cloud-download-alt class="w-18 h-18" />
          </template>
          <template #description>
            <div>
              <h1 class="mb-2 text-3xl font-semibold uppercase text-lightBlue-400">Install</h1>
              <p class="text-2xl">Download an app</p>
            </div>
          </template>
        </Step>
      </Steps>
    </div>
    <router-link class="button-primary" to="/giveaway">PARTICIPATE NOW</router-link>
  </div>
</template>
