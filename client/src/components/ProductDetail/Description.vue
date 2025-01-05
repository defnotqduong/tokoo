<template>
  <div>
    <p class="text-headingColor prose w-full max-w-none" v-html="description"></p>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  props: { description: String }
})
</script>

<style></style>
