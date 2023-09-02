<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <div class="header">
    <router-link to="/"><h1>赤城ナツイチ</h1></router-link>
    <router-link to="/"><span class="menu">🏠HOME</span></router-link> | 
    <router-link to="/comics"><span class="menu">📚まんが</span></router-link> | 
    <router-link to="/work"><span class="menu">🖋おしごと</span></router-link>
    <hr class="hr_up">
    <hr class="hr_down">
  </div>
    <router-view />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
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
hr.hr_up {
  margin: 20px 0 0 0;
}
hr.hr_down {
  margin: 2px 0 20px 0;
}

.menu {
  margin: 0 10px;
  color: #000;
}
</style>
