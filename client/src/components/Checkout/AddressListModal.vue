<template>
  <div>
    <input type="checkbox" id="my_modal_add_address" class="modal-toggle" v-model="isModalOpen" />
    <div class="modal" role="dialog">
      <div class="modal-box max-w-[800px] bg-white py-6 px-8">
        <div>
          <h4 class="text-xl font-bold">Địa chỉ của tôi</h4>
        </div>
        <div v-for="(address, i) in addressList" :key="i" class="py-6 flex items-center justify-between gap-4 border-b border-borderColor">
          <div class="flex items-center gap-4">
            <div class="radio-input">
              <button
                @click="changeAddLocal(address)"
                class="w-4 h-4 flex items-center justify-center border rounded-full"
                :class="addLocal && addLocal.id === address.id ? 'border-primaryColor' : 'border-bodyColor'"
              >
                <span class="w-3/4 h-3/4 rounded-full" :class="addLocal && addLocal.id === address.id ? 'bg-primaryColor' : 'bg-transparent'"></span>
              </button>
            </div>
            <div>
              <span class="font-bold">{{ selectAddress?.nameCustomer + ' ' + selectAddress?.phoneNumber }}</span>
              <div>
                {{ selectAddress?.specificAddress }}
                <div>{{ selectAddress?.fullAddress }}</div>
              </div>
            </div>
          </div>
          <div v-if="address?.defaultAddress" class="px-3 py-1 border border-dangerColor text-sm text-dangerColor rounded">Mặc Định</div>
        </div>
        <div class="mt-6 flex items-center justify-end gap-4">
          <button
            @click.prevent="close"
            ref="cancelButton"
            class="px-4 h-10 bg-dangerColor text-whiteColor transition-all duration-300 rounded-lg hover:bg-darkDangerColor"
          >
            Hủy
          </button>
          <button @click.prevent="confirm" class="px-4 h-10 bg-primaryColor text-whiteColor transition-all duration-300 rounded-lg hover:bg-darkPrimaryColor">
            Xác nhận
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  props: { isModalOpen: Boolean, selectAddress: Object, addressList: Array, changeSelectAddress: Function, closeModal: Function },
  setup(props) {
    const addLocal = ref({ ...props.selectAddress })

    const close = () => {
      props.closeModal()
    }

    const changeAddLocal = add => {
      addLocal.value = add
    }

    const confirm = () => {
      if (addLocal.value) {
        props.changeSelectAddress(addLocal.value)
      }

      close()
    }

    return { addLocal, close, changeAddLocal, confirm }
  }
})
</script>

<style scoped></style>
