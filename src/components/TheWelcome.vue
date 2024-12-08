<script setup>
import {ref} from "vue";
import {useApiStore} from '@/stores/api';
import DayDisplay from "@/components/DayDisplay.vue";
import DayDescription from "@/components/DayDescription.vue";

const api = useApiStore();
const days = ref(['Sunday', 'Monday', 'Thursday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])

api.load()
</script>

<template>
  <div class="w-full min-h-screen flex items-center justify-center flex-col relative">
    <h1 class="border-b-4 border-b-gold w-full md:w-2/3 3xl:w-1/3 max-w-3xl text-center pb-4">
      🎄
      Advent of Music
      🎼
    </h1>
    <div class="w-full md:w-2/3 3xl:w-1/3 max-w-3xl text-justify flex flex-col gap-3">
      <p>Get ready for a festive, musical adventure this December! 🌟 The Advent of Music challenge invites you to
        compose new pieces throughout the month, with a fresh task waiting for you every day. Each challenge will
        guide you step by step — from creating beautiful melodies, to crafting counter melodies, arranging a four-part
        chorale, and even orchestrating for different ensembles! 🎼✨ The tasks will be increasing in complexity every
        day. By the end of the challenge you will end with new pieces to share and will have improved your composing
        skills by practicing.</p>

      <p>Whether you're a seasoned composer or just starting out, this is a fun way to hone your skills and stay
        inspired this holiday season. 🎄🎶</p>

      <p>We’d love to hear your compositions! Share them on social media using the hashtag
        <span class="font-semibold">#AdventOfMusic</span> and join the growing community of composers celebrating the
        season through music! 🎉</p>

      <p>Are you ready to compose your Christmas music magic? Let’s get started! 🎅🎵</p>
    </div>

    <span v-if="api.loading"
          class="absolute inset-x-0 bottom-10 animate-bounce text-xs text-slate-500 font-mono w-full text-center">
      Loading...
    </span>
  </div>
  <div v-if="api.loading" class="flex flex-col items-center justify-center">
    <span class="animate-ping text-7xl" v-html="markdown.render(':christmas_tree:')">
    </span>
  </div>
  <div v-if="!api.loading" class="flex flex-col md:h-screen pb-3 items-center py-12 md:py-6">
    <h2 class="mb-6">December 2024</h2>
    <div>
      <div class="grid grid-cols-7 md:gap-3 gap-1 max-w-3xl aspect-video">
        <div v-for="day in days" :key="day" class="day hidden md:flex">{{day}}</div>
        <div v-for="day in days" :key="day" class="day md:hidden flex">{{day[0]}}</div>
        <DayDisplay v-for="item in api.data" :key="item.day" :day="item"></DayDisplay>
      </div>
    </div>
  </div>

  <div v-if="!api.loading" class="flex flex-col items-center w-full divide-y divide-slate-300">
    <DayDescription
      v-for="item in api.data.filter(d => (!d.class.includes('disabled')) && !d.class.includes('upcoming')).sort((a, b) => {return b.day - a.day})"
      :key="item.day" :day="item">
    </DayDescription>
  </div>
</template>

<style scoped>
.day {
  @apply w-full justify-center items-center text-slate-400;
}
</style>
