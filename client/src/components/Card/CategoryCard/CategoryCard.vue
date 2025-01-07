<template>
  <router-link :to="{ name: 'products', query: { categoryId: category.id } }">
    <div class="category-card" :class="category?.color">
      <div class="flex flex-col items-center">
        <h6 class="mt-4 text-headingColor text-lg font-bold text-center line-clamp-2">{{ category?.name }}</h6>
        <span class="text-bodyColor text-sm">{{ category?.quantity }} sản phẩm</span>
      </div>
    </div></router-link
  >
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  props: { category: Object }
})
</script>

<style scoped>
.category-card {
  height: 120px;
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
