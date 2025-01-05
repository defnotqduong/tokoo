<template>
  <div>
    <p v-if="reviews.length === 0" class="italic">Chưa có đánh giá nào</p>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  props: { reviews: Array }
})
</script>

<style></style>
