<template>
  <div class="p-4 bg-whiteColor rounded-md shadow-shadow01">
    <div class="mb-4 pb-4 border-b-[1px] border-borderColor flex items-center justify-between">
      <h4 class="text-xl text-headingColor font-extrabold">Đơn hàng</h4>
    </div>
    <div class="mb-6">
      <ul class="flex items-center justify-start text-headingColor font-bold border-b-2 border-borderColor">
        <li
          v-for="navItem in nav"
          :key="navItem.id"
          @click="setActive(navItem.id)"
          class="px-2 py-2 sm:py-4 sm:px-6 text-sm sm:text-base relative cursor-pointer transition-all duration-300 hover:text-primaryColor after:absolute after:content after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-primaryColor after:transition-all after:duration-300"
          :class="navItem.isActive ? 'after:scale-100 text-primaryColor' : 'after:scale-0 text-headingColor'"
        >
          <span>{{ navItem.label }}</span>
        </li>
      </ul>
    </div>
    <div v-if="loading" class="min-h-[40vh] flex items-center justify-center text-primaryColor">
      <span class="loading loading-spinner loading-md"></span>
    </div>
    <template v-else>
      <div v-for="(n, i) in nav" :key="i">
        <div v-if="n.isActive">
          <div class="py-14 flex-col flex items-center justify-center" v-if="activeOrders.length === 0">
            <img src="@/assets/images/order-list.png" class="w-32" alt="" />
            <div class="mt-2">Chưa có đơn hàng</div>
          </div>
          <div v-else class="pt-6 pb-6 flex items-center justify-center" v-for="(order, i) in activeOrders" :key="i">
            <div class="w-full">
              <div class="pb-4 flex items-center justify-end border-b border-borderColor">
                <div class="flex items-center justify-center">
                  <div
                    class="flex items-center justify-center gap-1"
                    :class="{
                      'text-primaryColor': order?.status === 'PAID' || (order?.status === 'PENDING' && order?.paymentDTO?.paymentMethod === 'CASH'),
                      'text-dangerColor': order?.status === 'CANCELLED',
                      'text-secondaryColor': order?.status === 'PENDING' && order?.paymentDTO?.paymentMethod !== 'CASH'
                    }"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 16H13C13.6667 16 15 15.6 15 14C15 12.4 13.6667 12 13 12H11C10.3333 12 9 11.6 9 10C9 8.4 10.3333 8 11 8H12M12 16H9M12 16V18M15 8H12M12 8V6M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    {{
                      order?.status === 'CANCELLED'
                        ? 'Đơn hàng đã bị hủy'
                        : order?.status === 'PAID'
                        ? 'Đã thanh toán'
                        : order?.status === 'PENDING' && order?.paymentDTO?.paymentMethod === 'CASH'
                        ? 'Thanh toán khi nhận hàng'
                        : order?.status === 'PENDING'
                        ? 'Chưa thanh toán'
                        : ''
                    }}
                  </div>
                  <div
                    v-if="
                      order?.status === 'SHIPPED' || (order?.status === 'PENDING' && order?.paymentDTO?.paymentMethod === 'CASH') || order?.status === 'PAID'
                    "
                    class="mx-2 w-[1px] h-4 bg-borderColor"
                  ></div>
                  <div
                    v-if="
                      order?.status === 'SHIPPED' || (order?.status === 'PENDING' && order?.paymentDTO?.paymentMethod === 'CASH') || order?.status === 'PAID'
                    "
                    class="flex items-center justify-center gap-1"
                    :class="{
                      'text-primaryColor': order?.shipment?.status !== 'PENDING' && order?.shipment?.status !== 'CANCELED',
                      'text-dangerColor': order?.shipment?.status === 'CANCELED',
                      'text-secondaryColor': order?.shipment?.status === 'PENDING'
                    }"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" class="mb-[2px]">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1 6C1 4.89543 1.89543 4 3 4H14C15.1046 4 16 4.89543 16 6V7H19C21.2091 7 23 8.79086 23 11V12V15V17C23.5523 17 24 17.4477 24 18C24 18.5523 23.5523 19 23 19H22H18.95C18.9828 19.1616 19 19.3288 19 19.5C19 20.8807 17.8807 22 16.5 22C15.1193 22 14 20.8807 14 19.5C14 19.3288 14.0172 19.1616 14.05 19H7.94999C7.98278 19.1616 8 19.3288 8 19.5C8 20.8807 6.88071 22 5.5 22C4.11929 22 3 20.8807 3 19.5C3 19.3288 3.01722 19.1616 3.05001 19H2H1C0.447715 19 0 18.5523 0 18C0 17.4477 0.447715 17 1 17V6ZM16.5 19C16.2239 19 16 19.2239 16 19.5C16 19.7761 16.2239 20 16.5 20C16.7761 20 17 19.7761 17 19.5C17 19.2239 16.7761 19 16.5 19ZM16.5 17H21V15V13H19C18.4477 13 18 12.5523 18 12C18 11.4477 18.4477 11 19 11H21C21 9.89543 20.1046 9 19 9H16V17H16.5ZM14 17H5.5H3V6H14V8V17ZM5 19.5C5 19.2239 5.22386 19 5.5 19C5.77614 19 6 19.2239 6 19.5C6 19.7761 5.77614 20 5.5 20C5.22386 20 5 19.7761 5 19.5Z"
                        fill="currentColor"
                      />
                    </svg>
                    {{
                      order?.shipment?.status === 'DELIVERED'
                        ? 'Giao hàng thành công'
                        : order?.shipment?.status === 'OUT_FOR_DELIVERY'
                        ? 'Đang giao hàng'
                        : order?.shipment?.status === 'RETURNED'
                        ? 'Đã trả hàng'
                        : order?.shipment?.status === 'PENDING'
                        ? 'Đơn hàng đang chờ xử lý'
                        : order?.shipment?.status === 'CANCELED'
                        ? 'Đơn hàng đã bị hủy'
                        : ''
                    }}
                  </div>
                </div>
              </div>
              <div v-for="(item, i) in order.items" :key="i" class="py-4 flex items-center justify-start gap-4 border-b border-borderColor">
                <img :src="item?.variantDTO?.imageUrl" class="w-24 rounded-md" alt="" />
                <div class="flex-1">
                  <div class="font-semibold line-clamp-1">{{ item?.productName }}</div>
                  <div class="text-bodyColor">Phân loại hàng: {{ item?.variantDTO?.attribute }} {{ item?.sizeDTO?.size }}</div>
                  <div>Số lượng: {{ item?.quantity }}</div>
                </div>
                <div class="pl-6 flex items-center gap-2">
                  <span class="text-primaryColor">{{ formatPrice(item?.price * item?.quantity) }}</span>
                </div>
              </div>
              <div class="pt-6 pb-4">
                <div class="text-end">
                  Thành tiền: <span class="text-lg font-bold text-primaryColor">{{ formatPrice(order?.totalAmount) }}</span>
                </div>
                <div v-if="order?.shipment?.status === 'DELIVERED'" class="mt-4 flex items-center justify-end gap-2">
                  <button @click="openModal" class="px-4 h-10 rounded-md bg-primaryColor text-whiteColor hover:bg-darkPrimaryColor">Đánh giá</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <CreateReviewModal :isModalOpen="isModalOpen" :closeModal="closeModal" />
  </div>
