<script setup>
defineProps({
  day: Object
})
</script>

<template>
  <div :id="day.day" :class="'detail ' + day.class">
    <span class="text-slate-500">Dec {{day.day}}</span>
    <h3 class="grow mb-1 flex gap-2">
      <span>{{day.title}}</span>
      <span v-html="markdown.render(day.emoji)"></span>
    </h3>
    <div class="flex gap-1 mb-3">
        <span v-for="pill in day.tags" :key="pill" class="pill">
          {{pill}}
        </span>
    </div>
    <span v-if="day.body" v-html="markdown.render(day.body)"></span>
  </div>
</template>

<style scoped>
.detail {
  @apply max-w-3xl w-full py-3 px-7 flex flex-col my-3;
}

.detail.past {
  @apply border border-8 border-green opacity-65;
}

.detail.active {
  @apply border border-8 border-red;
}

.pill {
  @apply py-0.5 px-1 rounded-md border border-lavender text-midnight bg-lavender font-thin font-mono text-xs;
}
</style>
