<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { ComicRepository } from "../../domain/repository/ComicRepository"

const comicList = ref()
onMounted(async () => {
  try {
    const comicRepo = new ComicRepository()
    const fetchedComicList = await comicRepo.fetchComicList()
    comicList.value = fetchedComicList
  } catch (error) {
    console.error('Error fetching comic list:', error)
  }
})

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
            <div class="comic_preview_rectangle">
              <img class="comic_preview_image" :src="image.preview" />
              <div class="comic_info" v-if="image.title">
                <p class="comicTitle">{{ image.title }}</p>
                <p class="publishedAt">{{ image.publishedAt.toLocaleDateString() }}</p>
                <p class="pageCount">{{ image.pages }}ページ</p>
              </div>
            </div>
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
  grid-template-columns: repeat(auto-fit, 200px);
}

@media (max-width: 400px) {
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
  color: black;
  padding-top: 2px;
  padding-bottom: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 90%;
}
.pageCount {
  text-align: center;
  color: rgb(63, 63, 63);
  padding: 0px;
  margin: 0px;
  font-size: 80%;
}

.publishedAt {
  text-align: center;
  color: rgb(63, 63, 63);
  padding: 0px;
  margin: 0px;
  font-size: 80%;
}
</style>
