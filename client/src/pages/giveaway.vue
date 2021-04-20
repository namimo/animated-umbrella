<script setup lang="ts">
import { ref, onMounted } from "vue"
import { useHead } from "@vueuse/head"
// import {
//   Listbox,
//   ListboxLabel,
//   ListboxButton,
//   ListboxOptions,
//   ListboxOption,
// } from "@headlessui/vue"
import InputBase from "../components/InputBase.vue"
import Recaptcha from "../components/Recaptcha.vue"
import transitionMP3 from "../assets/transition-1.mp3"

const SITE_KEY = "6LdK6lcaAAAAAN5X446f0lp2RbULquLINb5S7Gz2"
const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const COUNTRIES = ["Nepal", "America", "Spain", "Japan"]

useHead({
  title: "Giveaway Sign up",
})

const step = ref<"one" | "two">("one")

const name = ref("")
const email = ref("")
// const country = ref("Nepal")
const isTermsAndConditionsAccepted = ref(false)
const receiveEmail = ref(false)
const completedCaptcha = ref(false)
const error = ref("")
// const understandProcess = ref(false)

const captchaCallback = (token: string) => {
  completedCaptcha.value = token ? true : false
}
const captchaErrorCallback = () => {
  error.value = "Failed to load captcha. Refresh page."
}

