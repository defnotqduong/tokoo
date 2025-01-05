<template>
  <div>{{ store }}</div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  props: { store: String }
})
</script>

<style></style>
