<script setup lang="ts">
import Particles from "./components/Particles.vue"
import Footer from "./components/Footer.vue"
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Particles />
    <main class="relative flex-grow w-full max-w-5xl px-4 py-8 mx-auto sm:py-12 lg:py-16">
      <router-view />
    </main>
    <Footer class="flex-shrink-0" />
  </div>
</template>
