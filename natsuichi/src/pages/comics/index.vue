<script setup lang="ts">
import { ref, type Ref, computed, onMounted } from 'vue'
import { ComicRepository } from '../../domain/repository/ComicRepository'
import { Comic } from '../../domain/models/Comic'
import ComicListSection from './comicListSection.vue'

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
  <div class="px-2 mt-5 mb-1">
    <h1 class="font-mono antialiased text-lg text-lg">連載</h1>
    <hr class="border-stone-400"/>
  </div>
  <ComicListSection :comic-type='"Series"'/>
  <div class="px-2 mt-5 mb-1">
    <h1 class="font-mono antialiased text-lg text-lg">読切</h1>
    <hr class="border-stone-400"/>
  </div>
  <ComicListSection :comic-type='"OneShot"'/>
</template>
