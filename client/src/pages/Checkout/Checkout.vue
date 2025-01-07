<template>
  <div class="mt-4">
    <div v-if="loading" class="min-h-[75vh] flex items-center justify-center text-primaryColor">
      <span class="loading loading-spinner loading-md"></span>
    </div>
    <template v-else>
      <div class="mb-8 border-b border-borderColor">
        <div class="container mx-auto px-4">
          <div class="pb-4 breadcrumbs text-sm text-headingColor">
            <ul>
              <li class="hover:text-primaryColor transition-all duration-300"><router-link :to="{ name: 'home' }">Trang chủ</router-link></li>
              <li class="opacity-60">Thanh toán</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="container px-4 mx-auto">
        <h1 class="mb-6 text-2xl sm:text-3xl xl:text-4xl text-headingColor font-black">Thanh toán</h1>
        <div>
          <h4 class="mb-2 sm:text-lg md:text-xl text-primaryColor font-semibold flex items-center justify-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 64 64">
              <path
                fill="currentColor"
                d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24  C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24  C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
              />
            </svg>
            Địa chỉ nhận hàng <button v-if="!selectAddress" class="ml-2 text-blueColor" @click="openModal">Thêm địa chỉ nhận hàng</button>
          </h4>
          <div v-if="selectAddress" class="flex items-start justify-start gap-4">
            <div>
              <span class="font-bold">{{ selectAddress?.nameCustomer + ' ' + selectAddress?.phoneNumber }}</span>
              <div>
                {{ selectAddress?.specificAddress }}
                <div>{{ selectAddress?.fullAddress }}</div>
              </div>
            </div>
            <div v-if="selectAddress?.defaultAddress" class="px-3 py-1 border border-dangerColor text-sm text-dangerColor rounded">Mặc Định</div>
            <button class="text-blueColor" @click="openModalAddressList">Thay đổi</button>
          </div>
        </div>
        <div class="mt-6">
          <h4 class="mb-4 sm:text-lg md:text-xl text-primaryColor font-semibold flex items-center justify-start gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            Sản phẩm
          </h4>
          <div v-for="(item, i) in orderList" :key="i" class="grid grid-cols-12 gap-2 py-6 border-b border-borderColor">
            <div class="col-span-6">
              <div class="flex items-center justify-start gap-3">
                <img :src="item?.urlImage" class="w-20 object-cover object-center rounded-lg" alt="product image" />
                <div>
                  <span class="text-headingColor font-bold line-clamp-1">{{ item?.productDTO?.productName }}</span>
                  <span class="text-bodyColor">{{ item?.variantDTO?.attribute }} {{ item?.size }}</span>
                </div>
              </div>
            </div>
            <div class="col-span-2 pt-4">Đơn giá: {{ formatPrice(item?.productPrice) }}</div>
            <div class="col-span-2 pt-4">Số lượng: {{ item?.quantity }}</div>
            <div class="col-span-2 pt-4">Thành tiền: {{ formatPrice(item?.productPrice * item?.quantity) }}</div>
          </div>
        </div>
        <div class="mt-6">
          <div class="flex items-center justify-between">
            <h4 class="mb-4 sm:text-lg md:text-xl text-primaryColor font-semibold flex items-center justify-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" version="1.1">
                <g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g fill="currentColor" fill-rule="nonzero">
                    <path
                      d="M21.9883291,10.9947074 L21.9888849,16.275793 C21.9888849,17.7383249 20.8471803,18.9341973 19.4064072,19.0207742 L19.2388849,19.025793 L4.76104885,19.025793 C3.29851702,19.025793 2.10264457,17.8840884 2.01606765,16.4433154 L2.01104885,16.275793 L2.01032912,10.9947074 L21.9883291,10.9947074 Z M18.2529045,14.5 L15.7529045,14.5 L15.6511339,14.5068466 C15.2850584,14.556509 15.0029045,14.8703042 15.0029045,15.25 C15.0029045,15.6296958 15.2850584,15.943491 15.6511339,15.9931534 L15.7529045,16 L18.2529045,16 L18.3546751,15.9931534 C18.7207506,15.943491 19.0029045,15.6296958 19.0029045,15.25 C19.0029045,14.8703042 18.7207506,14.556509 18.3546751,14.5068466 L18.2529045,14.5 Z M19.2388849,5.0207074 C20.7014167,5.0207074 21.8972891,6.162412 21.9838661,7.60318507 L21.9888849,7.7707074 L21.9883291,9.4947074 L2.01032912,9.4947074 L2.01104885,7.7707074 C2.01104885,6.30817556 3.15275345,5.11230312 4.59352652,5.02572619 L4.76104885,5.0207074 L19.2388849,5.0207074 Z"
                    ></path>
                  </g>
                </g>
              </svg>
              Phương thức thanh toán
            </h4>
            <div class="flex items-center justify-center gap-3">
              <button
                :class="
                  paymentMethod === 'VNPAY'
                    ? 'px-4 py-1 rounded-md bg-primaryColor text-whiteColor'
                    : 'px-4 py-1 rounded-md border border-borderColor text-headingColor'
                "
                @click="changePaymentMethod('VNPAY')"
              >
                VNPAY
              </button>
              <button
                :class="
                  paymentMethod === 'CASH'
                    ? 'px-4 py-1 rounded-md bg-primaryColor text-whiteColor'
                    : 'px-4 py-1 rounded-md border border-borderColor text-headingColor'
                "
                @click="changePaymentMethod('CASH')"
              >
                Thanh toán khi nhận hàng
              </button>
            </div>
          </div>
        </div>
        <div class="mt-6">
          <div class="flex flex-col items-end gap-4">
            <div>Tổng tiền hàng: {{ formatPrice(orderSummary?.totalPrice) }}</div>
            <div>Tổng tiền phí vận chuyển: {{ formatPrice(orderSummary?.shippingFee) }}</div>
            <div>
              Tổng thanh toán: <span class="text-lg font-bold text-primaryColor">{{ formatPrice(orderSummary?.totalAmount) }}</span>
            </div>
            <PrimaryButton :content="'Đặt hàng'" :func="createdOrder" :loading="isSubmitting" />
          </div>
        </div>
      </div>
      <AddAddressModal :isModalOpen="isModalOpen" :cities="cities" :districts="districts" :wards="wards" :closeModal="closeModal" :fetchData="fetchAddress" />
      <AddressListModal
        :isModalOpen="isModalAddressListOpen"
        :selectAddress="selectAddress"
        :changeSelectAddress="changeSelectAddress"
        :addressList="addressList"
        :closeModal="closeModalAddressList"
      />
    </template>
  </div>
