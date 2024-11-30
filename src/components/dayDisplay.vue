<script setup>
import {ref} from "vue";

defineProps({
  day: Object
});
</script>

<template>
  <a :class="'event ' + day.class" :href="'#' + day.day">
    <h3 class="flex justify-end md:items-end items-center md:gap-3 gap-2 w-full">
      <span v-if="day.class.includes('upcoming')" class="md:text-lg text-xs">🎁</span>
      <span>{{day.day}}</span>
    </h3>
    <span class="emoji">
      {{day.emoji}}
    </span>
  </a>
</template>

<style scoped>
.event {
  @apply flex flex-col aspect-square p-1 md:p-3 border md:border-4 border-slate-200;
}

.event.past {
  @apply border-green opacity-50;
}

.event.active {
  @apply border-red;
}

.event.upcoming {
  @apply text-slate-500 opacity-75;
}

.event.disabled {
  @apply text-slate-400 opacity-40;
}
.emoji {
  @apply text-sm font-mono md:flex hidden grow;
}
</style>
