<script setup lang="ts">
import { ref, type Ref, computed, onMounted } from 'vue'
import { ComicRepository } from '../../domain/repository/ComicRepository'
import { Comic } from '../../domain/models/Comic'

// define props section
const props = defineProps<{
  id: string
}>()
let comic: Ref<Comic | null> = ref(null)
onMounted(async () => {
  try {
    const comicRepo = new ComicRepository()
    const fetchedComic = await comicRepo.fetchComic(props.id)
    comic.value = fetchedComic
  } catch (error) {
    console.error('Error fetching comic list:', error)
  }
})
</script>

<template>
  <div class="page_container">
    <div v-if="comic">
      <div  v-for="page in comic.pages" :key="page">
      <img :src="page" />
      <hr />
    </div>
    <div class="lastPageDescription"></div>
    </div>
  </div>
</template>

<style scoped>
.page_container {
  /* display: flex;
  justify-content: center; */
  text-align: center;
}
img {
  width: 100%;
  height: auto;
  text-align: center;
  pointer-events: none;
}

/* 画像が横幅に合わせる場合のメディアクエリ */
@media screen and (max-width: 921px) {
  img {
    width: 100%;
    height: auto;
  }
}

/* 画像が縦幅に合わせる場合のメディアクエリ */
@media screen and (min-width: 921px) {
  img {
    width: auto;
    height: 100vh;
  }
}
</style>