</template>

<script>
import { defineComponent, onMounted, reactive, ref, computed } from 'vue'
import { formatPrice, generateSlug } from '@/utils'
import { getAllOrder } from '@/webServices/orderService'

import CreateReviewModal from '@/components/Account/CreateReviewModal.vue'
export default defineComponent({
  components: { CreateReviewModal },
  setup() {
    const nav = reactive([
      { id: 1, label: 'Tất cả', isActive: true, filterKey: 'all' },
      { id: 2, label: 'Chờ thanh toán', isActive: false, filterKey: 'pendingPayment' },
      { id: 3, label: 'Vận chuyển', isActive: false, filterKey: 'shipping' },
      { id: 4, label: 'Đang giao hàng', isActive: false, filterKey: 'outForDelivery' },
      { id: 5, label: 'Hoàn thành', isActive: false, filterKey: 'completed' },
      { id: 6, label: 'Đã hủy', isActive: false, filterKey: 'cancelled' }
    ])

    const setActive = id => {
      nav.forEach(item => {
        item.isActive = item.id === id
      })
    }

    const loading = ref(false)

    const orderList = ref([])

    const filteredOrders = reactive({
      all: [],
      pendingPayment: [],
      shipping: [],
      completed: []
    })

    const isModalOpen = ref(false)

    const openModal = () => {
      isModalOpen.value = true
    }

    const closeModal = () => {
      isModalOpen.value = false
    }

    const fetchData = async () => {
      const res = await getAllOrder()
      console.log(res)
      if (res.success) {
        orderList.value = res.dtoList
        filterOrders()
      }
    }

    const filterOrders = () => {
      filteredOrders.all = orderList.value

      filteredOrders.pendingPayment = orderList.value.filter(order => order?.status === 'PENDING' && order?.paymentDTO?.paymentMethod !== 'CASH')

      filteredOrders.shipping = orderList.value.filter(
        order =>
          (order?.status === 'PAID' || order?.status === 'PENDING') && order?.paymentDTO?.paymentMethod === 'CASH' && order?.shipment?.status === 'PENDING'
      )

      filteredOrders.outForDelivery = orderList.value.filter(order => order?.shipment?.status === 'OUT_FOR_DELIVERY')

      filteredOrders.completed = orderList.value.filter(order => order?.shipment?.status === 'DELIVERED')

      filteredOrders.cancelled = orderList.value.filter(order => order?.status === 'CANCELLED' || order?.shipment?.status === 'CANCELED')
    }

    const activeOrders = computed(() => {
      const activeNav = nav.find(item => item.isActive)
      return filteredOrders[activeNav.filterKey]
    })

    onMounted(async () => {
      loading.value = true
      await fetchData()
      loading.value = false
    })

    return { formatPrice, loading, generateSlug, nav, isModalOpen, orderList, activeOrders, setActive, openModal, closeModal }
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0 })
    }
  },
  created() {
    this.scrollToTop()
  }
})
</script>

<style></style>
