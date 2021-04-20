<script setup lang="ts">
import { defineEmit, defineProps } from "vue"
import { onMounted, ref } from "vue"
import { useScriptTag } from "@vueuse/core"

const props = defineProps({
  sitekey: {
    type: String,
    required: true,
  },
})
const emit = defineEmit(["callback", "errorCallback"])

const element = ref<HTMLElement>()

onMounted(async () => {
  try {
    window.renderCaptcha = () => {
      if (!element.value) {
        emit("errorCallback")
        return
      }
      window.grecaptcha.render(element.value, {
        sitekey: props.sitekey,
        callback: (token: string) => {
          emit("callback", token)
        },
        "error-callback": () => {
          emit("errorCallback")
        },
      })
    }

    if (window.grecaptcha) {
      window.renderCaptcha()
      return
    }

    const {
      load,
    } = useScriptTag(
      "https://www.google.com/recaptcha/api.js?onload=renderCaptcha&render=explicit",
      (_el) => {},
      { async: true, defer: true, manual: true },
    )
    await load()
  } catch (error) {
    emit("errorCallback")
  }
})
</script>

<template>
  <div ref="element" />
</template>
