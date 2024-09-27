<script setup>
import { ref, computed, onMounted, nextTick } from 'vue'

const searchClubDate = ref('')

const searchClubSchool = ref('-1')
const searchClubEvent = ref('-1')
const searchClubKeyword = ref('')

const events = ref([
  {
    title: 'NTUST (台灣科技大學)',
    description: 'Regular meeting #323',
    date: '09/02/2024 (Mon.) 7pm-9pm'
  },
  {
    title: 'NTU (台灣大學) ',
    description: 'Regular meeting #323',
    date: '09/02/2024 (Mon.) 7pm-9pm'
  },
  {
    title: 'NCCU (政治大學) ',
    description: 'Regular meeting #323',
    date: '09/02/2024 (Mon.) 7pm-9pm'
  },
  {
    title: 'NTUST (台灣科技大學)',
    description: 'Regular meeting #323',
    date: '09/02/2024 (Mon.) 7pm-9pm'
  },
  {
    title: 'NTUST (台灣科技大學)',
    description: 'Regular meeting #323',
    date: '09/02/2024 (Mon.) 7pm-9pm'
  },
  {
    title: 'NTUST (台灣科技大學)',
    description: 'Regular meeting #323',
    date: '09/02/2024 (Mon.) 7pm-9pm'
  }
])

// 帶入 Event, 跳轉到 Search Clubs
function goToSearchClubs(e) {
  searchClubEvent.value = e

  const searchClubsElement = document.getElementById('searchClubs')
  if (searchClubsElement) {
    const elementPosition = searchClubsElement.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - 70

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}
const clubs = ref([
  {
    day: '02',
    month: 'Sep.',
    weekday: 'Mon.',
    time: '7:00pm ~ 9:00pm',
    title: 'NTUST (台灣科技大學)',
    description: 'Regular Meeting #322',
    event: '1'
  },
  {
    day: '02',
    month: 'Sep.',
    weekday: 'Mon.',
    time: '7:00pm ~ 9:00pm',
    title: 'NTUST (台灣科技大學)',
    description: 'Regular Meeting #322',
    event: '1'
  },
  {
    day: '02',
    month: 'Sep.',
    weekday: 'Mon.',
    time: '7:00pm ~ 9:00pm',
    title: 'NTUST (台灣科技大學)',
    description: 'Joint Meeting #322',
    event: '2'
  },
  {
    day: '02',
    month: 'Sep.',
    weekday: 'Mon.',
    time: '7:00pm ~ 9:00pm',
    title: 'NTUST (台灣科技大學)',
    description: 'Workshop #322',
    event: '3'
  },
  {
    day: '02',
    month: 'Sep.',
    weekday: 'Mon.',
    time: '7:00pm ~ 9:00pm',
    title: 'NTUST (台灣科技大學)',
    description: 'Workshop #322',
    event: '3'
  },
  {
    day: '02',
    month: 'Sep.',
    weekday: 'Mon.',
    time: '7:00pm ~ 9:00pm',
    title: 'NTUST (台灣科技大學)',
    description: 'Study Group #322',
    event: '4'
  },
  {
    day: '02',
    month: 'Sep.',
    weekday: 'Mon.',
    time: '7:00pm ~ 9:00pm',
    title: 'NTUST (台灣科技大學)',
    description: 'Special Event #322',
    event: '5'
  },
  {
    day: '02',
    month: 'Sep.',
    weekday: 'Mon.',
    time: '7:00pm ~ 9:00pm',
    title: 'NTUST (台灣科技大學)',
    description: 'Special Event #322',
    event: '5'
  },
  {
    day: '02',
    month: 'Sep.',
    weekday: 'Mon.',
    time: '7:00pm ~ 9:00pm',
    title: 'NTUST (台灣科技大學)',
    description: 'Special Event #322',
    event: '5'
  },
  {
    day: '02',
    month: 'Sep.',
    weekday: 'Mon.',
    time: '7:00pm ~ 9:00pm',
    title: 'NTUST (台灣科技大學)',
    description: 'Special Event #322',
    event: '5'
  },
  {
    day: '02',
    month: 'Sep.',
    weekday: 'Mon.',
    time: '7:00pm ~ 9:00pm',
    title: 'NTUST (台灣科技大學)',
    description: 'Special Event #322',
    event: '5'
  }
])

const filteredClubs = computed(() => {
  if (searchClubEvent.value === '-1') {
    return clubs.value
  }
  return clubs.value.filter((event) => event.event === searchClubEvent.value)
})

const mbAboutInfo = ref(false)

const toggleMbAboutInfo = () => {
  mbAboutInfo.value = !mbAboutInfo.value
}

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// 跳轉區塊方法
const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    const offset = 70
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
    toggleMenu()
  } else if (id === 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    toggleMenu()
  }
}

