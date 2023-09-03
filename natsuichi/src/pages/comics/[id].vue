<script setup lang="ts">
import { ref } from 'vue'

// define props section
const props = defineProps<{
  id: string
}>()

// define type section

type Comic = {
  title: string
  id: string
  pages: string[]
}

// define function section
const getComicList = (id: string): Comic => {
  const lastPageDict = [
    {
      comicId: "1",
      pages: 40
    },
    {
      comicId: "2",
      pages: 32
    }
  ]
  const cdnDomain: string = "pub-d7468921a5ea45d1a7ca87426b5beb75.r2.dev"
  const maxPage = lastPageDict.find((obj) => obj.comicId === id)?.pages;
  const comicList = [
    {
      title: "test",
      id: id,
      pages: [...Array(maxPage).keys()].map(i => `https://${cdnDomain}/${id}/${i + 1}.webp`)
    }
  ]
  const comicListFiltered = comicList.filter(comic => comic.id === id)
  if (comicListFiltered.length > 1 ) {
    throw new Error("More than one comic with the same id")
  } else if (comicListFiltered.length === 0) {
    throw new Error("No comic with that id")
  } else {
    return comicListFiltered[0]
  }
}

// define variable section
const comicList = ref(getComicList(props.id))

</script>

<template>
  <div class="page_container">
    <div v-for="page in comicList.pages" :key="page">
      <img :src="page" />
      <hr>
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
  text-align:center;
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
