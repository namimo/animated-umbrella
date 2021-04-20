<script setup lang="ts"></script>

<template>
  <div
    class="flex flex-col justify-center text-left text-white"
    style="height: calc(100vh - 250px)"
  >
    <p class="w-full text-4xl">Oops !</p>
    <h1 class="text-9xl">404</h1>
    <p class="text-lg text-center">PAGE NOT FOUND</p>
    <router-link
      to="/"
      class="inline-flex items-center justify-center px-8 py-3 mt-8 text-xl border border-white"
    >
      <fa-solid:arrow-left class="mr-2" />Go home
    </router-link>
  </div>
</template>
