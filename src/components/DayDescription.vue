<script setup>
import {ref} from "vue";

const props = defineProps({
  day: Object
})

const extended = ref(false);

if (props.day.class.includes('active')) {
  extended.value = true;
}
</script>

<template>
  <div :id="day.day" :class="'detail ' + day.class">
    <div class="flex flex-col cursor-pointer group" @click="extended = !extended">
      <div class="flex text-slate-500">
        <span class="grow">Dec {{day.day}}</span>
        <h4 :class="extended ? 'extend-btn' : 'extend-btn rotate-180'">^</h4>
      </div>
      <h3 class="grow mb-1 flex gap-2">
        <span>{{day.title}}</span>
        <span v-html="markdown.render(day.emoji)"></span>
      </h3>
    </div>
    <div v-if="extended" class="flex gap-1 mb-3">
        <span v-for="pill in day.tags" :key="pill" class="pill">
          {{pill}}
        </span>
    </div>
    <div v-if="day.body && extended" v-html="markdown.render(day.body)" :class="'markdown ' + day.class"></div>
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
  @apply py-0.5 px-1 rounded-md border border-lavender text-midnight bg-lavender/60 font-thin font-mono text-xs;
}

.markdown {
  @apply mb-3 text-justify;
}

.extend-btn {
  @apply font-mono text-slate-400 group-hover:text-slate-600 group-hover:font-semibold group-hover:animate-pulse;
}
</style>
