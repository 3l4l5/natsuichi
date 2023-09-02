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
      <div v-for="image in comicList" :key="image.preview" class="preview">
        <a v-bind:href="`/comics/${image.id}`">
          <img class="comic_preview" :src="image.preview" />
          <p class="comicTitle">{{ image.title }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<style>
img {
  width: 50%;
  height: auto;
}

.comic_preview {
  border: solid 1px #777777; /* 色：グレー */
}
.comicTitle {
  text-align: center;
  color:black;
}
</style>
