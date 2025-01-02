<template>
  <div class="category-card" :class="category?.color">
    <div class="flex flex-col items-center">
      <figure class="w-20 h-20">
        <img src="@/assets/images/cat-15.png" class="w-full h-full object-cover object-center" alt="category img" />
      </figure>
      <h6 class="mt-4 text-headingColor text-lg font-bold line-clamp-1">{{ category?.name }}</h6>
      <span class="text-bodyColor text-sm">{{ category?.quantity }} items</span>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  props: { category: Object }
})
</script>

<style scoped>
.category-card {
  min-width: 140px;
  margin: 0 12px;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 1s cubic-bezier(0, 0, 0.05, 1);
}

.category-card img {
  transition: all 1.5s cubic-bezier(0, 0, 0.05, 1);
}

.category-card:hover {
  @apply border-mintGreenColor;
}

.category-card:hover img {
  scale: 1.1;
}

.category-card:hover h6 {
  transition: all 300ms;
  @apply text-primaryColor;
}
</style>
