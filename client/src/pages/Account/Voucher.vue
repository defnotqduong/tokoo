<template>
  <div class="p-4 bg-whiteColor rounded-md shadow-shadow01">
    <div class="mb-4 pb-4 border-b-[1px] border-borderColor flex items-center justify-between">
      <h4 class="text-xl text-headingColor font-extrabold">Voucher</h4>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
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
