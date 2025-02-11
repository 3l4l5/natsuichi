<script setup lang="ts"></script>

<template>
  <div class="body">
    <div class="header">
      <div class="header_component">
        <router-link to="/"
          ><h1 class="text-4xl p-2 py-4 font-black text-sky-600 font-sans">
            赤城ナツイチ
          </h1></router-link
        >
        <div class="menu_component">
          <router-link to="/"><span class="menu">🏠ホーム</span></router-link> |
          <router-link outer-link to="/comics"><span class="menu">📚まんが</span></router-link> |
          <router-link to="/work"><span class="menu">🖋れんらく</span></router-link
          >|
          <router-link to="/work"><span class="menu">🖼️イラスト</span></router-link>
        </div>
        <hr class="hr_up" />
        <hr class="hr_down" />
      </div>
    </div>
    <div class="contents">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.site_title {
  font-size: 2rem;
  margin: 10px;
  padding: 0;
  color: #219fff;
}

.body {
  width: 100vw;
}
.header {
  /* position: fixed; */
  position: sticky;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  /* padding: 0px 40px; */
  /* box-sizing: border-box; */
  background: #ffffff;
}

.header_component {
  size: 100%;
  background: #ffffff;
}

.contents {
  margin: auto;
  width: 95%;
}
.menu {
  margin: 0 5px;
  color: #000;
}

.menu_component {
  margin: 5px 5px;
  font-size: min(2vmax, 14px);
}

hr.hr_up {
  margin: 10px 0 0 0;
}
hr.hr_down {
  margin: 2px 0 2px 0;
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
</style>
