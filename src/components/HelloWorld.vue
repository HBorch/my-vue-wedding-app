<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <header>
    <h1>Bodil og Henrik</h1>
    <h3>27. mai 2023 - Voksenåsen Hotell</h3>
  </header>

  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h1>Test</h1>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
