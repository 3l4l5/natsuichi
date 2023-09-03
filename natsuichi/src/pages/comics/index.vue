<script setup lang="ts">
import { ref, computed }  from 'vue'
const comicList = [
  {
    preview: "https://pub-d7468921a5ea45d1a7ca87426b5beb75.r2.dev/1/0.webp",
    title: "8ビートのハイハット",
    description: "",
    publishedAt: new Date("2020-01-01"),
    pages: 40,
    id: "1",
  },
  {
    preview: "https://pub-d7468921a5ea45d1a7ca87426b5beb75.r2.dev/2/0.webp",
    title: "いいやつなんだろうけどさ",
    description: "",
    publishedAt: new Date("2020-01-01"),
    pages: 32,
    id: "2",
  },
  {
    preview: `https://pub-d7468921a5ea45d1a7ca87426b5beb75.r2.dev/3/0.webp`,
    title: "全部捨てなきゃ思い出す",
    description: "メルカリのモノガタリ大賞に応募した作品です。\n何かを思い出すきっかけって、匂いとか、音楽とか、モノとか、そういう身近にあるものだったりするよなと思い描きました。",
    publishedAt: new Date("2021-09-09"),
    pages: 3,
    id: "3",
  },
  {
    preview: "https://pub-d7468921a5ea45d1a7ca87426b5beb75.r2.dev/0/0.webp",
    title: "",
    description: "",
    publishedAt: new Date("2999-01-01"),
    pages: 0,
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
            <div class="comic_preview_rectangle">
              <img class="comic_preview_image" :src="image.preview" />
              <p class="comicTitle">{{ image.title }}</p>
              <p class="pageCount" v-if="image.pages">{{ image.pages }}ページ</p>
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
  padding-top: 2px;
  padding-bottom: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 90%;
}
.pageCount {
  text-align: center;
  color:rgb(63, 63, 63);
  padding: 0px;
  margin: 0px;
  font-size: 80%;
}
</style>
