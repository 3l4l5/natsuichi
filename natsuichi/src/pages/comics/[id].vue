<script setup lang="ts">
import { ref, type Ref, computed, onMounted } from 'vue'
import { ComicRepository } from '../../domain/repository/ComicRepository'
import { Comic } from '../../domain/models/Comic'
import  TwitterShareButton  from '../../components/parts/TwitterShareButton.vue'

// define props section
const props = defineProps<{
  id: string
}>()
let comic: Ref<Comic | null> = ref(null)
let descriptions: Ref<string[]> = ref([])
import {useRoute} from "vue-router";

const route = useRoute();
const path = route.path
onMounted(async () => {
  try {
    const comicRepo = new ComicRepository()
    const fetchedComic = await comicRepo.fetchComic(props.id)
    comic.value = fetchedComic
    descriptions.value = fetchedComic.description.split('\n')
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
    <div class="lastPageDescription">
      <p class="comicTitle">「{{ comic.title }}」</p>
      <div class="descriptionContainer">
        <p v-for="description in descriptions" :key="description" class="comicDescription">{{ description }}</p>
      </div>
      <p class="publishedAt">{{ comic.publishedAt.toLocaleDateString() }}</p>
      <TwitterShareButton :title=comic.title :url=path />
    </div>
    </div>
  </div>
</template>

<style scoped>
.comicTitle {
  font-size: 20px;
  font-weight: bold;
  color: #303030;
}
.lastPageDescription {
  text-align: center;
  padding-top: 30px;
  padding-bottom: 30px;
}
.descriptionContainer {
  text-align: left;
  margin: 0 auto;
  width: 60%;
}
.comicDescription {
  font-size: 14px;
  color: #8d8d8d;
}
.publishedAt {
  font-size: 14px;
  color: #8d8d8d;
}
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
