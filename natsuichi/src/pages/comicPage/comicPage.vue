<script setup lang="ts">
import { ref, computed }  from 'vue'
const comicList = [
  {
    preview: "https://pub-d7468921a5ea45d1a7ca87426b5beb75.r2.dev/1/0.webp",
    title: "8ビートのハイハット",
    description: "",
    id: "1",
  }
]
const hoverFlag = ref(false)
const mouseOverAction = computed(() => {
    hoverFlag.value = true
})
const mouseLeaveAction = computed(() => {
    hoverFlag.value = false
})
</script>

<template>
  <div>
    <div class="about">
      <div v-for="image in comicList" :key="image" class="preview">
        <a v-bind:href="`${image.id}`">
          <img :src="image.preview" />
          <p>{{ image.title }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<style>
img {
  width: 30vw;
  height: auto;
  min-width: 100px;
  max-width: 200px;
}
.about {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 300px));
  gap: 24px 6%;
}
</style>
