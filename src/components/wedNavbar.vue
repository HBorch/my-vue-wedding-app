<template>
    <nav>
        <RouterLink to="/">Hjem</RouterLink>
        <RouterLink to="/informasjon">Info</RouterLink>
        <RouterLink to="/reise">Reise og opphold</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/bilder">Bilder</RouterLink>
        <RouterLink to="/ønsker">Ønsker</RouterLink>
    </nav>
</template>

<script> </script>

<style scoped>
nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    padding: 15px;
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
  a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}
  @media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

  /*@media (min-width: 1024px) {
  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem; 
  }
}*/
</style>

