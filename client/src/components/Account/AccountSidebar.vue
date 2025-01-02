<template>
  <div>
    <nav class="side-bar">
      <ul class="mb-5">
        <li :class="{ active: isActive('account-profile') }">
          <router-link :to="{ name: 'account-profile' }">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="20" height="20" class="mb-1">
              <path
                d="M17.5 21.0001H6.5C5.11929 21.0001 4 19.8808 4 18.5001C4 14.4194 10 14.5001 12 14.5001C14 14.5001 20 14.4194 20 18.5001C20 19.8808 18.8807 21.0001 17.5 21.0001Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>Tài khoản của tôi</span>
          </router-link>
        </li>
        <li :class="{ active: isActive('account-address') }">
          <router-link :to="{ name: 'account-address' }">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
              <path
                d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10v-1c-0.6,0.9-1.2,1.7-1.7,2.4c-0.4,2.2-1.6,4.1-3.3,5.4  c-0.1-0.3-0.2-0.7-0.3-1c-0.1-0.4-0.2-0.8-0.4-1.2c-0.1-0.4-0.2-0.8-0.4-1.1c-0.1-0.1-0.3-0.2-0.5-0.3c-0.7-0.2-1.6,0.1-2.1-0.6  c-0.2-0.3-0.2-0.6-0.1-1c0.2-0.3,0.3-0.6,0.5-0.9c0.2-0.4,0.5-0.9,0.6-1.4c-0.8-1.2-1.6-2.6-2-3.9h-0.1c-0.1,0-0.1,0-0.2-0.1  c-0.2-0.2-0.3-0.7-0.2-1c0-0.5,0.3-0.8,0.2-1.3c0-0.1-0.1-0.9-0.1-0.9c-0.3,0-0.8,0-0.7-0.5V3.5H12h0.5c0.2-0.6,0.6-1.1,0.9-1.5H12z   M18,2c-2.2,0-4,1.8-4,4s4,7,4,7s4-4.8,4-7S20.2,2,18,2z M18,4.5c0.8,0,1.5,0.7,1.5,1.5S18.8,7.5,18,7.5S16.5,6.8,16.5,6  S17.2,4.5,18,4.5z M8,5.1c0.4,0,0.7,0,1,0.1s0.6,0.3,0.8,0.5s0.5,0.5,0.5,0.8c0,0.1,0,0.2-0.1,0.2C10.1,6.8,10,6.8,9.9,6.8  c-0.3,0-0.6,0-0.8-0.1C9,6.6,8.8,6.4,8.6,6.3C8.1,6.1,7.2,7.4,7.1,7.8C7,8.1,7,8.8,7.5,8.9c0.3,0,1-0.6,1.2-0.8C8.9,8,9,7.9,9.2,7.8  c0.8-0.1,1.4,0.6,1.6,1.3C11,9.9,9.6,10.5,9,10.7c-0.2,0.1-0.3-0.1-0.5,0c-0.5,0.2-1.1,0.9-1.1,1.4s-0.1,1-0.2,1.5  c-0.1,0-0.2-0.1-0.2-0.1v-0.2c0-0.3-0.1-0.6-0.4-0.8c-0.1,0-0.1-0.1-0.2-0.1c-0.3-0.1-0.6-0.4-0.9-0.1c-0.2,0.2-0.4,0.5-0.4,0.8  c0,0.1,0,0.2,0.1,0.3c0.2,0.1,0.4,0,0.6,0c0.1,0,0.2,0.2,0.3,0.3c0.2,0.3,0.3,0.8,0.7,0.8h0.7h1.3c0.3,0.1,0.8,0.2,1,0.4  c0.1,0.2,0.1,0.4,0.2,0.6c0.4,0.5,1.1,0.5,1.7,0.7c0.2,0.1,0.3,0.2,0.3,0.4c0,0.3-0.1,0.7-0.2,1s-0.2,0.7-0.4,0.9s-0.4,0.3-0.6,0.4  c-0.4,0.2-0.6,0.6-0.8,0.9c0,0-0.1,0.2-0.2,0.3c-0.8-0.2-1.5-0.5-2.2-1v-0.2c-0.1-0.4-0.2-0.7-0.3-1c-0.2-0.5-0.5-1.1-0.6-1.6  c0-0.5,0.1-1-0.2-1.4c-0.3-0.5-1.1-0.5-1.6-0.8c-0.4-0.4-0.9-0.8-1.3-1.3V12c0-2.7,1.3-5.1,3.3-6.7C7.3,5.2,7.6,5.1,8,5.1z"
              />
              <rect fill="none" width="24" height="24" />
              <rect fill="none" width="24" height="24" />
            </svg>
            <span> Địa chỉ </span>
          </router-link>
        </li>
        <li :class="{ active: isActive('account-order') }">
          <router-link :to="{ name: 'account-order' }">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              width="20"
              height="20"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            <span>Đơn hàng</span>
          </router-link>
        </li>
        <li :class="{ active: isActive('account-ordertracking') }">
          <router-link :to="{ name: 'account-ordertracking' }">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="20" height="20">
              <path
                d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>Theo dõi đơn hàng</span>
          </router-link>
        </li>
        <li :class="{ active: isActive('account-voucher') }">
          <router-link :to="{ name: 'account-voucher' }">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="20" height="20">
              <g>
                <g>
                  <rect width="48" height="48" fill="none" />
                </g>
                <g>
                  <g>
                    <path
                      fill="currentColor"
                      d="M43,7H38a2,2,0,0,0-1.4.6L34,10.2,31.4,7.6A2,2,0,0,0,30,7H5a2.9,2.9,0,0,0-3,3V38a2.9,2.9,0,0,0,3,3H30a2,2,0,0,0,1.4-.6L34,37.8l2.6,2.6A2,2,0,0,0,38,41h5a2.9,2.9,0,0,0,3-3V10A2.9,2.9,0,0,0,43,7ZM42,37H38.8l-3.4-3.4a1.9,1.9,0,0,0-2.8,0L29.2,37H6V11H29.2l3.4,3.4a1.9,1.9,0,0,0,2.8,0L38.8,11H42Z"
                    />
                    <path fill="currentColor" d="M34,17a2,2,0,0,0-2,2v2a2,2,0,0,0,4,0V19A2,2,0,0,0,34,17Z" />
                    <path fill="currentColor" d="M34,25a2,2,0,0,0-2,2v2a2,2,0,0,0,4,0V27A2,2,0,0,0,34,25Z" />
                    <circle fill="currentColor" cx="14" cy="20" r="2" />
                    <circle fill="currentColor" cx="22" cy="28" r="2" />
                    <path fill="currentColor" d="M21.6,17.6l-10,10a1.9,1.9,0,0,0,0,2.8,1.9,1.9,0,0,0,2.8,0l10-10a2,2,0,0,0-2.8-2.8Z" />
                  </g>
                </g>
              </g>
            </svg>
            <span>Voucher</span>
          </router-link>
        </li>
        <li :class="{ active: isActive('account-apply-store') }">
          <router-link :to="{ name: 'account-apply-store' }">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
              <path
                d="M21.026,6.105a3.1,3.1,0,0,1-2.365,3.848A3.031,3.031,0,0,1,15.1,7.222l-.042-.5A3.03,3.03,0,0,1,12.041,10h-.082A3.03,3.03,0,0,1,8.94,6.719l-.031.375a3.121,3.121,0,0,1-2.83,2.9A3.03,3.03,0,0,1,2.941,6.236l.87-3.479A1,1,0,0,1,4.781,2H19.219a1,1,0,0,1,.97.757ZM18.121,12A5.021,5.021,0,0,0,20,11.631V21a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V11.631a4.914,4.914,0,0,0,4.907-.683A5.131,5.131,0,0,0,12.042,12a5.027,5.027,0,0,0,3.051-1.052A4.977,4.977,0,0,0,18.121,12ZM14,17a2,2,0,0,0-4,0v3h4Z"
              />
            </svg>
            <span>Đăng kí bán hàng</span>
          </router-link>
        </li>
        <li :class="{ active: isActive('account-change-password') }">
          <router-link :to="{ name: 'account-change-password' }">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="20" height="20">
              <path
                d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>Đổi mật khẩu</span>
          </router-link>
        </li>
        <li>
          <button @click.prevent="logout">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" width="20" height="20">
              <path d="M23.9917 6L6 6L6 42H24" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M33 33L42 24L33 15" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M16 23.9917H42" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span>Đăng xuất</span>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from '@/stores'
import { logoutUser } from '@/webServices/authorizationService'
export default defineComponent({
  setup() {
    const userStore = useUserStore()
    const route = useRoute()
    const router = useRouter()

    const isActive = name => {
      return route.name === name
    }

    const logout = async () => {
      const res = await logoutUser()
      if (res.success) {
        userStore.logout()
        router.push({ name: 'auth-login' })
      }
    }

    return { userStore, route, router, isActive, logout }
  }
})
</script>

<style scoped>
.side-bar {
  @apply sticky top-20 z-10 p-6 rounded-xl border-[3px] border-primaryColor;
}

.side-bar li {
  padding: 12px 0;
}
.side-bar li:not(:first-child) {
  border-top: 1px solid;
  @apply border-borderColor;
}

.side-bar li a,
.side-bar li button {
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 8px;
  font-weight: 700;
  transition: all 0.4s;
}

.side-bar li.active a {
  @apply text-primaryColor;
}

.side-bar li:not(.active):hover a {
  transform: translateX(4px);
  @apply text-primaryColor;
}

.side-bar li:hover button {
  transform: translateX(4px);
  @apply text-primaryColor;
}
</style>
