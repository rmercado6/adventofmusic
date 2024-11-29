<script setup>
defineProps({
  day: Object
});
</script>

<template>
  <div :class="day.class">
    <h3 class="flex items-end gap-3">
      <span v-if="day.class.includes('upcoming')" class="text-lg">🎁</span>
      <span>{{day.day}}</span>
    </h3>
    <div class="flex flex-col grow items-center justify-center w-full">
      <div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.day {
  @apply !justify-start !items-end flex flex-col;
}

.event {
  @apply aspect-square p-3 border border-4 border-slate-100;
}

.event.past {
  @apply border-green-600 opacity-50;
}

.event.active {
  @apply border-red-200;
}

.event.upcoming {
  @apply text-slate-500 opacity-75;
}

.event.disabled {
  @apply text-slate-400 opacity-40;
}
</style>
