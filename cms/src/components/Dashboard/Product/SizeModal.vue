<template>
  <div>
    <input type="checkbox" id="my_modal_add_address" class="modal-toggle" v-model="isSizeModalOpen" />
    <div class="modal" role="dialog">
      <div class="modal-box max-w-[800px] bg-white py-6 px-8">
        <div>
          <h4 class="text-xl font-bold">{{ !isEditting ? 'Thêm Size' : 'Chỉnh sửa Size' }}</h4>
        </div>
        <form>
          <template v-if="!isEditting">
            <div>
              <div class="grid grid-cols-12 gap-2">
                <div class="col-span-4">
                  <div class="input-group">
                    <label for="name" class="title">Size <span class="text-dangerColor">*</span></label>
                    <input type="text" name="name" id="name" placeholder="Size" v-model="size" @input="validateSize" @blur="validateSize" />
                  </div>
                  <div v-if="errors?.size && errors?.size.length > 0">
                    <p v-for="(err, index) in errors?.size" :key="index" class="mt-2 text-sm text-red-500">{{ err }}</p>
                  </div>
                </div>
                <div class="col-span-4">
                  <div class="input-group">
                    <label for="name" class="title">Giá <span class="text-dangerColor">*</span> </label>
                    <input type="text" name="name" id="name" placeholder="Giá" v-model="price" @input="validatePrice" @blur="validatePrice" />
                  </div>
                  <div v-if="errors?.price && errors?.price.length > 0">
                    <p v-for="(err, index) in errors?.price" :key="index" class="mt-2 text-sm text-red-500">{{ err }}</p>
                  </div>
                </div>
                <div class="col-span-4">
                  <div class="input-group">
                    <label for="name" class="title">Số lượng <span class="text-dangerColor">*</span></label>
                    <input type="text" name="name" id="name" placeholder="Số lượng" v-model="stock" @input="validateStock" @blur="validateStock" />
                  </div>
                  <div v-if="errors?.stock && errors?.stock.length > 0">
                    <p v-for="(err, index) in errors?.stock" :key="index" class="mt-2 text-sm text-red-500">{{ err }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-4">
              <button
                :disabled="isSubmitting"
                @click.prevent="add"
                :class="[
                  'px-4 h-10 bg-primaryColor text-whiteColor transition-colors duration-300 rounded-lg hover:bg-darkPrimaryColor',
                  {
                    'cursor-not-allowed': isSubmitting
                  }
                ]"
              >
                Tạo
              </button>
            </div>
          </template>
          <template v-else>
            <div>
              <div class="grid grid-cols-12 gap-2">
                <div class="col-span-4">
                  <div class="input-group">
                    <label for="name" class="title">Size <span class="text-dangerColor">*</span></label>
                    <input type="text" name="name" id="name" placeholder="Size" v-model="selectEditSize.size" @input="validateSize" @blur="validateSize" />
                  </div>
                  <div v-if="errors?.size && errors?.size.length > 0">
                    <p v-for="(err, index) in errors?.size" :key="index" class="mt-2 text-sm text-red-500">{{ err }}</p>
                  </div>
                </div>
                <div class="col-span-4">
                  <div class="input-group">
                    <label for="name" class="title">Giá <span class="text-dangerColor">*</span> </label>
                    <input type="text" name="name" id="name" placeholder="Giá" v-model="selectEditSize.price" @input="validatePrice" @blur="validatePrice" />
                  </div>
                  <div v-if="errors?.price && errors?.price.length > 0">
                    <p v-for="(err, index) in errors?.price" :key="index" class="mt-2 text-sm text-red-500">{{ err }}</p>
                  </div>
                </div>
                <div class="col-span-4">
                  <div class="input-group">
                    <label for="name" class="title">Số lượng <span class="text-dangerColor">*</span></label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Số lượng"
                      v-model="selectEditSize.stock"
                      @input="validateStock"
                      @blur="validateStock"
                    />
                  </div>
                  <div v-if="errors?.stock && errors?.stock.length > 0">
                    <p v-for="(err, index) in errors?.stock" :key="index" class="mt-2 text-sm text-red-500">{{ err }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-4 flex items-center justify-start gap-4">
              <button
                :disabled="isSubmitting"
                @click.prevent="cancel"
                :class="[
                  'px-4 h-10 bg-dangerColor text-whiteColor transition-colors duration-300 rounded-lg hover:bg-darkDangerColor',
                  {
                    'cursor-not-allowed': isSubmitting
                  }
                ]"
              >
                Hủy
              </button>
              <button
                :disabled="isSubmitting"
                @click.prevent="edit"
                :class="[
                  'px-4 h-10 bg-primaryColor text-whiteColor transition-colors duration-300 rounded-lg hover:bg-darkPrimaryColor',
                  {
                    'cursor-not-allowed': isSubmitting
                  }
                ]"
              >
                Sửa
              </button>
            </div>
          </template>
          <p v-if="sizes.length === 0" class="pt-10 pb-10 italic">Chưa có size nào</p>
          <div v-else class="pt-10">
            <h5 class="text-lg font-bold">Danh sách size</h5>
            <table class="table">
              <thead>
                <tr>
                  <th class="text-center">ID</th>
                  <th>Size</th>
                  <th>Giá</th>
                  <th>Số lượng</th>
                  <th class="text-end">
                    <div class="mr-2">Thao tác</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(size, index) in sizes" :key="index">
                  <td class="text-center">{{ size.id }}</td>
                  <td>{{ size.size }}</td>
                  <td>
                    {{ formatPrice(size.price) }}
                  </td>
                  <td>
                    {{ size.stock }}
                  </td>
                  <td>
                    <div class="flex items-center justify-end gap-2">
                      <button
                        @click.prevent="changeSelectSize(size.id)"
                        class="px-3 py-2 rounded-md bg-primaryOpacityColor text-primaryColor transition-all duration-300 hover:bg-primaryColor hover:text-whiteColor"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256" width="16" height="16">
                          <path
                            d="M229.65137,58.34326l-32-32a8.00034,8.00034,0,0,0-11.31446,0l-96,96A8.00035,8.00035,0,0,0,87.99414,128v32a8.00039,8.00039,0,0,0,8,8h32a8.00076,8.00076,0,0,0,5.65723-2.34326l96-96A8,8,0,0,0,229.65137,58.34326Zm-29.657,18.34326L179.30811,56l12.686-12.68652L212.68066,64ZM223.99414,120v88a16.01833,16.01833,0,0,1-16,16h-160a16.01833,16.01833,0,0,1-16-16V48a16.01833,16.01833,0,0,1,16-16h88a8,8,0,0,1,0,16h-88V208h160V120a8,8,0,0,1,16,0Z"
                          />
                        </svg>
                      </button>
                      <button
                        @click.prevent="deleted(size.id)"
                        class="px-3 py-2 rounded-md bg-dangerColor text-whiteColor transition-all duration-300 hover:bg-darkDangerColor"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="-3 0 32 32">
                          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g transform="translate(-261.000000, -205.000000)" fill="currentColor">
                              <path
                                d="M268,220 C268,219.448 268.448,219 269,219 C269.552,219 270,219.448 270,220 L270,232 C270,232.553 269.552,233 269,233 C268.448,233 268,232.553 268,232 L268,220 L268,220 Z M273,220 C273,219.448 273.448,219 274,219 C274.552,219 275,219.448 275,220 L275,232 C275,232.553 274.552,233 274,233 C273.448,233 273,232.553 273,232 L273,220 L273,220 Z M278,220 C278,219.448 278.448,219 279,219 C279.552,219 280,219.448 280,220 L280,232 C280,232.553 279.552,233 279,233 C278.448,233 278,232.553 278,232 L278,220 L278,220 Z M263,233 C263,235.209 264.791,237 267,237 L281,237 C283.209,237 285,235.209 285,233 L285,217 L263,217 L263,233 L263,233 Z M277,209 L271,209 L271,208 C271,207.447 271.448,207 272,207 L276,207 C276.552,207 277,207.447 277,208 L277,209 L277,209 Z M285,209 L279,209 L279,207 C279,205.896 278.104,205 277,205 L271,205 C269.896,205 269,205.896 269,207 L269,209 L263,209 C261.896,209 261,209.896 261,211 L261,213 C261,214.104 261.895,214.999 262.999,215 L285.002,215 C286.105,214.999 287,214.104 287,213 L287,211 C287,209.896 286.104,209 285,209 L285,209 Z"
                              ></path>
                            </g>
                          </g>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
        <div class="mt-6 flex items-center justify-end gap-4">
          <button @click.prevent="close" class="px-4 h-10 rounded-md cursor-pointer transition-all duration-300 hover:bg-grayLightColor">Trở lại</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, ref, toRefs } from 'vue'