const onSubmitOne = async () => {
  error.value = ""
  if (!name.value || !email.value) {
    error.value = "Please fill out the form!"
    return
  }

  if (!emailRegex.test(email.value)) {
    error.value = "Not a valid email!"
    return
  }

  if (!isTermsAndConditionsAccepted.value) {
    error.value = "Accept terms and conditions to continue!"
    return
  }

  if (!completedCaptcha.value) {
    error.value = "Verify that you are a human!"
    return
  }

  const response = await fetch("/registration", {
    method: "POST",
    body: JSON.stringify({
      name: name.value,
      email: email.value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })

  const data = await response.json()

  if (response.status === 200) {
    step.value = "two"
    window.scroll({ top: 0, behavior: "smooth" })
    return
  }

  error.value = data.message
}

const onSubmitTwo = () => {
  console.log("two")
}

onMounted(() => {
  const transitionAudio = new Audio(transitionMP3)
  transitionAudio.play()
})
</script>

<template>
  <div id="bg"></div>
  <div id="bg-c"></div>
  <div
    class="relative max-w-xl p-6 mx-auto my-12 text-center text-white bg-coolGray-900 shadow-custom rounded-xl"
  >
    <template v-if="step === `one`">
      <div class="mx-auto overflow-hidden border-4 rounded-full my-7 border-coolGray-700 w-60 h-60">
        <picture>
          <source srcset="../assets/iphone.webp" type="image/webp" />
          <img src="../assets/iphone.png" alt="iphone-stack" />
        </picture>
      </div>
      <h1 class="text-4xl leading-relaxed my-7">
        Iphone 12 Pro Worth <span class="mr-2 text-5xl text-lightBlue-500">$1200</span>
        <span class="text-xl">USD</span>
      </h1>
      <form class="flex flex-col my-6" @submit.prevent="onSubmitOne">
        <p class="mb-5 text-3xl font-semibold tracking-wider uppercase">
          Enter for a Chance to Win!
        </p>
        <div class="space-y-6">
          <InputBase label="Name" v-model="name" />
          <InputBase label="Email" v-model="email" />
          <!-- <Listbox as="div" class="relative text-left" v-model="country">
            <ListboxLabel class="block font-medium">Country</ListboxLabel>
            <ListboxButton
              class="w-full px-3 py-2 mt-2 leading-normal text-left text-black bg-white border rounded-lg"
              >{{ country }}</ListboxButton
            >
            <ListboxOptions
              as="div"
              class="absolute w-full mt-1.5 text-black bg-white rounded-lg overflow-hidden focus:outline-none"
            >
              <ListboxOption
                as="div"
                v-for="COUNTRY in COUNTRIES"
                :key="COUNTRY"
                :value="COUNTRY"
                v-slot="{ selected, active }"
              >
                <div
                  class="relative py-2 pl-8 pr-4 cursor-default select-none"
                  :class="active ? `text-white bg-lightBlue-500` : `text-gray-900`"
                >
                  <span class="block truncate" :class="selected ? `font-semibold` : `font-normal`">
                    {{ COUNTRY }}
                  </span>
                  <span
                    class="absolute inset-y-0 left-0 flex items-center pl-1.5"
                    :class="active ? `text-white` : `text-lightBlue-500`"
                    v-if="selected"
                  >
                    <svg
                      class="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
              </ListboxOption>
            </ListboxOptions>
          </Listbox> -->
          <label class="flex items-center text-left">
            <input type="checkbox" class="mr-3 rounded" v-model="isTermsAndConditionsAccepted" />
            <span class="text-sm font-medium">Yes, I agree to the terms and conditions.</span>
          </label>
          <label class="flex items-center text-left">
            <input type="checkbox" class="mr-3 rounded" v-model="receiveEmail" />
            <span class="text-sm font-medium"
              >Yes, I want to receive occasional emails from rivuer.</span
            >
          </label>
        </div>

        <Recaptcha
          class="mx-auto my-8"
          :sitekey="SITE_KEY"
          @callback="captchaCallback"
          @errorCallback="captchaErrorCallback"
        />

        <p class="mb-2.5 text-sm text-red-600" v-if="error">{{ error }}</p>
        <button
          type="submit"
          class="button-primary"
          :class="!completedCaptcha && `cursor-not-allowed`"
          :disabled="!completedCaptcha"
        >
          Enter Now
        </button>
      </form>
    </template>
    <template v-if="step === `two`">
      <picture>
        <source srcset="../assets/norton.webp" type="image/webp" />
        <img src="../assets/iphone.png" alt="iphone-stack" class="mt-7 mb-13 w-60 h-60 mx-auto" />
      </picture>

      <p class="text-3xl font-semibold tracking-wider uppercase my-7 text-lightBlue-400">
        You are almost there!
      </p>
      <p class="my-6 text-lg">
        <span class="uppercase text-green-500">NOTE:</span> First 100 people who have completed all
        the tasks for the giveaway will be eligible for a chance to win an exclusive gift from
        Rivuer. The exclusive gift will be announced during the time of winner selection.
      </p>
      <p class="my-3 text-lg">
        <span class="font-bold text-[#FFD54B]">Norton Secure VPN</span> has sponsored this amazing
        giveaway.
      </p>
      <p class="my-3 text-lg">
        Install Norton Secure VPN and keep it until the winner is ANNOUNCED.
      </p>
      <!-- <form class="flex flex-col my-6" @submit.prevent="onSubmitTwo">
        <label class="flex items-center justify-center text-left">
          <input type="checkbox" class="mr-3 rounded" v-model="understandProcess" />
          <span class="text-sm font-medium">Yes, I understand the qualification process.</span>
        </label>
        <button
          type="submit"
          class="mt-8 button-primary"
          :class="!understandProcess && `cursor-not-allowed`"
          :disabled="!understandProcess"
        >
          Enter Now
        </button>
      </form> -->
      <a href="/dummy" class="mt-4 button-primary">Download Now</a>
    </template>
  </div>
</template>

<style>
#bg {
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  height: 60%;
  z-index: -20;
  background: url("https://www.apple.com/v/iphone/home/au/images/overview/why-iphone/ios14__dlqyobhcmbau_large.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 bottom;
}
#bg:after {
  height: 70%;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  content: "";
  display: block;
  background: linear-gradient(
    0deg,
    rgba(17, 24, 39, 1) 0%,
    rgba(17, 24, 39, 1) 50%,
    rgba(17, 24, 39, 0.9) 55%,
    rgba(17, 24, 39, 0.8) 60%,
    rgba(255, 255, 255, 0) 100%
  );
}

#bg-c {
  height: 55%;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  display: block;
  @apply bg-coolGray-900;
}
</style>
