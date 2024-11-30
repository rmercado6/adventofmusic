<script setup>
defineProps({
  day: Object
});
</script>

<template>
  <a v-if="day.class.includes('past') || day.class.includes('active')" :class="'event ' + day.class"
     :href="'#' + day.day">
    <h3 class="flex justify-end md:items-end items-center md:gap-3 gap-2 w-full">
      <span>{{day.day}}</span>
    </h3>
    <span class="emoji" v-html="markdown.render(day.emoji)"></span>
  </a>
  <div v-else :class="'event cursor-default ' + day.class">
    <h3 class="flex justify-end md:items-end items-center md:gap-3 gap-2 w-full">
      <span v-if="day.class.includes('upcoming')" class="md:text-lg text-xs">🎁</span>
      <span>{{day.day}}</span>
    </h3>
  </div>
</template>

<style scoped>
.event {
  @apply flex flex-col aspect-square p-1 md:p-3 border md:border-4 border-slate-300;
}

.event.past {
  @apply border-green opacity-50;
}

.event.active {
  @apply border-red;
}

.event.upcoming {
  @apply text-slate-500 opacity-85;
}

.event.disabled {
  @apply text-slate-400 opacity-30;
}

.emoji {
  @apply text-sm font-mono md:flex hidden grow;
}
</style>
