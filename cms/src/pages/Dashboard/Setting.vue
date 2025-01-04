<template>
  <div>Cài đặt</div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {},
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0 })
    }
  },
  created() {
    this.scrollToTop()
  }
})
</script>

<style></style>
