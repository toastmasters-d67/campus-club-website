<script setup>
import { RouterLink, RouterView } from 'vue-router'

// AOS 套件初始化
import { onMounted, ref, onUnmounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const isHeaderVisible = ref(true)
const lastScrollPosition = ref(0)

onMounted(() => {
  AOS.init({
    disable: false,
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,

    offset: 80,
    duration: 1200,
    easing: 'ease',
    once: true,
    mirror: false,
    anchorPlacement: 'top-bottom'
  })

  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const handleScroll = () => {
  const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop

  if (currentScrollPosition < 0) {
    return
  }

  if (currentScrollPosition > lastScrollPosition.value) {
    isHeaderVisible.value = false
  } else {
    isHeaderVisible.value = true
  }

  lastScrollPosition.value = currentScrollPosition
}
</script>

<template>
  <header
    class="z-[100] fixed top-0 w-[1280px] left-1/2 -translate-x-1/2 transition-all duration-500"
    :class="{ '-translate-y-1/2': !isHeaderVisible }"
  >
    <!-- * pc > menu -->
    <div
      class="hidden xl:flex justify-between items-center bg-white px-12 pb-4 gap-7 max-w-1280 transition-all duration-500 overflow-hidden"
      :class="[
        isHeaderVisible
          ? 'rounded-es-[128px] rounded-br-[128px] h-[141px]'
          : 'rounded-es-[260px] rounded-br-[260px] h-[128px]'
      ]"
    >
      <button
        class="w-[96px] shrink-0 transition-all duration-500"
        :class="{ 'opacity-0 -translate-y-full': !isHeaderVisible }"
      >
        <img src="@/assets/images/icon/logo.svg" class="pic-auto" alt="logo" />
      </button>

      <div class="grow flex flex-col gap-5 transition-all duration-500">
        <div
          class="w-full h-[7px] bg-blue-2 mt-[58px] transition-all duration-500"
          :class="{ 'opacity-0 -translate-y-full': !isHeaderVisible }"
        ></div>
        <nav
          class="px-12 flex justify-between transition-all duration-500"
          :class="{ 'transform -translate-y-2 pt-3': !isHeaderVisible }"
        >
          <RouterLink to="/" class="nav-item" active-class="nav-item-active">Home</RouterLink>
          <RouterLink to="/events" class="nav-item" active-class="nav-item-active"
            >Events</RouterLink
          >
          <RouterLink to="/clubs" class="nav-item" active-class="nav-item-active"
            >Find Clubs</RouterLink
          >
          <RouterLink to="/about" class="nav-item" active-class="nav-item-active"
            >About Us</RouterLink
          >
        </nav>
      </div>

      <button
        class="w-[56px] shrink-0 transition-all duration-500"
        :class="{ 'opacity-0 -translate-y-full': !isHeaderVisible }"
      >
        <img src="@/assets/images/icon/profile.svg" class="pic-auto" alt="logo" />
      </button>
    </div>
  </header>

  <div class="xl:pt-[141px]"><RouterView /></div>
</template>

<style scoped>
/* menu animate */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  transform: translatey(-350px);
}

/* nav-item */
.nav-item {
  @apply bg-blue-1 text-white px-7 py-2 rounded-[24px] font-medium transition-all duration-500;
}

.nav-item-active {
  @apply bg-yellow-1 text-blue-2;
}
</style>
