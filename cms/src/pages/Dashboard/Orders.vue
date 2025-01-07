<template>
  <div class="content-container">
    <div class="py-4 px-4 flex items-center justify-between border-b border-borderColor">
      <h3 class="text-lg font-bold">Danh sách đơn hàng</h3>
    </div>
    <div v-if="loading" class="min-h-[75vh] flex items-center justify-center text-primaryColor">
      <span class="loading loading-spinner loading-md"></span>
    </div>
    <template v-else>
      <p class="px-4 pt-4 pb-10 italic" v-if="orders.length === 0">Chưa có đơn hàng nào</p>
      <div v-else class="pb-4">
        <table class="table w-full">
          <thead>
            <tr>
              <th class="text-center">STT</th>
              <th>Ngày tạo</th>
              <th>Khách hàng</th>
              <td>Số điện thoại</td>
              <td>Địa chỉ</td>
              <th>Tổng tiền</th>
              <th>Trạng thái đơn hàng</th>
              <th class="text-center">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(order, index) in orders" :key="index">
              <td class="text-center">{{ index + 1 }}</td>
              <td>
                {{ formatDateTimeLong(order.createdDate) }}
              </td>
              <td>{{ order?.shipment?.name }}</td>
              <td>{{ order?.shipment?.phoneNumber }}</td>
              <td>{{ order?.shipment?.address }}</td>
              <td>{{ formatPrice(order?.totalAmount) }}</td>
              <td>
                <span
                  class="px-4 py-1 rounded-md"
                  :class="{
                    'text-primaryColor bg-primaryOpacityColor': order?.status === 'PAID',
                    'bg-borderColor text-headingColor': order?.status === 'PENDING' && order?.paymentDTO?.paymentMethod === 'CASH',
                    'text-dangerColor bg-dangerOpacityColor': order?.status === 'CANCELLED',
                    'text-secondaryColor bg-secondaryOpacityColor': order?.status === 'PENDING' && order?.paymentDTO?.paymentMethod !== 'CASH'
                  }"
                >
                  {{
                    order?.status === 'CANCELLED'
                      ? 'Đơn hàng đã bị hủy'
                      : order?.status === 'PAID'
                      ? 'Đã thanh toán'
                      : order?.status === 'PENDING'
                      ? 'Chưa thanh toán'
                      : order?.status === 'PENDING'
                      ? 'Chưa thanh toán'
                      : ''
                  }}
                </span>
              </td>

              <td>
                <div class="flex items-center justify-center gap-2">
                  <button
                    @click="redirectToOrderDetailsPage(order.id)"
                    class="px-3 py-2 rounded-md bg-secondaryOpacityColor text-secondaryColor transition-all duration-300 hover:bg-secondaryColor hover:text-whiteColor"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.5 12c0-2.25 3.75-7.5 10.5-7.5S22.5 9.75 22.5 12s-3.75 7.5-10.5 7.5S1.5 14.25 1.5 12zM12 16.75a4.75 4.75 0 1 0 0-9.5 4.75 4.75 0 0 0 0 9.5zM14.7 12a2.7 2.7 0 1 1-5.4 0 2.7 2.7 0 0 1 5.4 0z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <Pagination class="mt-4 px-4" :meta="meta" :changePage="changePage" />
      </div>
    </template>
  </div>
</template>
<script>
import { defineComponent, ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore, useToastStore } from '@/stores'
import { formatPrice, formatDateLong, formatDateTimeLong } from '@/utils'
import { getAllOrderByStore } from '@/webServices/orderService'

