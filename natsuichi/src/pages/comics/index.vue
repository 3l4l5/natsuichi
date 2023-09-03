<script setup lang="ts">
import { ref, computed }  from 'vue'
const comicList = [
  {
    preview: "https://pub-d7468921a5ea45d1a7ca87426b5beb75.r2.dev/1/0.webp",
    title: "8ビートのハイハット",
    description: "",
    id: "1",
  },
  {
    preview: "https://pub-d7468921a5ea45d1a7ca87426b5beb75.r2.dev/2/0.webp",
    title: "いいやつなんだろうけどさ",
    description: "",
    id: "2",
  },
  {
    preview: "https://pub-d7468921a5ea45d1a7ca87426b5beb75.r2.dev/0/0.webp",
    title: "",
    description: "",
    id: "#",
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
    <div class="preview_container">
      <div v-for="image in comicList" :key="image.preview" class="preview">
        <a v-bind:href="`/comics/${image.id}`">
          <div class="comic_preview">
            <img class="comic_preview_image" :src="image.preview" />
            <p class="comicTitle">{{ image.title }}</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.preview_container {
  padding: 5px 0;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, 150px);
}

@media(max-width: 400px){
    .preview_container {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}


img {
  width: 50%;
  height: auto;
  pointer-events: none;
  width: 100%;
  height: auto;
}

.comic_preview_image {
  border: solid 1px #777777; /* 色：グレー */
}
.comicTitle {
  text-align: center;
  color:black;
  padding: 2px;
  margin: 2px
}
</style>
