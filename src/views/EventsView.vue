<script setup>
import { ref, computed, onMounted } from 'vue'

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
    const offsetPosition = elementPosition - 180

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
    day: '',
    month: '',
    weekday: '',
    time: '7:00pm ~ 9:00pm',
    title: 'NCCU (政治大學) ',
    description: 'Regular Meeting #322',
    event: '1'
  },
  {
    day: '04',
    month: 'Sep.',
    weekday: 'Wed.',
    time: '7:00pm ~ 9:00pm',
    title: 'NTU (台灣大學) ',
    description: 'Joint Meeting #322',
    event: '2'
  },
  {
    day: '05',
    month: 'Sep.',
    weekday: 'Thu.',
    time: '7:00pm ~ 9:00pm',
    title: 'FJU (輔仁大學) ',
    description: 'Workshop #322',
    event: '3'
  },
  {
    day: '06',
    month: 'Sep.',
    weekday: 'Fri.',
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

import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

// const onSwiper = (swiper) => {
//   console.log(swiper)
// }

// const onSlideChange = () => {
//   console.log('slide change')
// }

onMounted(() => {
  const swiperEl = document.querySelector('.swiper-container-internship')
  if (swiperEl) {
    const swiper = swiperEl.swiper

    const updateSlideOpacity = () => {
      const slides = swiper.slides
      slides.forEach((slide, index) => {
        if (index === swiper.activeIndex + 2 && index !== slides.length - 1) {
          slide.style.opacity = '0.5'
        } else {
          slide.style.opacity = '1'
        }
      })
    }

    // 初始設置
    updateSlideOpacity()

    // 監聽滑動事件
    swiper.on('slideChange', updateSlideOpacity)
  }
})

onMounted(() => {
  const verticalSwiperEl = document.querySelector('.vertical-swiper-container')
  if (verticalSwiperEl) {
    const verticalSwiper = verticalSwiperEl.swiper

    const updateVerticalSlideOpacity = () => {
      const verticalSlides = verticalSwiper.slides
      verticalSlides.forEach((verticalSlide, verticalIndex) => {
        if (
          verticalIndex === verticalSwiper.activeIndex + 4 &&
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
        verticalSwiperEl.style.paddingBottom = '8px'
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
</script>

<template>
  <div class="about">
    <div class="max-w-1280 px-[96px] py-4">
      <div class="grid grid-cols-2 gap-20 items-center" data-aos="fade-up">
        <div>
          <div class="w-[310px] mt-5 mb-8">
            <img
              src="@/assets/images/events/events-title.svg"
              class="pic-auto"
              alt="events-title"
            />
          </div>
          <div class="flex flex-col gap-12">
            <div class="flex gap-10 items-center bg-blue-2 text-white py-2 px-8 rounded-full">
              <div class="flex flex-col items-center grow">
                <p class="text-[24px] font-medium pl-5 underline">Regular Meeting</p>
                <p class="text-[10px] text-center">
                  Weekly meeting to improve communication, public speaking, and leadership skills
                  through different sessions.
                </p>
              </div>

              <button
                class="px-3 py-1 border-2 border-white shrink-0 text-[14px] font-medium rounded-full"
                @click="goToSearchClubs('1')"
              >
                learn more
              </button>
            </div>

            <div class="flex gap-10 items-center bg-blue-1 text-white py-2 px-8 rounded-full">
              <div class="flex flex-col items-center grow">
                <p class="text-[24px] font-medium pl-5 underline">Joint Meeting</p>
                <p class="text-[10px] text-center">
                  Collaborate with other colleges and community, company based clubs to enhance
                  networking.
                </p>
              </div>

              <button
                class="px-3 py-1 border-2 border-white shrink-0 text-[14px] font-medium rounded-full"
                @click="goToSearchClubs('2')"
              >
                learn more
              </button>
            </div>

            <div class="flex gap-10 items-center bg-white text-blue-2 py-2 px-8 rounded-full">
              <div class="flex flex-col items-center grow">
                <p class="text-[24px] font-medium pl-5 underline">Workshop</p>
                <p class="text-[10px] text-center">
                  Sharing of exchange programs, internship and interview skills from the seniors.
                </p>
              </div>

              <button
                class="px-3 py-1 border-2 border-blue-2 shrink-0 text-[14px] font-medium rounded-full"
                @click="goToSearchClubs('3')"
              >
                learn more
              </button>
            </div>

            <div class="flex gap-10 items-center bg-blue-1 text-white py-2 px-8 rounded-full">
              <div class="flex flex-col items-center grow">
                <p class="text-[24px] font-medium pl-5 underline">Study Group</p>
                <p class="text-[10px] text-center">
                  Discuss and explore different topics with your peers and learn to express
                  opinions.
                </p>
              </div>

              <button
                class="px-3 py-1 border-2 border-white shrink-0 text-[14px] font-medium rounded-full"
                @click="goToSearchClubs('4')"
              >
                learn more
              </button>
            </div>

            <div class="flex gap-10 items-center bg-blue-2 text-white py-2 px-8 rounded-full">
              <div class="flex flex-col items-center grow">
                <p class="text-[24px] font-medium pl-5 underline">Special Event</p>
                <p class="text-[10px] text-center">
                  Celebrate Chrismas, Holloween, New Year and other special festival with all club
                  members.
                </p>
              </div>

              <button
                class="px-3 py-1 border-2 border-white shrink-0 text-[14px] font-medium rounded-full"
                @click="goToSearchClubs('5')"
              >
                learn more
              </button>
            </div>
          </div>
        </div>
        <div class="">
          <!-- Upcoming Events -->
          <div class="flex justify-center">
            <div
              class="text-blue-1 text-center text-[34px] italic font-semibold pb-1 border-b-[6px] border-blue-1"
            >
              Upcoming Events
            </div>
          </div>

          <div class="relative m-auto h-[510px] w-full mt-5">
            <swiper
              direction="vertical"
              :slides-per-view="5.1"
              :space-between="20"
              @swiper="onSwiper"
              @slideChange="onSlideChange"
              class="h-full w-full vertical-swiper-container"
            >
              <swiper-slide v-for="(event, index) in events" :key="index" class="upcoming-item">
                <div class="w-9 shrink-0">
                  <img src="@/assets/images/icon/calendar.svg" class="pic-auto" alt="calendar" />
                </div>

                <div class="flex flex-col grow text-[10px]">
                  <p class="font-semibold text-[13px] mb-1">{{ event.title }}</p>
                  <p class="text-[12px] mb-[2px] font-light">{{ event.description }}</p>
                  <p class="text-[12px] font-light">{{ event.date }}</p>
                </div>

                <button
                  class="text-[11px] border-[4px] border-blue-2 underline px-5 py-[6px] rounded-full font-semibold text-nowrap shrink-0"
                >
                  Agenda
                </button>

                <button
                  class="text-[11px] border-[4px] border-blue-2 underline px-5 py-[6px] rounded-full font-semibold text-nowrap shrink-0"
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
      </div>
    </div>

    <div class="relative m-auto h-full w-full overflow-hidden mt-8 mb-20" data-aos="fade-up">
      <swiper
        :slides-per-view="3"
        :space-between="20"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        class="h-full"
        :centered-slides="true"
        :loop="true"
      >
        <swiper-slide class="flex h-full w-full flex-col items-center justify-center">
          <div class="w-full relative rounded-[24px] overflow-hidden">
            <img src="@/assets/images/events/p1.png" class="pic-auto" alt="p1" />
          </div>
        </swiper-slide>
        <swiper-slide class="flex h-full w-full flex-col items-center justify-center">
          <div class="w-full relative rounded-[24px] overflow-hidden">
            <img src="@/assets/images/events/p2.png" class="pic-auto" alt="p2" />
          </div>
        </swiper-slide>
        <swiper-slide class="flex h-full w-full flex-col items-center justify-center">
          <div class="w-full relative rounded-[24px] overflow-hidden">
            <img src="@/assets/images/events/p3.png" class="pic-auto" alt="p3" />
          </div>
        </swiper-slide>
        <swiper-slide class="flex h-full w-full flex-col items-center justify-center">
          <div class="w-full relative rounded-[24px] overflow-hidden">
            <img src="@/assets/images/events/p4.png" class="pic-auto" alt="p4" />
          </div>
        </swiper-slide>
        <swiper-slide class="flex h-full w-full flex-col items-center justify-center">
          <div class="w-full relative rounded-[24px] overflow-hidden">
            <img src="@/assets/images/events/p5.png" class="pic-auto" alt="p5" />
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <!-- ? Search Clubs -->
    <div
      id="searchClubs"
      class="bg-blue-2 px-7 py-5 flex gap-3 text-white font-semibold justify-center"
      data-aos="fade-up"
    >
      <button class="px-4 py-2 border-4 border-white rounded-full shrink-0 max-w-[15%]">
        All Events
      </button>

      <select name="school" class="select-pc shrink-0 max-w-[15%]" v-model="searchClubSchool">
        <option value="-1">Select School</option>
        <option value="1">NTUST</option>
        <option value="2">NTU</option>
        <option value="3">NCCU</option>
        <option value="4">NCTU</option>
      </select>

      <div class="relative shrink-0 min-w-[18%]">
        <input type="date" class="custom-date-input-pc h-full w-full" v-model="searchClubDate" />
        <span v-if="!searchClubDate" class="custom-date-input-placeholder-pc"
          >Select Meeting day</span
        >
      </div>

      <select name="event" class="select-pc shrink-0 max-w-[15%]" v-model="searchClubEvent">
        <option value="-1">Select Event</option>
        <option value="1">Regular Meeting</option>
        <option value="2">Joint Meeting</option>
        <option value="3">Workshop</option>
        <option value="4">Study Group</option>
        <option value="5">Special Event</option>
      </select>

      <input
        type="text"
        class="input-pc shrink-0 max-w-[13%]"
        placeholder="Keywords..."
        v-model="searchClubKeyword"
      />

      <button
        class="bg-white px-4 py-3 rounded-full self-end text-blue-2 text-[18px] font-semibold shrink-0 max-w-[10%] h-full"
      >
        Search
      </button>
    </div>

    <div class="max-w-1280 px-[96px] py-8" data-aos="fade-up">
      <div class="pb-[28px]">
        <div v-if="searchClubEvent === '-1'" class="relative m-auto w-full">
          <swiper
            direction="vertical"
            :slides-per-view="5"
            :space-between="20"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            class="w-full max-h-[500px]"
          >
            <swiper-slide v-for="(event, index) in clubs" :key="index" class="">
              <div class="items-center flex text-blue-2 gap-2">
                <div class="flex items-center gap-2 font-semibold shrink-0 w-[140px]">
                  <div class="flex flex-col items-center">
                    <div class="text-[42px] leading-[40px]">{{ event.day }}</div>
                    <div class="border-t-4 border-blue-2 text-[24px] leading-[32px]">
                      {{ event.month }}
                    </div>
                  </div>
                  <div class="text-[30px] w-[90px] text-center font-bold">{{ event.weekday }}</div>
                </div>

                <div class="bg-white border-4 border-blue-2 flex py-2 px-4 items-center grow">
                  <div class="flex items-center grow text-[16px]">
                    <div class="min-w-[240px]">
                      <p class="font-light">{{ event.time }}</p>
                      <p class="font-semibold text-[20px]">{{ event.title }}</p>
                    </div>
                    <p class="font-semibold italic text-[30px] underline text-center grow">
                      {{ event.description }}
                    </p>
                  </div>

                  <button
                    class="text-[14px] border-4 border-blue-2 underline px-4 py-1 rounded-full font-semibold text-nowrap shrink-0 mr-8"
                  >
                    agenda
                  </button>
                  <button
                    class="text-[14px] border-4 border-blue-2 underline px-4 py-1 rounded-full font-semibold text-nowrap shrink-0"
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
            <div class="flex items-center gap-2 font-semibold shrink-0 w-[140px]">
              <div class="flex flex-col items-center">
                <div class="text-[42px] leading-[40px]">{{ event.day }}</div>
                <div class="border-t-4 border-blue-2 text-[24px] leading-[32px]">
                  {{ event.month }}
                </div>
              </div>
              <div class="text-[30px] w-[90px] text-center font-bold">{{ event.weekday }}</div>
            </div>

            <div class="bg-white border-4 border-blue-2 flex py-2 px-4 items-center grow">
              <div class="flex items-center grow text-[16px]">
                <div class="min-w-[240px]">
                  <p class="font-light">{{ event.time }}</p>
                  <p class="font-semibold text-[20px]">{{ event.title }}</p>
                </div>
                <p class="font-semibold italic text-[30px] underline text-center grow">
                  {{ event.description }}
                </p>
              </div>

              <button
                class="text-[14px] border-4 border-blue-2 underline px-4 py-1 rounded-full font-semibold text-nowrap shrink-0 mr-8"
              >
                agenda
              </button>
              <button
                class="text-[14px] border-4 border-blue-2 underline px-4 py-1 rounded-full font-semibold text-nowrap shrink-0"
              >
                sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Internship / Exchange / Company -->
    <div
      class="w-full bg-blue-2 text-white text-[58px] italic font-semibold mt-14 py-8"
      data-aos="fade-up"
    >
      <div class="max-w-1280 px-[80px]">Internship / Exchange / Company</div>
    </div>

    <div class="max-w-1280 px-[80px]">
      <p class="text-blue-2 text-[30px] my-5 font-semibold ml-7" data-aos="fade-up">
        Lectures & Sharing from the experienced seniors!
      </p>

      <div class="relative m-auto h-full w-full overflow-hidden pl-7 mb-20" data-aos="fade-up">
        <swiper
          :slides-per-view="2.55"
          :space-between="60"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          class="h-full swiper-container-internship"
        >
          <swiper-slide
            class="flex h-full w-full flex-col items-center justify-center text-[16px] swiper-slide"
          >
            <div class="border-r-[5px] border-blue-2 text-blue-2">
              <div class="bg-white mr-[60px] p-4 rounded-[24px]">
                <div class="text-[22px] leading-6 font-semibold">
                  How to conquer<br />
                  cultural differences?
                </div>
                <div class="font-light">
                  -Eddy Huang,<br />
                  Taipei Toastmasters
                </div>
                <div class="w-[70%] rounded-[12px] overflow-hidden">
                  <img
                    src="@/assets/images/events/speech-pic.png"
                    alt="speech-pic"
                    class="pic-auto"
                  />
                </div>
                <div class="flex gap-2 items-center mt-4">
                  <div class="w-6">
                    <img src="@/assets/images/icon/clock.svg" class="pic-auto" alt="clock" />
                  </div>
                  <span class="text-green-1 underline">08/24/2024 (Sat.)</span>
                </div>

                <div class="flex gap-2 items-center mt-2">
                  <div class="w-6">
                    <img src="@/assets/images/icon/info.svg" class="pic-auto" alt="clock" />
                  </div>
                  <span class="text-green-1 underline">more info</span>
                </div>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide
            class="flex h-full w-full flex-col items-center justify-center text-[16px] swiper-slide"
          >
            <div class="border-r-[5px] border-blue-2 text-blue-2">
              <div class="bg-white mr-[60px] p-4 rounded-[24px]">
                <div class="text-[22px] leading-6 font-semibold">
                  Useful interview <br />
                  skills!
                </div>
                <div class="font-light">
                  -Mike Yang,<br />
                  Challengers Toastmasters
                </div>
                <div class="w-[70%] rounded-[12px] overflow-hidden">
                  <img
                    src="@/assets/images/events/speech-pic.png"
                    alt="speech-pic"
                    class="pic-auto"
                  />
                </div>
                <div class="flex gap-2 items-center mt-4">
                  <div class="w-6">
                    <img src="@/assets/images/icon/clock.svg" class="pic-auto" alt="clock" />
                  </div>
                  <span class="text-green-1 underline">08/24/2024 (Sat.)</span>
                </div>

                <div class="flex gap-2 items-center mt-2">
                  <div class="w-6">
                    <img src="@/assets/images/icon/info.svg" class="pic-auto" alt="clock" />
                  </div>
                  <span class="text-green-1 underline">more info</span>
                </div>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide
            class="flex h-full w-full flex-col items-center justify-center text-[16px] swiper-slide"
          >
            <div class="border-r-[5px] border-blue-2 text-blue-2">
              <div class="bg-white mr-[60px] p-4 rounded-[24px]">
                <div class="text-[22px] leading-6 font-semibold">
                  How to conquer<br />
                  cultural differences?
                </div>
                <div class="font-light">
                  -Eddy Huang,<br />
                  Taipei Toastmasters
                </div>
                <div class="w-[70%] rounded-[12px] overflow-hidden">
                  <img
                    src="@/assets/images/events/speech-pic.png"
                    alt="speech-pic"
                    class="pic-auto"
                  />
                </div>
                <div class="flex gap-2 items-center mt-4">
                  <div class="w-6">
                    <img src="@/assets/images/icon/clock.svg" class="pic-auto" alt="clock" />
                  </div>
                  <span class="text-green-1 underline">08/24/2024 (Sat.)</span>
                </div>

                <div class="flex gap-2 items-center mt-2">
                  <div class="w-6">
                    <img src="@/assets/images/icon/info.svg" class="pic-auto" alt="clock" />
                  </div>
                  <span class="text-green-1 underline">more info</span>
                </div>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide
            class="flex h-full w-full flex-col items-center justify-center text-[16px] swiper-slide"
          >
            <div class="border-r-[5px] border-blue-2 text-blue-2">
              <div class="bg-white mr-[60px] p-4 rounded-[24px]">
                <div class="text-[22px] leading-6 font-semibold">
                  How to conquer<br />
                  cultural differences?
                </div>
                <div class="font-light">
                  -Eddy Huang,<br />
                  Taipei Toastmasters
                </div>
                <div class="w-[70%] rounded-[12px] overflow-hidden">
                  <img
                    src="@/assets/images/events/speech-pic.png"
                    alt="speech-pic"
                    class="pic-auto"
                  />
                </div>
                <div class="flex gap-2 items-center mt-4">
                  <div class="w-6">
                    <img src="@/assets/images/icon/clock.svg" class="pic-auto" alt="clock" />
                  </div>
                  <span class="text-green-1 underline">08/24/2024 (Sat.)</span>
                </div>

                <div class="flex gap-2 items-center mt-2">
                  <div class="w-6">
                    <img src="@/assets/images/icon/info.svg" class="pic-auto" alt="clock" />
                  </div>
                  <span class="text-green-1 underline">more info</span>
                </div>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide
            class="flex h-full w-full flex-col items-center justify-center text-[16px] swiper-slide"
          >
            <div class="border-r-[5px] border-blue-2 text-blue-2">
              <div class="bg-white mr-[60px] p-4 rounded-[24px]">
                <div class="text-[22px] leading-6 font-semibold">
                  How to conquer<br />
                  cultural differences?
                </div>
                <div class="font-light">
                  -Eddy Huang,<br />
                  Taipei Toastmasters
                </div>
                <div class="w-[70%] rounded-[12px] overflow-hidden">
                  <img
                    src="@/assets/images/events/speech-pic.png"
                    alt="speech-pic"
                    class="pic-auto"
                  />
                </div>
                <div class="flex gap-2 items-center mt-4">
                  <div class="w-6">
                    <img src="@/assets/images/icon/clock.svg" class="pic-auto" alt="clock" />
                  </div>
                  <span class="text-green-1 underline">08/24/2024 (Sat.)</span>
                </div>

                <div class="flex gap-2 items-center mt-2">
                  <div class="w-6">
                    <img src="@/assets/images/icon/info.svg" class="pic-auto" alt="clock" />
                  </div>
                  <span class="text-green-1 underline">more info</span>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <div class="text-white bg-blue-2 text-[20px] font-light p-4 mb-7">
      <div class="max-w-1280 px-[96px] flex justify-between">
        <p>Where leaders are made</p>
        <p>campus-based Toastmasters</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.upcoming-item {
  @apply bg-white flex py-3 px-5 mx-[6px] rounded-lg items-center gap-4 text-blue-2 w-[98%] relative;
}

.upcoming-item::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: -6px 6px 0px 0px var(--blue-2);
  border-radius: inherit;
  pointer-events: none;
}

.swiper-slide {
  transition: opacity 0.3s ease;
}

.vertical-swiper-container {
  transition: padding-bottom 0.3s ease;
}

.upcoming-item {
  transition: opacity 0.3s ease;
}
</style>