import Pagination from '@/components/Pagination/Pagination.vue'
export default defineComponent({
  components: { Pagination },
  setup() {
    const userStore = useUserStore()
    const toastStore = useToastStore()
    const router = useRouter()

    const loading = ref(false)

    const options = ref({
      pageNumber: 0,
      pageSize: 8,
      sortOrder: 'asc'
    })

    const orders = ref([])

    const meta = ref({
      first: null,
      last: null,
      number: null,
      numberOfElements: null,
      size: null,
      totalElements: null,
      totalPages: null
    })

    const changePage = page => {
      options.value.pageNumber = page
    }

    const updateSortOrder = order => {
      options.value.sortOrder = order
    }

    const redirectToOrderDetailsPage = id => {
      router.push({ name: 'order-details', params: { id: id } })
    }

    const fetchData = async () => {
      const res = await getAllOrderByStore()

      console.log(res)

      if (res.success) {
        orders.value = res.dtoList
        meta.value = res.pageDto
      }
    }

    watch(
      options,
      async newOptions => {
        await fetchData()
      },
      { deep: true }
    )

    onMounted(async () => {
      loading.value = true
      await fetchData()
      loading.value = false
    })

    return { options, loading, orders, meta, formatPrice, formatDateLong, formatDateTimeLong, changePage, updateSortOrder, redirectToOrderDetailsPage }
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

<style scoped>
.content-container {
  box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.03);
  @apply bg-whiteColor rounded-md;
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

.select,
.filter-input {
  min-height: 40px;
  height: 40px;
  font-size: 16px;
  padding: 0 16px;
  border: 1px solid rgba(204, 204, 204, 1);
  @apply text-headingColor bg-whiteColor rounded-md;
}

.filter-input {
  @apply w-32;
}

.select:focus,
.filter-input:focus {
  @apply border-primaryColor outline-none;
}

.ui-checkbox {
  --primary-color: #3bb77e;
  --secondary-color: #fff;
  --primary-hover-color: #def9ec;
  --checkbox-diameter: 20px;
  --checkbox-border-radius: 5px;
  --checkbox-border-color: #d9d9d9;
  --checkbox-border-width: 1px;
  --checkbox-border-style: solid;
  --checkmark-size: 1.2;
}

.ui-checkbox,
.ui-checkbox *,
.ui-checkbox *::before,
.ui-checkbox *::after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.ui-checkbox {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: var(--checkbox-diameter);
  height: var(--checkbox-diameter);
  border-radius: var(--checkbox-border-radius);
  background: var(--secondary-color);
  border: var(--checkbox-border-width) var(--checkbox-border-style) var(--checkbox-border-color);
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  cursor: pointer;
  position: relative;
}

.ui-checkbox::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-box-shadow: 0 0 0 calc(var(--checkbox-diameter) / 2.5) var(--primary-color);
  box-shadow: 0 0 0 calc(var(--checkbox-diameter) / 2.5) var(--primary-color);
  border-radius: inherit;
  opacity: 0;
  -webkit-transition: all 0.5s cubic-bezier(0.12, 0.4, 0.29, 1.46);
  -o-transition: all 0.5s cubic-bezier(0.12, 0.4, 0.29, 1.46);
  transition: all 0.5s cubic-bezier(0.12, 0.4, 0.29, 1.46);
}

.ui-checkbox::before {
  top: 40%;
  left: 50%;
  content: '';
  position: absolute;
  width: 4px;
  height: 7px;
  border-right: 2px solid var(--secondary-color);
  border-bottom: 2px solid var(--secondary-color);
  -webkit-transform: translate(-50%, -50%) rotate(45deg) scale(0);
  -ms-transform: translate(-50%, -50%) rotate(45deg) scale(0);
  transform: translate(-50%, -50%) rotate(45deg) scale(0);
  opacity: 0;
  -webkit-transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6), opacity 0.1s;
  -o-transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6), opacity 0.1s;
  transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6), opacity 0.1s;
}

.ui-checkbox:hover {
  border-color: var(--primary-color);
}

.ui-checkbox:checked {
  background: var(--primary-color);
  border-color: transparent;
}

.ui-checkbox:checked::before {
  opacity: 1;
  -webkit-transform: translate(-50%, -50%) rotate(45deg) scale(var(--checkmark-size));
  -ms-transform: translate(-50%, -50%) rotate(45deg) scale(var(--checkmark-size));
  transform: translate(-50%, -50%) rotate(45deg) scale(var(--checkmark-size));
  -webkit-transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
  -o-transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
  transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
}

.ui-checkbox:active:not(:checked)::after {
  -webkit-transition: none;
  -o-transition: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  transition: none;
  opacity: 1;
}
</style>
