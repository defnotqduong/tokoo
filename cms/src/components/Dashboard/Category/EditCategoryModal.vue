<template>
  <div>
    <input type="checkbox" id="my_modal_add_address" class="modal-toggle" v-model="isEditModalOpen" />
    <div class="modal" role="dialog">
      <div class="modal-box max-w-[800px] bg-white py-6 px-8">
        <div>
          <h4 class="text-xl font-bold">Cập nhật danh mục</h4>
        </div>
        <form class="form">
          <div class="grid grid-cols-12 gap-4">
            <div class="col-span-12">
              <div class="input-group">
                <label for="name" class="title">Tên danh mục <span class="text-dangerColor">*</span></label>
                <input type="text" name="name" id="name" placeholder="Tên danh mục" v-model="selectCategory.name" @input="validateName" @blur="validateName" />
              </div>
              <div v-if="errors?.name && errors?.name.length > 0">
                <p v-for="(err, index) in errors?.name" :key="index" class="mt-2 text-sm text-red-500">{{ err }}</p>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-12 gap-4">
            <div class="col-span-12">
              <div class="input-group">
                <label for="description" class="title">Mô tả</label>
                <textarea
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Mô tả"
                  v-model="selectCategory.description"
                  class="resize-none min-h-20"
                ></textarea>
              </div>
            </div>
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
              :disabled="isSubmitting"
              @click.prevent="edit"
              class="px-4 h-10 bg-primaryColor text-whiteColor transition-all duration-300 rounded-lg hover:bg-darkPrimaryColor"
            >
              Cập nhật
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, toRefs } from 'vue'
import { useUserStore, useToastStore } from '@/stores'

import { editCategory } from '@/webServices/categoryService'
export default defineComponent({
  props: {
    isEditModalOpen: Boolean,
    selectCategory: Object,
    fetchData: Function,
    closeEditModal: Function
  },
  setup(props) {
    const userStore = useUserStore()
    const toastStore = useToastStore()

    const isSubmitting = ref(false)

    const isErrorName = ref(false)

    const errors = ref({
      name: [],
      description: []
    })

    const clearError = () => {
      isErrorName.value = false
      errors.value.name = []
      errors.value.description = []
    }

    const validateName = () => {
      errors.value.name = []

      if (!props.selectCategory.name) {
        errors.value.name.push('Vui lòng nhập tên danh mục')
        isErrorName.value = true
      } else {
        isErrorName.value = false
      }
    }

    const close = () => {
      clearError()
      props.closeEditModal()
    }

    const edit = async () => {
      isSubmitting.value = true

      validateName()

      if (isErrorName.value) {
        isSubmitting.value = false
        return
      }

      const res = await editCategory(props.selectCategory.id, {
        name: props.selectCategory.name,
        description: props.selectCategory.description
      })

      if (!res.success) {
        toastStore.showToastModal({
          type: 'error',
          message: 'Danh mục đã tồn tại trong hệ thống',
          timeout: 3000
        })
        isSubmitting.value = false
        return
      }

      if (res.success) {
        toastStore.showToastModal({
          type: 'success',
          message: 'Chỉnh sửa danh mục thành công',
          timeout: 3000
        })
        props.fetchData()
      }
      close()
      isSubmitting.value = false
    }

    return {
      isSubmitting,
      errors,
      validateName,
      close,
      edit
    }
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
</style>
