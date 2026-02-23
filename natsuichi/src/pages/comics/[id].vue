<script setup lang="ts">
import { ref, type Ref, computed, onMounted } from 'vue'
import { ComicRepository } from '../../domain/repository/ComicRepository'
import { Comic } from '../../domain/models/Comic'
import TwitterShareButton from '../../components/parts/TwitterShareButton.vue'
// define props section
const props = defineProps<{
  id: string
}>()
let comic: Ref<Comic | null> = ref(null)
let descriptions: Ref<string[]> = ref([])
import { useRoute } from 'vue-router'

const route = useRoute()
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
  <div class="grid grid-cols-1 justify-items-center gap-4 h-screen">
    <template v-if="comic">
      <template v-for="page in comic.pages" :key="page">
        <div class="h-auto">
          <img class="my-3 shadow-lg" :src="page" />
          <hr />
        </div>
      </template>
      <div class="lastPageDescription">
        <span v-if="comic.link !== undefined">
          <a v-bind:href="comic.link" target="_blank">
            <u class="comicTitle">「{{ comic.title }}」</u> 
          </a>
        </span>
        <span v-if="comic.link === undefined">
          <p class="comicTitle">「{{ comic.title }}」</p>
        </span>
        <div class="descriptionContainer">
          <p v-for="description in descriptions" :key="description" class="comicDescription">
            {{ description }}
          </p>
        </div>
        <p class="publishedAt">{{ comic.publishedAt.toLocaleDateString() }}</p>

      </div>
    </template>
    <div class="footer flex justify-center" v-if="comic">
      <div>
        <div class="spacer"></div>
        <TwitterShareButton :title="comic.title" :url="path" />
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
  padding-bottom: 0px;
}
.descriptionContainer {
  text-align: left;
  margin: 0 auto;
  width: 60%;
  margin-inline: auto;
  max-inline-size: max-content;
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

.footer {
  position: sticky;
  bottom: 0;
  height: 70px;
  width: 100%;
  padding: 40px, 0px;
  background-color: #ffffff;
  z-index: 2;
}
.spacer {
  height: 10px;
  width: 100%;
  background-color: #ffffff;
}
.hooter-hr {
  z-index: 1;
}

.inline-image {
  height: 1.5em; /* 文字の大きさに合わせる */
  /* position: relative; */
  /* display: inline; */
  vertical-align: middle;
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
