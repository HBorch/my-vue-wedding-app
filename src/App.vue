<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Image of Bodil & Henrik" class="headerphoto" src="./assets/bodiloghenrik4.JPG" width="250" height="250"/>
    <img alt="Text Bodil & Henrik" class="headertekst" src="./assets/Bodil&HenrikTekst.png" />

    <div class="wrapper">

      <nav>
        <RouterLink to="/">Hjem</RouterLink>
        <RouterLink to="/informasjon">Info</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/reise">Reise og opphold</RouterLink>
        <RouterLink to="/ønsker">Ønsker</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
.headerphoto {
  display: block;
  border-radius: 50%;
  margin: 0 auto 2rem;
}
.headertekst {
  display: block;
  margin: 0 auto 2rem;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
