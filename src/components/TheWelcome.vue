<script setup>
import {ref} from "vue";
import json from '@/assets/days.json'
import DayDisplay from "@/components/DayDisplay.vue";
import DayDescription from "@/components/DayDescription.vue";

const days = ref(['Sunday', 'Monday', 'Thursday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])
const data = ref(json);
</script>

<template>
  <div class="w-full min-h-screen flex items-center justify-center flex-col">
    <h1 class="border-b-4 border-b-gold w-full md:w-2/3 3xl:w-1/3 max-w-3xl text-center pb-4">
      🎄
      Advent of Music
      🎼
    </h1>
    <div class="w-full md:w-2/3 3xl:w-1/3 max-w-3xl text-justify flex flex-col gap-3">
      <p>This holiday season, unlock your creativity with a unique Advent Calendar designed for musicians, composers,
        and music lovers alike. From December 1st to December 25th, embark on a daily challenge that will inspire new
        ideas, techniques, and compositions. Each day reveals a new prompt or task — from composing a melody in a
        specific style to experimenting with unusual time signatures or harmonies. Whether you're a seasoned composer or
        just starting out, these challenges are crafted to inspire growth, creativity, and fun.</p>

      <p>As you open each gift 🎁, you'll find a fresh prompt that pushes the boundaries of your musical expression. By
        December 25th, you'll have a portfolio of 25 unique musical creations, each one a testament to your dedication
        and imagination.</p>

      <p>Perfect for solo composers, music students, or anyone looking to explore the art of composition in a structured
        yet playful way, this Advent Calendar is the ultimate way to celebrate the festive season while honing your
        craft.</p>

      <p>Share your compositions on social media using the hashtag #AdventOfMusic and connect with fellow musicians
        throughout the season. By Christmas, you’ll have 25 unique pieces to celebrate your progress and creativity!</p>

      <p>Get ready to compose, create, and celebrate the holiday spirit through music!</p>
    </div>

  </div>
  <div class="flex flex-col md:h-screen pb-3 items-center py-12 md:py-6">
    <h2 class="mb-6">December 2024</h2>
    <div>
      <div class="grid grid-cols-7 md:gap-3 gap-1 max-w-3xl aspect-video">
        <div v-for="day in days" :key="day" class="day hidden md:flex">{{day}}</div>
        <div v-for="day in days" :key="day" class="day md:hidden flex">{{day[0]}}</div>
        <DayDisplay v-for="item in data" :key="item.day" :day="item"></DayDisplay>
      </div>
    </div>
  </div>

  <div class="mt-12 flex flex-col items-center w-full divide-y divide-slate-300 min-h-screen">
    <DayDescription v-for="item in data.filter(d => (!d.class.includes('disabled')) && !d.class.includes('upcoming'))"
                    :key="item.day" :day="item">
    </DayDescription>
  </div>
</template>

<style scoped>
.day {
  @apply w-full justify-center items-center text-slate-400;
}
</style>
