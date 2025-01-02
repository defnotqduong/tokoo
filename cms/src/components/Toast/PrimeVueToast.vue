<template>
  <Toast class="mt-10" position="top-right" group="headless" ref="toast">
    <template #container="{ message, closeCallback }">
      <div
        class="flex items-center gap-4 text-white p-4 rounded-md shadow-md"
        :class="{
          'bg-primaryColor ': message.severity === 'success',
          'bg-warningColor': message.severity === 'warning',
          'bg-dangerColor': message.severity === 'error'
        }"
        @click="closeCallback"
      >
        <svg v-if="message.severity === 'success'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z"
            fill="currentColor"
          />
        </svg>
        <svg v-if="message.severity === 'warning'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-1.5-5.009c0-.867.659-1.491 1.491-1.491.85 0 1.509.624 1.509 1.491 0 .867-.659 1.509-1.509 1.509-.832 0-1.491-.642-1.491-1.509zM11.172 6a.5.5 0 0 0-.499.522l.306 7a.5.5 0 0 0 .5.478h1.043a.5.5 0 0 0 .5-.478l.305-7a.5.5 0 0 0-.5-.522h-1.655z"
            fill="currentColor"
          />
        </svg>
        <svg v-if="message.severity === 'error'" xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="20" width="20" viewBox="0 0 51.976 51.976">
          <g>
            <path
              d="M44.373,7.603c-10.137-10.137-26.632-10.138-36.77,0c-10.138,10.138-10.137,26.632,0,36.77s26.632,10.138,36.77,0   C54.51,34.235,54.51,17.74,44.373,7.603z M36.241,36.241c-0.781,0.781-2.047,0.781-2.828,0l-7.425-7.425l-7.778,7.778   c-0.781,0.781-2.047,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l7.778-7.778l-7.425-7.425c-0.781-0.781-0.781-2.048,0-2.828   c0.781-0.781,2.047-0.781,2.828,0l7.425,7.425l7.071-7.071c0.781-0.781,2.047-0.781,2.828,0c0.781,0.781,0.781,2.047,0,2.828   l-7.071,7.071l7.425,7.425C37.022,34.194,37.022,35.46,36.241,36.241z"
            />
          </g>
        </svg>
        <span class="text-base">{{ message.summary }}</span>
        <button class="ml-auto">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </template>
  </Toast>
</template>

<script>
import { defineComponent, ref, watch, nextTick } from 'vue'
import { useToastStore } from '@/stores'

import Toast from 'primevue/toast'
export default defineComponent({
  components: { Toast },
  setup() {
    const toastStore = useToastStore()

    const toast = ref(null)

    watch(
      () => toastStore.toast.isShow,
      async newVal => {
        if (newVal) {
          await nextTick()
          toast.value.add({
            severity: toastStore.toast.type,
            summary: toastStore.toast.message,
            // detail: toastStore.toast.message,
            life: toastStore.toast.timeout
          })
        }
      }
    )

    return {
      toast,
      toastStore
    }
  }
})
</script>

<style></style>
