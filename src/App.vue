<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
  <footer class="flex flex-col gap-3">
    <span class="border-t border-slate-200 w-full max-w-3xl mx-12"></span>
    <p class="mb-8 mt-4">A site by <a href="https://rmercado.dev" class="hover:underline hover:font-semibold">rmercado.dev</a></p>
  </footer>
</template>

<style scoped>
footer {
  @apply flex items-center justify-center text-slate-400 text-sm p-3 mt-10;
}
</style>
