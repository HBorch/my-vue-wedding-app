<script setup>
import { RouterLink, RouterView } from 'vue-router'
import wedNavbar from './components/wedNavbar.vue'
import wedFooter from './components/wedFooter.vue'
import wedHeader from './components/wedHeader.vue'
</script>

<template>
  <wedHeader></wedHeader>
  <wedNavbar></wedNavbar>
  <RouterView />
  <wedFooter></wedFooter>
</template>

<style>
@font-face {
  font-family: "Brighte";
  src:url(../src/assets/fonts/BrighteTTf.ttf) format("truetype");
}
</style>