const scrollToSectionPage = (id) => {
  const element = document.getElementById(id)
  if (element) {
    const offset = 70
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  } else if (id === 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

onMounted(() => {
  const verticalSwiperEl = document.querySelector('.vertical-swiper-container')
  if (verticalSwiperEl) {
    const verticalSwiper = verticalSwiperEl.swiper

    const updateVerticalSlideOpacity = () => {
      const verticalSlides = verticalSwiper.slides
      verticalSlides.forEach((verticalSlide, verticalIndex) => {
        if (
          verticalIndex === verticalSwiper.activeIndex + 3 &&
          verticalIndex !== verticalSlides.length - 1
        ) {
          verticalSlide.style.opacity = '0.5'
        } else {
          verticalSlide.style.opacity = '1'
        }
      })
    }

    const updateLastSlidePadding = () => {
      if (verticalSwiper.isEnd) {
        verticalSwiperEl.style.paddingBottom = '4px'
      } else {
        verticalSwiperEl.style.paddingBottom = '0'
      }
    }

    // 初始設置
    updateVerticalSlideOpacity()
    updateLastSlidePadding()

    // 監聽滑動事件
    verticalSwiper.on('slideChange', () => {
      updateVerticalSlideOpacity()
      updateLastSlidePadding()
    })
  }
})

// Abouts 輪播圖 > 每個分開判斷
const showArrow1 = ref(true)
const swiperInstance1 = ref(null)

const onSwiper1 = (swiper) => {
  swiperInstance1.value = swiper
  nextTick(() => {
    updateArrowVisibility1()
  })
}

const onReachEnd1 = () => {
  showArrow1.value = false
}

const onFromEdge1 = () => {
  showArrow1.value = true
}

const showArrow2 = ref(true)
const swiperInstance2 = ref(null)

const onSwiper2 = (swiper) => {
  swiperInstance2.value = swiper
  nextTick(() => {
    updateArrowVisibility2()
  })
}

const onReachEnd2 = () => {
  showArrow2.value = false
}

const onFromEdge2 = () => {
  showArrow2.value = true
}

const showArrow3 = ref(true)
const swiperInstance3 = ref(null)

const onSwiper3 = (swiper) => {
  swiperInstance3.value = swiper
  nextTick(() => {
    updateArrowVisibility3()
  })
}

const onReachEnd3 = () => {
  showArrow3.value = false
}

const onFromEdge3 = () => {
  showArrow3.value = true
}

const showArrow4 = ref(true)
const swiperInstance4 = ref(null)

const onSwiper4 = (swiper) => {
  swiperInstance4.value = swiper
  nextTick(() => {
    updateArrowVisibility4()
  })
}

const onReachEnd4 = () => {
  showArrow4.value = false
}

const onFromEdge4 = () => {
  showArrow4.value = true
}

const updateArrowVisibility1 = () => {
  if (swiperInstance1.value) {
    showArrow1.value = !swiperInstance1.value.isEnd
  }
}

const updateArrowVisibility2 = () => {
  if (swiperInstance2.value) {
    showArrow2.value = !swiperInstance2.value.isEnd
  }
}

const updateArrowVisibility3 = () => {
  if (swiperInstance3.value) {
    showArrow3.value = !swiperInstance3.value.isEnd
  }
}

const updateArrowVisibility4 = () => {
  if (swiperInstance4.value) {
    showArrow4.value = !swiperInstance4.value.isEnd
  }
}

const onSlideChange1 = () => {
  updateArrowVisibility1()
}

const onSlideChange2 = () => {
  updateArrowVisibility2()
}

const onSlideChange3 = () => {
  updateArrowVisibility3()
}

const onSlideChange4 = () => {
  updateArrowVisibility4()
}

onMounted(() => {
  nextTick(() => {
    updateArrowVisibility1()
    updateArrowVisibility2()
    updateArrowVisibility3()
    updateArrowVisibility4()
  })
})
</script>

<template>
  <main>
    <!-- * mb > menu -->
    <div
      class="z-[100] xl:hidden fixed top-0 left-0 right-0 bg-white flex px-5 justify-between items-center gap-2 py-2 rounded-es-[24px] rounded-br-[24px]"
    >
      <button class="w-[60px] shrink-0">
        <img src="@/assets/images/icon/logo.svg" class="pic-auto" alt="logo" />
      </button>

      <h1 class="text-[16px] font-medium text-center text-blue-2 sm:text-[20px]">
        Campus-based Toastmasters
      </h1>

      <button @click="toggleMenu" class="hamburger w-8 shrink-0">
        <img src="@/assets/images/icon/menu.svg" alt="開啟選單" class="pic-auto" />
      </button>

      <Transition name="navfade">
        <nav v-if="isMenuOpen" class="mobile-nav bg-blue-1 absolute top-0 left-0 right-0 z-[110]">
          <div class="flex bg-blue-2 justify-between py-4 pr-5 pl-10 items-center">
            <h1 class="text-[16px] text-white sm:text-[20px]">Campus-based Toastmasters</h1>

            <button @click="toggleMenu" class="w-8 shrink-0">
              <img src="@/assets/images/icon/x.svg" alt="關閉選單" class="pic-auto" />
            </button>
          </div>
          <div class="px-10 py-4 flex flex-col text-white font-blod gap-4 text-[24px] items-start">
            <button @click="scrollToSection('top')" class="w-full text-left">Home</button>
            <button @click="scrollToSection('about')" class="w-full text-left">About Us</button>
            <button @click="scrollToSection('events')" class="w-full text-left">Events</button>
            <button @click="scrollToSection('searchClubs')" class="w-full text-left">
              Find Clubs
            </button>
            <button class="w-full text-left">Log In</button>
          </div>
        </nav>
      </Transition>
    </div>

    <!-- *  mb > body -->
    <div class="pt-[86px] xl:hidden">
      <!-- ? home -->
      <div class="px-7" id="home">
        <h2 class="text-[19px] font-semibold text-blue-2">
          Welcome to <br />
          Campus-based Toastmasters!
        </h2>

        <div class="w-[140px] h-[2px] bg-blue-2 my-3"></div>
        <p class="font-semibold">Where Learders are Made</p>
        <div class="flex justify-between items-center mt-1">
          <p class="text-[10px]">
            Our mission is to provide a supportive<br />
            and positive learning experience.
          </p>
          <button
            @click="scrollToSectionPage('searchClubs')"
            class="text-[12px] bg-blue-1 px-3 py-2 text-white rounded-[22px]"
          >
            Find Clubs
          </button>
        </div>
      </div>

      <div class="w-full my-5">
        <img src="@/assets/images/home/pic-mb.png" class="pic-auto" alt="pic" />
      </div>

      <!-- ? events -->
      <div class="px-7" id="events">
        <div class="w-[120px] my-5">
          <img src="@/assets/images/events/events-title.svg" class="pic-auto" alt="events-title" />
        </div>

        <div class="flex flex-col gap-4">
          <div class="flex gap-4 items-center bg-blue-2 text-white py-2 px-4 rounded-full">
            <div class="flex flex-col items-center grow">
              <p class="text-[14px] font-medium underline">Regular Meeting</p>
              <p class="text-[10px] text-center">
                Weekly meeting to improve communication, public speaking, and leadership skills
                through different sessions.
              </p>
            </div>

            <button
              class="px-3 py-1 border border-white shrink-0 text-[12px] font-medium rounded-[8px]"
              @click="goToSearchClubs('1')"
            >
              learn more
            </button>
          </div>

          <div class="flex gap-4 items-center bg-blue-1 text-white py-2 px-4 rounded-full">
            <div class="flex flex-col items-center grow">
              <p class="text-[14px] font-medium underline">Joint Meeting</p>
              <p class="text-[10px] text-center">
                Collaborate with other colleges and community, company based clubs to enhance
                networking.
              </p>
            </div>

            <button
              class="px-3 py-1 border border-white shrink-0 text-[12px] font-medium rounded-[8px]"
              @click="goToSearchClubs('2')"
            >
              learn more
            </button>
          </div>

          <div class="flex gap-4 items-center bg-white text-blue-2 py-2 px-4 rounded-full">
            <div class="flex flex-col items-center grow">
              <p class="text-[14px] font-medium underline">Workshop</p>
              <p class="text-[10px] text-center">
                Sharing of exchange programs, internship and interview skills from the seniors.
              </p>
            </div>

            <button
              class="px-3 py-1 border border-blue-2 shrink-0 text-[12px] font-medium rounded-[8px]"
              @click="goToSearchClubs('3')"
            >
              learn more
            </button>
          </div>

          <div class="flex gap-4 items-center bg-blue-1 text-white py-2 px-4 rounded-full">
            <div class="flex flex-col items-center grow">
              <p class="text-[14px] font-medium underline">Study Group</p>
              <p class="text-[10px] text-center">
                Discuss and explore different topics with your peers and learn to express opinions.
              </p>
            </div>

            <button
              class="px-3 py-1 border border-white shrink-0 text-[12px] font-medium rounded-[8px]"
              @click="goToSearchClubs('4')"
            >
              learn more
            </button>
          </div>

          <div class="flex gap-4 items-center bg-blue-2 text-white py-2 px-4 rounded-full">
            <div class="flex flex-col items-center grow">
              <p class="text-[14px] font-medium underline">Special Event</p>
              <p class="text-[10px] text-center">
                Celebrate Chrismas, Holloween, New Year and other special festival with all club
                members.
              </p>
            </div>

            <button
              class="px-3 py-1 border border-white shrink-0 text-[12px] font-medium rounded-[8px]"
              @click="goToSearchClubs('5')"
            >
              learn more
            </button>
          </div>
        </div>
      </div>

      <!-- Upcoming Events -->
      <div class="w-full bg-white text-blue-1 text-center text-[20px] italic font-semibold mt-5">
        Upcoming Events
      </div>

      <div class="w-[240px] h-1 bg-blue-1 mx-auto my-3"></div>

      <div class="px-7 pb-[56px]">
        <div class="relative m-auto h-[300px] w-full">
          <swiper
            direction="vertical"
            :slides-per-view="4.1"
            :space-between="12"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            class="h-full w-full vertical-swiper-container"
          >
            <swiper-slide v-for="(event, index) in events" :key="index" class="upcoming-item">
              <div class="w-6 shrink-0">
                <img src="@/assets/images/icon/calendar.svg" class="pic-auto" alt="calendar" />
              </div>

              <div class="flex flex-col grow text-[10px]">
                <p class="font-semibold text-[11px]">{{ event.title }}</p>
                <p>{{ event.description }}</p>
                <p>{{ event.date }}</p>
              </div>

              <button
                class="text-[10px] border border-blue-2 underline px-3 py-1 rounded-[10px] font-semibold text-nowrap shrink-0"
              >
                Sign Up
              </button>
            </swiper-slide>
          </swiper>

          <div class="absolute w-10 -bottom-11 z-10 left-1/2 -translate-x-1/2">
            <img src="@/assets/images/icon/arrow-down-white.svg" class="pic-auto" alt="logo" />
          </div>
        </div>
      </div>

      <!-- ? Search Clubs -->
      <div id="searchClubs" class="bg-blue-2 px-7 py-3 flex flex-col gap-3 text-white">
        <div class="flex justify-between items-center">
          <h3 class="text-[20px] font-semibold italic">Search Clubs</h3>
          <button class="px-3 py-1 border border-white rounded-lg">All Events</button>
        </div>

        <select name="school" class="select" v-model="searchClubSchool">
          <option value="-1">Select School</option>
          <option value="1">NTUST</option>
          <option value="2">NTU</option>
          <option value="3">NCCU</option>
          <option value="4">NCTU</option>
        </select>

        <div class="relative">
          <input type="date" class="custom-date-input" v-model="searchClubDate" />
          <span v-if="!searchClubDate" class="custom-date-input-placeholder"
            >Select Meeting day</span
          >
        </div>

        <select name="event" class="select" v-model="searchClubEvent">
          <option value="-1">Select Event</option>
          <option value="1">Regular Meeting</option>
          <option value="2">Joint Meeting</option>
          <option value="3">Workshop</option>
          <option value="4">Study Group</option>
          <option value="5">Special Event</option>
        </select>

        <input type="text" class="input" placeholder="Keywords" v-model="searchClubKeyword" />

        <button
          class="bg-white px-3 py-2 rounded-[12px] self-end text-blue-2 text-[18px] font-semibold"
        >
          Search
        </button>
      </div>

      <div class="px-5 pb-[28px] mt-5">
        <div v-if="searchClubEvent === '-1'" class="relative m-auto w-full">
          <swiper
            direction="vertical"
            :slides-per-view="5"
            :space-between="12"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            class="w-full h-auto max-h-[400px]"
          >
            <swiper-slide v-for="(event, index) in clubs" :key="index" class="h-[calc(100%/5)]">
              <div class="items-center flex text-blue-2 gap-2">
                <div class="flex items-center gap-1 font-semibold shrink-0">
                  <div class="flex flex-col items-center leading-5">
                    <div class="text-[20px]">{{ event.day }}</div>
                    <div class="border-t-2 border-blue-2 text-[14px]">{{ event.month }}</div>
                  </div>
                  <div class="text-[17px]">{{ event.weekday }}</div>
                </div>

                <div class="bg-white border border-blue-2 flex p-2 items-center grow">
                  <div class="flex flex-col grow text-[10px]">
                    <p class="">{{ event.time }}</p>
                    <p class="font-medium">{{ event.title }}</p>
                    <p class="font-semibold italic text-[12px] underline">
                      {{ event.description }}
                    </p>
                  </div>

                  <button
                    class="text-[12px] border border-blue-2 underline px-2 py-1 rounded-[10px] font-semibold text-nowrap shrink-0"
                  >
                    sign up
                  </button>
                </div>
              </div>
            </swiper-slide>
          </swiper>

          <div class="absolute w-10 -bottom-7 z-10 left-1/2 -translate-x-1/2">
            <img src="@/assets/images/icon/arrow-down-blue.svg" class="pic-auto" alt="logo" />
          </div>
        </div>

        <div v-else class="relative m-auto w-full flex flex-col gap-3">
          <div
            v-for="(event, index) in filteredClubs"
            :key="index"
            class="items-center flex text-blue-2 gap-2"
          >
            <div class="flex items-center gap-1 font-semibold shrink-0">
              <div class="flex flex-col items-center leading-5">
                <div class="text-[18px]">{{ event.day }}</div>
                <div class="border-t border-blue-2 text-[12px]">{{ event.month }}</div>
              </div>
              <div class="text-[16px]">{{ event.weekday }}</div>
            </div>

            <div class="bg-white border border-blue-2 flex p-2 items-center grow">
              <div class="flex flex-col grow text-[10px]">
                <p class="">{{ event.time }}</p>
                <p class="font-medium">{{ event.title }}</p>
                <p class="font-semibold text-[12px] underline">{{ event.description }}</p>
              </div>

              <button
                class="text-[12px] border border-blue-2 underline px-3 py-1 rounded-[10px] font-semibold text-nowrap shrink-0"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Internship / Exchange / Company -->
      <div class="w-full bg-blue-2 text-white text-[27px] italic font-semibold mt-5 px-7 py-2">
        Internship / Exchange / Company
      </div>

      <!-- 換白色背景 -->
      <div class="w-full bg-white pt-2">
        <p class="px-7 text-blue-2 text-[10px] mb-4 font-semibold">
          Lectures & Sharing from the experienced seniors!
        </p>

        <div class="relative m-auto h-full w-full overflow-hidden pl-7">
          <swiper
            :slides-per-view="1.5"
            :space-between="32"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            class="h-full speech-swiper"
          >
            <swiper-slide
              class="flex h-full w-full flex-col items-center justify-center text-[12px]"
            >
              <div class="border-r-[1.5px] pr-2 border-blue-2 text-blue-2">
                <div class="text-[15px] font-semibold">
                  How to conquer<br />
                  cultural differences?
                </div>
                <div class="">
                  -Eddy Huang,<br />
                  Taipei Toastmasters
                </div>
                <div class="w-[85%] rounded-[6px] overflow-hidden">
                  <img
                    src="@/assets/images/events/speech-pic.png"
                    alt="speech-pic"
                    class="pic-auto"
                  />
                </div>
              </div>
              <div class="flex gap-1 items-center mt-2">
                <div class="w-4">
                  <img src="@/assets/images/icon/clock.svg" class="pic-auto" alt="clock" />
                </div>
                <span class="text-green-1 underline">08/24/2024 (Sat.)</span>
              </div>

              <div class="flex gap-1 items-center mt-1">
                <div class="w-4">
                  <img src="@/assets/images/icon/info.svg" class="pic-auto" alt="clock" />
                </div>
                <span class="text-green-1 underline">more info</span>
              </div>
            </swiper-slide>

            <swiper-slide
              class="flex h-full w-full flex-col items-center justify-center text-[12px]"
            >
              <div class="border-r-[1.5px] pr-2 border-blue-2 text-blue-2">
                <div class="text-[15px] font-semibold">
                  How to conquer<br />
                  cultural differences?
                </div>
                <div class="">
                  -Eddy Huang,<br />
                  Taipei Toastmasters
                </div>
                <div class="w-[85%] rounded-[6px] overflow-hidden">
                  <img
                    src="@/assets/images/events/speech-pic.png"
                    alt="speech-pic"
                    class="pic-auto"
                  />
                </div>
              </div>
              <div class="flex gap-1 items-center mt-2">
                <div class="w-4">
                  <img src="@/assets/images/icon/clock.svg" class="pic-auto" alt="clock" />
                </div>
                <span class="text-green-1 underline">08/24/2024 (Sat.)</span>
              </div>

              <div class="flex gap-1 items-center mt-1">
                <div class="w-4">
                  <img src="@/assets/images/icon/info.svg" class="pic-auto" alt="clock" />
                </div>
                <span class="text-green-1 underline">more info</span>
              </div>
            </swiper-slide>

            <swiper-slide
              class="flex h-full w-full flex-col items-center justify-center text-[12px]"
            >
              <div class="border-r-[1.5px] pr-2 border-blue-2 text-blue-2">
                <div class="text-[15px] font-semibold">
                  How to conquer<br />
                  cultural differences?
                </div>
                <div class="">
                  -Eddy Huang,<br />
                  Taipei Toastmasters
                </div>
                <div class="w-[85%] rounded-[6px] overflow-hidden">
                  <img
                    src="@/assets/images/events/speech-pic.png"
                    alt="speech-pic"
                    class="pic-auto"
                  />
                </div>
              </div>
              <div class="flex gap-1 items-center mt-2">
                <div class="w-4">
                  <img src="@/assets/images/icon/clock.svg" class="pic-auto" alt="clock" />
                </div>
                <span class="text-green-1 underline">08/24/2024 (Sat.)</span>
              </div>

              <div class="flex gap-1 items-center mt-1">
                <div class="w-4">
                  <img src="@/assets/images/icon/info.svg" class="pic-auto" alt="clock" />
                </div>
                <span class="text-green-1 underline">more info</span>
              </div>
            </swiper-slide>
          </swiper>
        </div>

        <!-- Toastmasters 介紹 -->
        <div class="flex flex-col gap-7 mt-8 items-center max-w-[260px] mx-auto pb-5">
          <div class="bg-bg flex flex-col items-center px-8 py-2 gap-2 rounded-[40px] text-center">
            <h4 class="italic text-[18px] font-bold leading-4">What is</h4>
            <h4 class="text-[18px] font-bold leading-4">Toastmasters</h4>
            <div class="w-10">
              <img
                src="@/assets/images/icon/question-black.svg"
                class="pic-auto"
                alt="question-black"
              />
            </div>
            <p class="text-[12px]">
              Toastmasters International (TI) is a nonprofit educational organization that operates
              clubs worldwide for helping people develop public speaking, communication, and
              leadership skills.
            </p>
          </div>

          <div class="bg-bg flex flex-col items-center px-8 py-2 gap-2 rounded-[40px] text-center">
            <h4 class="italic text-[18px] font-bold leading-4">Why</h4>
            <h4 class="text-[18px] leading-4">Toastmasters</h4>
            <div class="w-10">
              <img
                src="@/assets/images/icon/magnifier-black.svg"
                class="pic-auto"
                alt="magnifier-black"
              />
            </div>
            <p class="text-[12px]">
              Improve your prodessional skills in a supportive environment. Join us to gain
              confidence, receive constructive feedback, and connect with a diverse community of
              learners. All levels welcome!
            </p>
          </div>

          <div class="bg-bg flex flex-col items-center px-8 py-2 gap-2 rounded-[40px] text-center">
            <h4 class="italic text-[18px] font-bold leading-4">How to join</h4>
            <h4 class="text-[18px] leading-4">Toastmasters</h4>
            <div class="w-10">
              <img
                src="@/assets/images/icon/people-black.svg"
                class="pic-auto"
                alt="people-black"
              />
            </div>
            <p class="text-[12px]">
              Find a club near you and contact their official account directly or fill up the
              regestration form.
            </p>

            <div class="flex justify-center gap-3 items-center">
              <div class="w-8">
                <img
                  src="@/assets/images/icon/icon-arrow-right-black.svg"
                  class="pic-auto"
                  alt="people-black"
                />
              </div>
              <button
                class="text-blue-2 bg-white border border-blue-2 rounded-full px-4 py-2 text-[14px] font-medium"
                @click="scrollToSectionPage('searchClubs')"
              >
                Find a club
              </button>
            </div>
          </div>
        </div>

        <!-- ? about us -->
        <div
          id="about"
          class="w-full bg-blue-2 text-white text-[27px] italic font-semibold mt-5 px-7 py-2"
        >
          About Us!
        </div>

        <!-- 台大國際英語演講社 -->
        <div class="my-4 px-7 flex gap-2 items-center">
          <div class="w-10 shrink-0">
            <img src="@/assets/images/icon/NTU.svg" class="pic-auto" alt="NTU" />
          </div>

          <p class="text-blue-2 leading-5 font-bold grow">
            台大國際英語演講社<br />NTU Toastmasters
          </p>

          <div class="w-8 shrink-0">
            <img src="@/assets/images/icon/fb.svg" class="pic-auto" alt="fb" />
          </div>
          <div class="w-8 shrink-0">
            <img src="@/assets/images/icon/ig.svg" class="pic-auto" alt="ig" />
          </div>
        </div>

        <div class="relative m-auto h-full w-full overflow-hidden pl-7">
          <swiper
            :slides-per-view="2.7"
            :space-between="20"
            @swiper="onSwiper1"
            @slideChange="onSlideChange1"
            @reachEnd="onReachEnd1"
            @fromEdge="onFromEdge1"
            class="h-full"
          >
            <swiper-slide
              class="flex h-full w-full flex-col items-center justify-center text-[14px]"
            >
              <div class="w-full relative">
                <img src="@/assets/images/about/person1.png" class="pic-auto" alt="person1" />
                <div
                  class="absolute inset-0 px-2 bg-white bg-opacity-40 flex justify-center items-center text-center font-bold text-blue-2"
                >
                  Jousha Lin President
                </div>
              </div>
            </swiper-slide>
            <swiper-slide
              class="flex h-full w-full flex-col items-center justify-center text-[14px]"
            >
              <div class="w-full relative">
                <img src="@/assets/images/about/person2.png" class="pic-auto" alt="person" />
                <div
                  class="absolute inset-0 px-2 bg-white bg-opacity-40 flex justify-center items-center text-center font-bold text-blue-2"
                >
                  Kelly Chen VPE
                </div>
              </div>
            </swiper-slide>
            <swiper-slide
              class="flex h-full w-full flex-col items-center justify-center text-[14px]"
            >
              <div class="w-full relative">
                <img src="@/assets/images/about/person3.png" class="pic-auto" alt="person" />
                <div
                  class="absolute inset-0 px-2 bg-white bg-opacity-40 flex justify-center items-center text-center font-bold text-blue-2"
                >
                  Kelly Chen VPM
                </div>
              </div>
            </swiper-slide>
            <swiper-slide
              class="flex h-full w-full flex-col items-center justify-center text-[14px]"
            >
              <div class="w-full relative">
                <img src="@/assets/images/about/person4.png" class="pic-auto" alt="person" />
                <div
                  class="absolute inset-0 px-2 bg-white bg-opacity-40 flex justify-center items-center text-center font-bold text-blue-2"
                >
                  Patty Yang VPPR
                </div>
              </div>
            </swiper-slide>
            <swiper-slide
              class="flex h-full w-full flex-col items-center justify-center text-[14px]"
            >
              <div class="w-full relative">
                <img src="@/assets/images/about/person5.png" class="pic-auto" alt="person" />
                <div
                  class="absolute inset-0 px-2 bg-white bg-opacity-40 flex justify-center items-center text-center font-bold text-blue-2"
                >
                  Cathy Lin SAA
                </div>
              </div>
            </swiper-slide>
          </swiper>

          <!-- 滑到最後一張時隱藏 -->
          <div v-show="showArrow1" class="absolute w-10 right-4 z-10 top-1/2 -translate-y-1/2">
            <img src="@/assets/images/icon/arrow-right-blue.svg" class="pic-auto" alt="logo" />
          </div>
        </div>

        <!-- 台科大國際英語演講社 -->
        <div class="my-4 px-7 flex gap-2 items-center">
          <div class="w-10 shrink-0">
            <img src="@/assets/images/icon/NTUT.svg" class="pic-auto" alt="NTUT" />
          </div>

          <p class="text-blue-2 leading-5 font-bold grow">
            台科大國際英語演講社<br />NTUST Toastmasters
          </p>

          <div class="w-8 shrink-0">
            <img src="@/assets/images/icon/fb.svg" class="pic-auto" alt="fb" />
          </div>
          <div class="w-8 shrink-0">
            <img src="@/assets/images/icon/ig.svg" class="pic-auto" alt="ig" />
          </div>
        </div>
        <div class="relative m-auto h-full w-full overflow-hidden pl-7">
          <swiper
            :slides-per-view="2.7"
            :space-between="20"
            @swiper="onSwiper2"
            @slideChange="onSlideChange2"
            @reachEnd="onReachEnd2"
            @fromEdge="onFromEdge2"
            class="h-full"
          >
            <swiper-slide
              class="flex h-full w-full flex-col items-center justify-center text-[14px]"
            >
              <div class="w-full relative">
                <img src="@/assets/images/about/person1.png" class="pic-auto" alt="person1" />
                <div
                  class="absolute inset-0 px-2 bg-white bg-opacity-40 flex justify-center items-center text-center font-bold text-blue-2"
                >
                  Jousha Lin President
                </div>
              </div>
            </swiper-slide>
            <swiper-slide
              class="flex h-full w-full flex-col items-center justify-center text-[14px]"
            >
              <div class="w-full relative">
                <img src="@/assets/images/about/person2.png" class="pic-auto" alt="person" />
                <div
                  class="absolute inset-0 px-2 bg-white bg-opacity-40 flex justify-center items-center text-center font-bold text-blue-2"
                >
                  Kelly Chen VPE
                </div>
              </div>
            </swiper-slide>
            <swiper-slide
              class="flex h-full w-full flex-col items-center justify-center text-[14px]"
            >
              <div class="w-full relative">
                <img src="@/assets/images/about/person3.png" class="pic-auto" alt="person" />
                <div
                  class="absolute inset-0 px-2 bg-white bg-opacity-40 flex justify-center items-center text-center font-bold text-blue-2"
                >
                  Kelly Chen VPM
                </div>
              </div>
            </swiper-slide>
            <swiper-slide
              class="flex h-full w-full flex-col items-center justify-center text-[14px]"
            >
              <div class="w-full relative">
                <img src="@/assets/images/about/person4.png" class="pic-auto" alt="person" />
                <div
                  class="absolute inset-0 px-2 bg-white bg-opacity-40 flex justify-center items-center text-center font-bold text-blue-2"
                >
                  Patty Yang VPPR
                </div>
              </div>
            </swiper-slide>
            <swiper-slide
              class="flex h-full w-full flex-col items-center justify-center text-[14px]"
            >
              <div class="w-full relative">
                <img src="@/assets/images/about/person5.png" class="pic-auto" alt="person" />
                <div
                  class="absolute inset-0 px-2 bg-white bg-opacity-40 flex justify-center items-center text-center font-bold text-blue-2"
                >
                  Cathy Lin SAA
                </div>
              </div>
            </swiper-slide>
          </swiper>

          <!-- 滑到最後一張時隱藏 -->
          <div v-show="showArrow2" class="absolute w-10 right-4 z-10 top-1/2 -translate-y-1/2">
            <img src="@/assets/images/icon/arrow-right-blue.svg" class="pic-auto" alt="logo" />
          </div>
        </div>

        <Transition name="fade">
          <div v-show="mbAboutInfo">
            <!-- 台大國際英語演講社 -->
            <div class="my-4 px-7 flex gap-2 items-center">
              <div class="w-10 shrink-0">
                <img src="@/assets/images/icon/NTU.svg" class="pic-auto" alt="NTU" />
              </div>

              <p class="text-blue-2 leading-5 font-bold grow">
                台大國際英語演講社<br />NTU Toastmasters
              </p>

              <div class="w-8 shrink-0">
                <img src="@/assets/images/icon/fb.svg" class="pic-auto" alt="fb" />
              </div>
              <div class="w-8 shrink-0">
                <img src="@/assets/images/icon/ig.svg" class="pic-auto" alt="ig" />
              </div>
            </div>
            <div class="relative m-auto h-full w-full overflow-hidden pl-7">
              <swiper
                :slides-per-view="2.7"
                :space-between="20"
                @swiper="onSwiper3"
                @slideChange="onSlideChange3"
                @reachEnd="onReachEnd3"
                @fromEdge="onFromEdge3"
                class="h-full"
              >
                <swiper-slide
                  class="flex h-full w-full flex-col items-center justify-center text-[14px]"
                >
                  <div class="w-full relative">
                    <img src="@/assets/images/about/person1.png" class="pic-auto" alt="person1" />
                    <div
                      class="absolute inset-0 px-2 bg-white bg-opacity-40 flex justify-center items-center text-center font-bold text-blue-2"
                    >
                      Jousha Lin President
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide
                  class="flex h-full w-full flex-col items-center justify-center text-[14px]"
                >
                  <div class="w-full relative">
                    <img src="@/assets/images/about/person2.png" class="pic-auto" alt="person" />
                    <div
                      class="absolute inset-0 px-2 bg-white bg-opacity-40 flex justify-center items-center text-center font-bold text-blue-2"
                    >
                      Kelly Chen VPE
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide
                  class="flex h-full w-full flex-col items-center justify-center text-[14px]"
                >
                  <div class="w-full relative">
                    <img src="@/assets/images/about/person3.png" class="pic-auto" alt="person" />
                    <div
                      class="absolute inset-0 px-2 bg-white bg-opacity-40 flex justify-center items-center text-center font-bold text-blue-2"
                    >
                      Kelly Chen VPM
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide
                  class="flex h-full w-full flex-col items-center justify-center text-[14px]"
                >
                  <div class="w-full relative">
                    <img src="@/assets/images/about/person4.png" class="pic-auto" alt="person" />
                    <div
                      class="absolute inset-0 px-2 bg-white bg-opacity-40 flex justify-center items-center text-center font-bold text-blue-2"
                    >
                      Patty Yang VPPR
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide
                  class="flex h-full w-full flex-col items-center justify-center text-[14px]"
                >
                  <div class="w-full relative">
                    <img src="@/assets/images/about/person5.png" class="pic-auto" alt="person" />
                    <div
                      class="absolute inset-0 px-2 bg-white bg-opacity-40 flex justify-center items-center text-center font-bold text-blue-2"
                    >
                      Cathy Lin SAA
                    </div>
                  </div>
                </swiper-slide>
              </swiper>

              <div v-show="showArrow3" class="absolute w-10 right-4 z-10 top-1/2 -translate-y-1/2">
                <img src="@/assets/images/icon/arrow-right-blue.svg" class="pic-auto" alt="logo" />
              </div>
            </div>

            <!-- 台科大國際英語演講社 -->
            <div class="my-4 px-7 flex gap-2 items-center">
              <div class="w-10 shrink-0">
                <img src="@/assets/images/icon/NTUT.svg" class="pic-auto" alt="NTUT" />
              </div>

              <p class="text-blue-2 leading-5 font-bold grow">
                台科大國際英語演講社<br />NTUST Toastmasters
              </p>

              <div class="w-8 shrink-0">
                <img src="@/assets/images/icon/fb.svg" class="pic-auto" alt="fb" />
              </div>
              <div class="w-8 shrink-0">
                <img src="@/assets/images/icon/ig.svg" class="pic-auto" alt="ig" />
              </div>
            </div>
            <div class="relative m-auto h-full w-full overflow-hidden pl-7">
              <swiper
                :slides-per-view="2.7"
                :space-between="20"
                @swiper="onSwiper4"
                @slideChange="onSlideChange4"
                @reachEnd="onReachEnd4"
                @fromEdge="onFromEdge4"
                class="h-full"
              >
                <swiper-slide
                  class="flex h-full w-full flex-col items-center justify-center text-[14px]"
                >
                  <div class="w-full relative">
                    <img src="@/assets/images/about/person1.png" class="pic-auto" alt="person1" />
                    <div
                      class="absolute inset-0 px-2 bg-white bg-opacity-40 flex justify-center items-center text-center font-bold text-blue-2"
                    >
                      Jousha Lin President
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide
                  class="flex h-full w-full flex-col items-center justify-center text-[14px]"
                >
                  <div class="w-full relative">
                    <img src="@/assets/images/about/person2.png" class="pic-auto" alt="person" />
                    <div
                      class="absolute inset-0 px-2 bg-white bg-opacity-40 flex justify-center items-center text-center font-bold text-blue-2"
                    >
                      Kelly Chen VPE
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide
                  class="flex h-full w-full flex-col items-center justify-center text-[14px]"
                >
                  <div class="w-full relative">
                    <img src="@/assets/images/about/person3.png" class="pic-auto" alt="person" />
                    <div
                      class="absolute inset-0 px-2 bg-white bg-opacity-40 flex justify-center items-center text-center font-bold text-blue-2"
                    >
                      Kelly Chen VPM
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide
                  class="flex h-full w-full flex-col items-center justify-center text-[14px]"
                >
                  <div class="w-full relative">
                    <img src="@/assets/images/about/person4.png" class="pic-auto" alt="person" />
                    <div
                      class="absolute inset-0 px-2 bg-white bg-opacity-40 flex justify-center items-center text-center font-bold text-blue-2"
                    >
                      Patty Yang VPPR
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide
                  class="flex h-full w-full flex-col items-center justify-center text-[14px]"
                >
                  <div class="w-full relative">
                    <img src="@/assets/images/about/person5.png" class="pic-auto" alt="person" />
                    <div
                      class="absolute inset-0 px-2 bg-white bg-opacity-40 flex justify-center items-center text-center font-bold text-blue-2"
                    >
                      Cathy Lin SAA
                    </div>
                  </div>
                </swiper-slide>
              </swiper>

              <div v-show="showArrow4" class="absolute w-10 right-4 z-10 top-1/2 -translate-y-1/2">
                <img src="@/assets/images/icon/arrow-right-blue.svg" class="pic-auto" alt="logo" />
              </div>
            </div>
          </div>
        </Transition>

        <div class="flex flex-col items-center mt-7 gap-1 pb-[52px]">
          <p
            class="bg-bg text-blue-2 py-1 px-3 text-[18px] font-bold rounded-[10px]"
            v-if="!mbAboutInfo"
          >
            learn more
          </p>
          <button
            class="w-[52px] transition-transform duration-300"
            :class="mbAboutInfo ? 'rotate-180' : ''"
            @click="toggleMbAboutInfo"
          >
            <img src="@/assets/images/icon/arrow-down-blue.svg" class="pic-auto" alt="logo" />
          </button>
        </div>

        <div class="flex flex-col items-center gap-4 text-blue-2 pb-7">
          <p class="text-[34px] font-bold italic">Get in touch!</p>
          <p class="text-[12px]">
            If you have any question,<br />
            feel free to contact us!
          </p>

          <button class="w-[52px]">
            <img src="@/assets/images/icon/call.svg" class="pic-auto" alt="logo" />
          </button>
        </div>

        <div
          class="flex justify-between gap-1 text-white bg-blue-2 text-[10px] font-light p-4 flex-wrap"
        >
          <p>Where leaders are made</p>
          <p>campus-based Toastmasters</p>
        </div>
      </div>
    </div>

    <!-- * pc -->
    <div class="hidden xl:block">
      <div class="max-w-1280 px-[96px] py-8" data-aos="fade-up">
        <h2 class="text-[68px] font-semibold text-blue-2">
          Welcome to <br />
          Campus-based Toastmasters!
        </h2>
      </div>
      <div class="w-full" data-aos="fade-up">
        <img src="@/assets/images/home/pic.png" class="pic-auto" alt="pic" />
      </div>
      <div class="max-w-1280 px-[96px] py-8" data-aos="fade-up">
        <p class="font-semibold text-[36px] italic">Where Learders are Made</p>
        <div class="flex items-center mt-1">
          <p class="text-[24px] shrink-0">
            Our mission is to provide a supportive<br />
            and positive learning experience.
          </p>
          <div class="grow flex justify-end gap-5">
            <RouterLink
              to="/events"
              class="text-[20px] bg-blue-1 min-w-[176px] text-center py-3 text-white rounded-full"
              >Find Events</RouterLink
            >
            <RouterLink
              to="/clubs"
              class="text-[20px] bg-blue-1 min-w-[176px] text-center py-3 text-white rounded-full"
              >Find Clubs</RouterLink
            >
            <RouterLink
              to="/about"
              class="text-[20px] bg-blue-1 min-w-[176px] text-center py-3 text-white rounded-full"
              >About Us</RouterLink
            >
          </div>
        </div>
      </div>

      <!-- ? Toastmasters 介紹 -->
      <div data-aos="fade-up">
        <div class="mt-8 mx-auto">
          <div
            class="px-[140px] grid grid-cols-3 gap-[180px] items-start text-white bg-blue-2 pt-5 pb-2"
          >
            <div class="flex flex-col items-center gap-4 text-center">
              <div>
                <h4 class="italic text-[32px] font-bold leading-[38px]">What is</h4>
                <h4 class="text-[32px] font-bold leading-[38px]">Toastmasters</h4>
              </div>
              <div class="w-16">
                <img src="@/assets/images/icon/question.svg" class="pic-auto" alt="question" />
              </div>
              <p class="text-[16px]">
                Toastmasters International (TI) is a nonprofit educational organization that
                operates clubs worldwide for helping people develop public speaking, communication,
                and leadership skills.
              </p>
            </div>

            <div class="flex flex-col items-center gap-4 text-center">
              <div>
                <h4 class="italic text-[32px] font-bold leading-[38px]">Why</h4>
                <h4 class="text-[32px] leading-[38px]">Toastmasters</h4>
              </div>
              <div class="w-16">
                <img src="@/assets/images/icon/magnifier.svg" class="pic-auto" alt="magnifier" />
              </div>
              <p class="text-[16px]">
                Improve your prodessional skills in a supportive environment. Join us to gain
                confidence, receive constructive feedback, and connect with a diverse community of
                learners. All levels welcome!
              </p>
            </div>

            <div class="flex flex-col items-center gap-4 text-center">
              <div>
                <h4 class="italic text-[32px] font-bold leading-[38px]">How to join</h4>
                <h4 class="text-[32px] leading-[38px]">Toastmasters</h4>
              </div>
              <div class="w-16">
                <img src="@/assets/images/icon/people.svg" class="pic-auto" alt="people" />
              </div>
              <p class="text-[16px]">
                Find a club near you and contact their official account directly or fill up the
                regestration form.
              </p>

              <div class="flex justify-center gap-3 items-center">
                <div class="w-10">
                  <img
                    src="@/assets/images/icon/arrow-right-white.svg"
                    class="pic-auto"
                    alt="arrow-right-white"
                  />
                </div>
                <RouterLink
                  to="/clubs"
                  class="text-blue-2 bg-white border border-blue-2 rounded-full px-5 py-3 text-[24px] font-medium"
                >
                  Find a club
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full">
          <img
            src="@/assets/images/events/triangle.svg"
            class="pic-auto -translate-y-[1px]"
            alt="triangle"
          />
        </div>
      </div>

      <!-- * Info -->
      <div class="flex flex-col items-center gap-4 text-blue-2 pb-10 mt-[80px]" data-aos="fade-up">
        <p class="text-[56px] font-bold italic">Get in touch!</p>
        <p class="text-[18px]">
          If you have any question,<br />
          feel free to contact us!
        </p>

        <button class="w-[80px] mt-3">
          <img src="@/assets/images/icon/call.svg" class="pic-auto" alt="logo" />
        </button>
      </div>

      <div class="text-white bg-blue-2 text-[20px] font-light p-4 mb-7">
        <div class="max-w-1280 px-[96px] flex justify-between">
          <p>Where leaders are made</p>
          <p>campus-based Toastmasters</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.navfade-enter-active,
.navfade-leave-active {
  transition: all 0.4s ease-in-out;
}

.navfade-enter-from,
.navfade-leave-to {
  transform: translatey(-350px);
}

.upcoming-item {
  @apply bg-white flex p-4 mx-[4px] rounded-lg items-center gap-2 text-blue-2 w-full relative;
}

.upcoming-item::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: -4px 4px 0px 0px var(--blue-2);
  border-radius: inherit;
  pointer-events: none;
}

.rotate-180 {
  transform: rotate(-180deg);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  transform: translatey(20px);
  height: 0;
  opacity: 0;
}

::v-deep .speech-swiper .swiper-wrapper .swiper-slide-next {
  opacity: 0.6;
}
</style>
