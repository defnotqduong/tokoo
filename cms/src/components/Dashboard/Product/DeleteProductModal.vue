<template>
  <div>
    <input type="checkbox" id="my_modal_add_address" class="modal-toggle" v-model="isDeleteModalOpen" />
    <div class="modal" role="dialog">
      <div class="modal-box max-w-[800px] bg-white py-6 px-8">
        <span
          >Bạn muốn xóa sản phẩm <strong class="text-bold">{{ selectProduct.productName }}</strong> ?</span
        >
        <div class="mt-6 flex items-center justify-end gap-4">
          <button @click.prevent="close" ref="cancelButton" class="px-4 h-10 rounded-md cursor-pointer transition-all duration-300 hover:bg-grayLightColor">
            Trở lại
          </button>
          <button
            :disabled="isSubmitting"
            @click.prevent="deleted"
            class="px-4 h-10 bg-dangerColor text-whiteColor rounded-md cursor-pointer transition-all duration-300 hover:bg-darkDangerColor"
          >
            Xóa
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useUserStore, useToastStore } from '@/stores'
import { deleteProduct } from '@/webServices/productService'
export default defineComponent({
  props: {
    isDeleteModalOpen: Boolean,
    selectProduct: Object,
    fetchData: Function,
    length: Number,
    changePage: Function,
    options: Object,
    closeDeleteModal: Function
  },
  setup(props) {
    const userStore = useUserStore()
    const toastStore = useToastStore()

    const close = () => {
      props.closeDeleteModal()
    }

    const isSubmitting = ref(false)

    const deleted = async () => {
      isSubmitting.value = true

      const res = await deleteProduct(props.selectProduct.productId)

      if (res.success) {
        toastStore.showToastModal({
          type: 'success',
          message: 'Xóa danh mục thành công',
          timeout: 3000
        })

        if (props.length === 1) {
          props.changePage(props.options.pageNumber - 1)
        }

        props.fetchData()
      }
      close()
      isSubmitting.value = false
    }

    return {
      isSubmitting,
      close,
      deleted
    }
  }
})
</script>

<style></style>