import { addSize, editSize, deleteSize } from '@/webServices/productService'
import { useUserStore, useToastStore } from '@/stores'
import { formatPrice } from '@/utils'
export default defineComponent({
  props: {
    isSizeModalOpen: Boolean,
    variantId: Number,
    sizes: Array,
    price: Number,
    fetchData: Function,
    closeSizeModal: Function
  },
  setup(props) {
    const userStore = useUserStore()
    const toastStore = useToastStore()
    const isSubmitting = ref(false)

    const size = reactive({
      size: '',
      price: JSON.parse(JSON.stringify(props.price)),
      stock: null
    })

    const selectEditSize = ref({
      id: null,
      size: '',
      price: null,
      stock: null
    })

    const isEditting = ref(false)

    const errors = ref({
      size: [],
      price: [],
      stock: []
    })

    const isErrorSize = ref(false)
    const isErrorPrice = ref(false)
    const isErrorStock = ref(false)

    const cancel = () => {
      isEditting.value = false
      clearError()
    }

    const clearSize = () => {
      size.size = ''
      size.price = JSON.parse(JSON.stringify(props.price))
      size.stock = null
    }

    const clearError = () => {
      isErrorSize.value = false
      isErrorPrice.value = false
      isErrorStock.value = false
      errors.value.size = []
      errors.value.price = []
      errors.value.stock = []
    }

    const close = () => {
      clearSize()
      clearError()
      props.closeSizeModal()
    }

    const validateSize = () => {
      errors.value.size = []
      const targetSize = isEditting.value ? selectEditSize.value.size : size.size

      if (!targetSize) {
        errors.value.size.push('Vui lòng nhập size')
        isErrorSize.value = true
      } else {
        isErrorSize.value = false
      }
    }

    const validatePrice = () => {
      errors.value.price = []
      const targetSize = isEditting.value ? selectEditSize.value.price : size.price

      if (!targetSize) {
        errors.value.price.push('Vui lòng nhập giá sản phẩm')
        isErrorPrice.value = true
      } else if (!/^[0-9]+$/.test(targetSize)) {
        errors.value.price.push('Giá sản phẩm chỉ được phép chứa chữ số')
        isErrorPrice.value = true
      } else {
        isErrorPrice.value = false
      }
    }

    const validateStock = () => {
      errors.value.stock = []
      const targetSize = isEditting.value ? selectEditSize.value.stock : size.stock

      if (!targetSize) {
        errors.value.stock.push('Vui lòng nhập số lượng')
        isErrorStock.value = true
      } else if (!/^[0-9]+$/.test(targetSize)) {
        errors.value.stock.push('Số lượng chỉ được phép chứa chữ số')
        isErrorStock.value = true
      } else {
        isErrorStock.value = false
      }
    }

    const changeSelectSize = id => {
      isEditting.value = true
      clearError()

      const selected = props.sizes.find(size => size.id === id)
      selectEditSize.value = { ...selected }
    }

    const add = async () => {
      isSubmitting.value = true
      validateSize()
      validatePrice()
      validateStock()

      if (isErrorSize.value || isErrorPrice.value || isErrorStock.value) {
        isSubmitting.value = false
        return
      }

      const res = await addSize({ variantId: props.variantId, size: size.size, price: size.price, stock: size.stock })

      if (res.success) {
        toastStore.showToast({
          type: 'success',
          message: 'Thêm size thành công',
          timeout: 3000
        })
        props.fetchData(props.variantId)
      }
    }

    const edit = async () => {
      isSubmitting.value = true
      validateSize()
      validatePrice()
      validateStock()

      if (isErrorSize.value || isErrorPrice.value || isErrorStock.value) {
        isSubmitting.value = false
        return
      }

      const res = await editSize(selectEditSize.value.id, {
        size: selectEditSize.value.size,
        price: selectEditSize.value.price,
        stock: selectEditSize.value.stock
      })

      console.log(res)
      if (res.success) {
        toastStore.showToast({
          type: 'success',
          message: 'Chỉnh sửa size thành công',
          timeout: 3000
        })
        props.fetchData(props.variantId)
      }

      isSubmitting.value = false
      cancel()
    }

    const deleted = async id => {
      isSubmitting.value = true
      const res = await deleteSize(id)

      if (res.success) {
        toastStore.showToast({
          type: 'success',
          message: 'Xóa size thành công',
          timeout: 3000
        })
        props.fetchData(props.variantId)
      }
    }

    return {
      isSubmitting,
      errors,
      isErrorSize,
      isErrorPrice,
      isErrorStock,
      isEditting,
      selectEditSize,
      ...toRefs(size),
      formatPrice,
      validateSize,
      validatePrice,
      validateStock,
      changeSelectSize,
      cancel,
      close,
      add,
      edit,
      deleted
    }
  }
})
</script>

<style scoped>
.form {
  @apply w-full;
}

.input-group .title {
  @apply text-headingColor block mb-2 font-bold;
}

.input-group {
  display: block;
  margin-top: 16px;
  font-size: 0.875rem;
  line-height: 1.25rem;
  position: relative;
}

.input-group input,
.input-group textarea,
.input-group .select {
  width: 100%;
  border-radius: 0.375rem;
  height: 40px;
  border: 1px solid;
  outline: 0;
  padding: 0.5rem 1rem 0.5rem 1rem;
  @apply border-borderColor text-headingColor;
}

select {
  min-height: auto;
}

.input-group input:focus,
.input-group textarea:focus,
.input-group .select:focus {
  @apply border-headingOpacityColor;
}

.table thead {
  @apply border-b border-borderColor;
}
.table th {
  @apply text-base text-headingColor font-semibold;
}

.table thead tr {
  border-bottom: none;
}

.table tbody tr {
  @apply border-b border-borderColor;
}
</style>
