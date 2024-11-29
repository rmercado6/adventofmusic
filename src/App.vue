<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
  <footer>
    <p>A site by <a href="https://rmercado.dev">rmercado.dev</a></p>
  </footer>
</template>

<style scoped>
footer {
  @apply flex items-center justify-center text-slate-400 text-sm p-3 mt-10;
}
</style>
