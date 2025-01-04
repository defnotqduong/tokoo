<template>
  <div class="flex items-center justify-between">
    <div>Hiển thị {{ meta.totalElements }} kết quả</div>
    <ul class="pagination">
      <li :class="{ disabled: meta.first }">
        <button :disabled="meta.first" @click="changePage(meta.number - 1 - 1)">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="w-4 h-4">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L9.41421 12L15.7071 18.2929C16.0976 18.6834 16.0976 19.3166 15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C7.10536 12.5196 7 12.2652 7 12C7 11.7348 7.10536 11.4804 7.29289 11.2929L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </li>
      <li v-if="meta.number >= 3">
        <button @click="changePage(0)">1</button>
      </li>
      <li class="disabled" v-if="meta.number >= 4">
        <button disabled>...</button>
      </li>
      <li v-if="meta.number > 1">
        <button @click="changePage(meta.number - 1 - 1)">{{ meta.number - 1 }}</button>
      </li>
      <li class="active">
        <button disabled>{{ meta.number }}</button>
      </li>
      <li v-if="!meta.last && meta.number + 1 !== meta.totalPages">
        <button @click="changePage(meta.number + 1 - 1)">{{ meta.number + 1 }}</button>
      </li>
      <li class="disabled" v-if="meta.totalPages - meta.number >= 3"><button disabled>...</button></li>
      <li v-if="!meta.last">
        <button @click="changePage(meta.totalPages - 1)">{{ meta.totalPages }}</button>
      </li>
      <li :class="{ disabled: meta.last }">
        <button :disabled="meta.last" @click="changePage(meta.number - 1 + 1)">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="w-4 h-4">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.29289 4.29289C8.68342 3.90237 9.31658 3.90237 9.70711 4.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L9.70711 19.7071C9.31658 20.0976 8.68342 20.0976 8.29289 19.7071C7.90237 19.3166 7.90237 18.6834 8.29289 18.2929L14.5858 12L8.29289 5.70711C7.90237 5.31658 7.90237 4.68342 8.29289 4.29289Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  props: {
    meta: Object,
    changePage: Function
  },

  setup(props) {}
})
</script>

<style scoped>
.pagination {
  @apply text-headingColor flex items-center justify-center gap-1 sm:gap-2;
}

.pagination li {
}

.pagination li button {
  transition: all 0.4s;
  @apply w-6 h-6 md:w-9 md:h-9 font-semibold bg-grayLightColor rounded-md flex items-center justify-center shadow-shadow01;
}

.pagination .disabled button {
  @apply cursor-not-allowed;
}

.pagination .active button {
  @apply bg-primaryColor text-whiteColor;
}

.pagination li:hover:not(.disabled) button {
  @apply bg-primaryColor text-whiteColor;
}
</style>
