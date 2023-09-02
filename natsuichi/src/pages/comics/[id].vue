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
  const comicList = [
    {
      title: "test",
      id: "1",
      pages: [
      "https://pub-d7468921a5ea45d1a7ca87426b5beb75.r2.dev/1/1.webp",
      "https://pub-d7468921a5ea45d1a7ca87426b5beb75.r2.dev/1/2.webp",
      "https://pub-d7468921a5ea45d1a7ca87426b5beb75.r2.dev/1/3.webp",
      "https://pub-d7468921a5ea45d1a7ca87426b5beb75.r2.dev/1/4.webp",
      "https://pub-d7468921a5ea45d1a7ca87426b5beb75.r2.dev/1/5.webp",
      "https://pub-d7468921a5ea45d1a7ca87426b5beb75.r2.dev/1/6.webp",
      "https://pub-d7468921a5ea45d1a7ca87426b5beb75.r2.dev/1/7.webp",
      "https://pub-d7468921a5ea45d1a7ca87426b5beb75.r2.dev/1/8.webp",
      "https://pub-d7468921a5ea45d1a7ca87426b5beb75.r2.dev/1/9.webp",
      "https://pub-d7468921a5ea45d1a7ca87426b5beb75.r2.dev/1/10.webp",
      "https://pub-d7468921a5ea45d1a7ca87426b5beb75.r2.dev/1/11.webp",
      "https://pub-d7468921a5ea45d1a7ca87426b5beb75.r2.dev/1/12.webp",
      "https://pub-d7468921a5ea45d1a7ca87426b5beb75.r2.dev/1/13.webp",
      "https://pub-d7468921a5ea45d1a7ca87426b5beb75.r2.dev/1/14.webp",
      "https://pub-d7468921a5ea45d1a7ca87426b5beb75.r2.dev/1/15.webp",
      "https://pub-d7468921a5ea45d1a7ca87426b5beb75.r2.dev/1/16.webp",
      "https://pub-d7468921a5ea45d1a7ca87426b5beb75.r2.dev/1/17.webp",
      "https://pub-d7468921a5ea45d1a7ca87426b5beb75.r2.dev/1/18.webp",
      "https://pub-d7468921a5ea45d1a7ca87426b5beb75.r2.dev/1/19.webp",
      "https://pub-d7468921a5ea45d1a7ca87426b5beb75.r2.dev/1/20.webp",
      "https://pub-d7468921a5ea45d1a7ca87426b5beb75.r2.dev/1/21.webp",
      "https://pub-d7468921a5ea45d1a7ca87426b5beb75.r2.dev/1/22.webp",
      "https://pub-d7468921a5ea45d1a7ca87426b5beb75.r2.dev/1/23.webp",
      "https://pub-d7468921a5ea45d1a7ca87426b5beb75.r2.dev/1/24.webp",
      "https://pub-d7468921a5ea45d1a7ca87426b5beb75.r2.dev/1/25.webp",
      "https://pub-d7468921a5ea45d1a7ca87426b5beb75.r2.dev/1/26.webp",
      "https://pub-d7468921a5ea45d1a7ca87426b5beb75.r2.dev/1/27.webp",
      "https://pub-d7468921a5ea45d1a7ca87426b5beb75.r2.dev/1/28.webp",
      "https://pub-d7468921a5ea45d1a7ca87426b5beb75.r2.dev/1/29.webp",
      "https://pub-d7468921a5ea45d1a7ca87426b5beb75.r2.dev/1/30.webp",
      "https://pub-d7468921a5ea45d1a7ca87426b5beb75.r2.dev/1/31.webp",
      "https://pub-d7468921a5ea45d1a7ca87426b5beb75.r2.dev/1/32.webp",
      "https://pub-d7468921a5ea45d1a7ca87426b5beb75.r2.dev/1/33.webp",
      "https://pub-d7468921a5ea45d1a7ca87426b5beb75.r2.dev/1/34.webp",
      "https://pub-d7468921a5ea45d1a7ca87426b5beb75.r2.dev/1/35.webp",
      "https://pub-d7468921a5ea45d1a7ca87426b5beb75.r2.dev/1/36.webp",
      "https://pub-d7468921a5ea45d1a7ca87426b5beb75.r2.dev/1/37.webp",
      "https://pub-d7468921a5ea45d1a7ca87426b5beb75.r2.dev/1/38.webp",
      "https://pub-d7468921a5ea45d1a7ca87426b5beb75.r2.dev/1/39.webp",
      "https://pub-d7468921a5ea45d1a7ca87426b5beb75.r2.dev/1/40.webp",
      ]
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
  <div>
    <div v-for="page in comicList.pages" :key="page">
      <img :src="page" />
    </div>
  </div>
</template>

<style>
img {
  width: 30vw;
  height: auto;
  min-width: 200px;
  max-width: 300px;
}
</style>
