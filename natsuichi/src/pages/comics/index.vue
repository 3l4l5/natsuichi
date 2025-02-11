<script setup lang="ts">
import { ref, type Ref, computed, onMounted } from 'vue'
import { ComicRepository } from '../../domain/repository/ComicRepository'
import { Comic } from '../../domain/models/Comic'

const comicList: Ref<Comic[] | null> = ref(null)

onMounted(async () => {
  try {
    const comicRepo = new ComicRepository()
    const fetchedComicList = await comicRepo.fetchComicList()
    comicList.value = fetchedComicList
  } catch (error) {
    console.error('Error fetching comic list:', error)
  }
})
</script>

<template>
  <div>
    <div class="preview_container">
      <div v-for="image in comicList" :key="image.preview" class="preview drop-shadow-sm">
        <div class="p-2">
          <a v-if="image.other" v-bind:href="image.url" target="_blank">
            <div class="comic_preview">
              <div class="comic_preview_rectangle">
                <img class="comic_preview_image" :src="image.preview" />
                <div class="comic_info" v-if="image.title">
                  <p class="comicTitle">
                    {{ image.title }}<img src="@/assets/newTab.svg" class="inline-block h-[1rem]" />
                  </p>
                  <p class="publishedAt">{{ image.publishedAt.toLocaleDateString() }}</p>
                  <p class="pageCount">{{ image.pages.length }}ページ</p>
                  <p class="comicDescription">{{ image.shortDescription }}</p>
                </div>
              </div>
            </div>
          </a>
          <a v-else-if="image.id != '0'" v-bind:href="`/comics/${image.id}`">
            <div class="comic_preview">
              <div class="comic_preview_rectangle">
                <img class="comic_preview_image" :src="image.preview" />
                <div class="comic_info" v-if="image.title">
                  <p class="comicTitle">{{ image.title }}</p>
                  <p class="publishedAt">{{ image.publishedAt.toLocaleDateString() }}</p>
                  <p class="pageCount">{{ image.pages.length }}ページ</p>
                  <p class="comicDescription">{{ image.shortDescription }}</p>
                </div>
              </div>
            </div>
          </a>
          <a v-else v-bind:href="`/comics/#`">
            <div class="comic_preview">
              <div class="comic_preview_rectangle">
                <img class="comic_preview_image" :src="image.preview" />
              </div>
            </div>
          </a>
        </div>
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

.inline-image {
  height: 1.5em; /* 文字の大きさに合わせる */
  /* position: relative; */
  /* display: inline; */
  vertical-align: middle;
}

.comic_preview_image {
  pointer-events: none;
  /* width: 100%;
  height: auto; */
  width: 170px;
  height: 239.7px;
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

.comicDescription {
  text-align: center;
  color: rgb(63, 63, 63);
  padding-inline: 10px;
  margin: 0px;
  font-size: 80%;
}
</style>