</template>

<script>
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useHomeStore, useUserStore, useToastStore } from '@/stores'
import { getListAddress } from '@/webServices/userService'
import { createOrder, paymentVNPay } from '@/webServices/orderService'
import { getCart } from '@/webServices/cartService'
import { formatPrice } from '@/utils'

import citiesData from '@/data/cities.json'
import districtsData from '@/data/districts.json'
import wardsData from '@/data/wards.json'

import PrimaryButton from '@/components/Button/PrimaryButton.vue'
import AddAddressModal from '@/components/Account/AddAddressModal.vue'
import AddressListModal from '@/components/Checkout/AddressListModal.vue'
export default defineComponent({
  components: { PrimaryButton, AddAddressModal, AddressListModal },
  setup() {
    const router = useRouter()

    const homeStore = useHomeStore()
    const userStore = useUserStore()
    const toastStore = useToastStore()

    const orderList = ref([])
    const paymentMethod = ref('CASH')
    const orderSummary = ref({
      totalPrice: 0,
      shippingFee: 0,
      totalAmount: 0
    })

    const isSubmitting = ref(false)

    const loading = ref(false)
    const addressList = ref([])
    const selectAddress = ref(null)
    const isModalOpen = ref(false)
    const isModalAddressListOpen = ref(false)

    const cities = ref(citiesData)
    const districts = ref(districtsData)
    const wards = ref(wardsData)

    const openModal = () => {
      isModalOpen.value = true
    }

    const closeModal = () => {
      isModalOpen.value = false
    }

    const openModalAddressList = () => {
      isModalAddressListOpen.value = true
    }

    const closeModalAddressList = () => {
      isModalAddressListOpen.value = false
    }

    const changeSelectAddress = add => {
      selectAddress.value = add
    }

    const changePaymentMethod = m => {
      paymentMethod.value = m
    }

    const fetchOrderItems = () => {
      const orders = userStore.cart.filter(item => userStore.orderIds.includes(item.id))
      orderList.value = orders

      const totalPrice = orders.reduce((sum, item) => sum + item.productPrice * item.quantity, 0)
      const shippingFee = 0
      const totalAmount = totalPrice + shippingFee

      orderSummary.value.totalPrice = totalPrice
      orderSummary.value.shippingFee = shippingFee
      orderSummary.value.totalAmount = totalAmount
    }

    const fetchAddress = async () => {
      const res = await getListAddress()

      console.log(res)

      if (res.success) {
        addressList.value = res.addressDTOS
        const defaultAddress = addressList.value.find(address => address.defaultAddress)
        selectAddress.value = defaultAddress || addressList.value[0] || null
      }
    }

    const createdOrder = async () => {
      isSubmitting.value = true

      if (!selectAddress.value) {
        isSubmitting.value = false
        return
      }

      console.log(paymentMethod.value)

      const res = await createOrder({
        cartItemIds: userStore.orderIds,
        paymentMethod: paymentMethod.value,
        addressId: selectAddress.value.id
      })

      console.log(res)

      if (res.success) {
        if (paymentMethod.value === 'VNPAY') {
          const paymentData = await paymentVNPay({
            orderInfo: res?.order?.id.toString(),
            amount: res?.order?.totalAmount,
            bankCode: 'NCB',
            language: 'vn'
          })

          if (paymentData?.paymentUrl) {
            window.open(paymentData.paymentUrl, '_blank')
          }
        }

        const cartData = await getCart()
        userStore.setCart(cartData.dto?.cartItemDTOS || [])
        toastStore.showToastModal({
          type: 'success',
          message: 'Đặt hàng thành công',
          timeout: 3000
        })
        setTimeout(() => {
          router.push({ name: 'cart' })
        }, 3000)
      }

      isSubmitting.value = false
    }

    onMounted(async () => {
      if (userStore.orderIds.length === 0) {
        router.push({ name: 'home' })
        return
      } else {
        loading.value = true
        await fetchAddress()
        fetchOrderItems()
        loading.value = false
      }
    })

    onUnmounted(() => {
      userStore.setOrderIds([])
    })

    return {
      formatPrice,
      cities,
      districts,
      wards,
      addressList,
      selectAddress,
      isModalOpen,
      isModalAddressListOpen,
      loading,
      orderList,
      orderSummary,
      paymentMethod,
      isSubmitting,
      openModal,
      closeModal,
      openModalAddressList,
      closeModalAddressList,
      changeSelectAddress,
      fetchAddress,
      changePaymentMethod,
      createdOrder
    }
  }
})
</script>

<style></style>
