<template>
  <div>
    <input type="checkbox" id="my_modal_add_address" class="modal-toggle" v-model="isModalOpen" />
    <div class="modal" role="dialog">
      <div class="modal-box max-w-[600px] bg-white py-6 px-8">
        <div>
          <h4 class="text-xl font-bold">Đánh giá</h4>
        </div>
        <form class="form">
          <div class="mb-2 flex items-center justify-center">
            <div class="rating">
              <input value="5" v-model="rating" name="rating" id="star5" type="radio" />
              <label for="star5"></label>
              <input value="4" v-model="rating" name="rating" id="star4" type="radio" />
              <label for="star4"></label>
              <input value="3" v-model="rating" name="rating" id="star3" type="radio" />
              <label for="star3"></label>
              <input value="2" v-model="rating" name="rating" id="star2" type="radio" />
              <label for="star2"></label>
              <input value="1" v-model="rating" name="rating" id="star1" type="radio" />
              <label for="star1"></label>
            </div>
          </div>
          <div class="input-group">
            <textarea
              v-model="content"
              class="w-full min-h-28 p-2 text-headingColor border border-borderColor outline-none rounded-md resize-none focus:border-headingColor"
              placeholder="Viết nhận xét của bạn"
            ></textarea>
          </div>

          <div class="mt-6 flex items-center justify-end gap-4">
            <button
              @click.prevent="close"
              ref="cancelButton"
              class="px-4 h-10 bg-dangerColor text-whiteColor transition-all duration-300 rounded-lg hover:bg-darkDangerColor"
            >
              Hủy
            </button>
            <button
              @click.prevent="createReview"
              class="px-4 h-10 bg-primaryColor text-whiteColor transition-all duration-300 rounded-lg hover:bg-darkPrimaryColor"
            >
              Thêm
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, reactive, ref, toRefs, computed, onUnmounted } from 'vue'
import { useUserStore, useToastStore } from '@/stores'

export default defineComponent({
  props: {
    isModalOpen: Boolean,
    closeModal: Function
  },
  setup(props) {
    const close = () => {
      props.closeModal()
    }
    return { close }
  }
})
</script>

<style scoped>
.form {
}

.input-group .title {
  @apply text-bodyColor block mb-2 font-semibold;
}

.input-group {
  display: block;
  margin-top: 16px;
  font-size: 0.875rem;
  line-height: 1.25rem;
  position: relative;
}

.input-group input,
.input-group textarea {
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid;
  outline: 0;
  padding: 0.5rem 1rem 0.5rem 1rem;
  @apply border-borderColor text-headingColor;
}

.input-group input:focus,
.input-group textarea:focus {
  @apply border-headingOpacityColor;
}

.rating {
  display: inline-block;
}

.rating input {
  display: none;
}

.rating label {
  float: right;
  cursor: pointer;
  color: #ccc;
  transition: color 0.3s;
}

.rating label:before,
.rating .star:before {
  content: '\2605';
  font-size: 40px;
}

.rating .star.active {
  @apply text-warningColor;
}

.rating input:checked ~ label,
.rating label:hover,
.rating label:hover ~ label {
  transition: color 0.3s;
  @apply text-warningColor;
}
</style>
