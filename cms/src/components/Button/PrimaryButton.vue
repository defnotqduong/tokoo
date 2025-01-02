<template>
  <button
    @click.prevent="func"
    :disabled="loading"
    class="h-10 bg-greenColor text-whiteColor font-semibold py-2 px-4 rounded-lg hover:bg-darkPrimaryColor transition-all duration-300"
    :class="{ 'cursor-no-drop': loading }"
  >
    {{ content }}
  </button>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    content: String,
    func: Function,
    loading: Boolean
  }
})
</script>

<style></style>
