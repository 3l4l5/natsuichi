<script setup lang="ts">
const newsList = [
  {
    date: new Date('2026-01-27'),
    content:
      '「きみとボドゲが作りたい!」第1巻が発売されました！',
    link: 'https://comic-fuz.com/book/29331',
    blank: true
  },
  {
    date: new Date('2025-03-18'),
    content:
      'まんがタイムきららMax 2025年5月号より、「きみとボドゲが作りたい!」の連載が始まりました',
    link: 'https://x.com/DDDD__akagi/status/1901955504374431815',
    blank: true
  },
  {
    date: new Date('2025-02-27'),
    content: '月刊!スピリッツ4月号に、読み切り漫画「あの子が嫌いな17から18の理由」が掲載されました',
    link: 'https://bigcomics.jp/episodes/3f15ed68e79bb/',
    blank: true
  },
  {
    date: new Date('2025-02-27'),
    content:
      'ぼっち・ざ・ろっく アンソロジー 5巻に 執筆した読み切り漫画「頬を上げるようなMCが」が収録されました',
    link: 'https://x.com/mangatimekirara/status/1894704966067228819',
    blank: true
  },
  {
    date: new Date('2025-02-11'),
    content: 'まんがページに ガンガンJoker 2025年2月号掲載作品「恋愛漫画の作り方」を追加しました',
    link: '/comics',
    blank: false
  },
  {
    date: new Date('2025-01-22'),
    content:
      'ガンガンJoker 2025年2月号(2025年1月発売)にて、執筆した読み切り漫画「恋愛漫画の作り方」が掲載されました。',
    link: 'https://x.com/gangan_joker/status/1881735003241066870',
    blank: true
  },
  {
    date: new Date('2024-11-19'),
    content:
      'まんがタイムきららMAX 2025年1月号(2024年11月発売)にて、執筆した漫画「きみとボドゲが作りたい！」1話 2話が掲載されました。',
    link: 'https://x.com/mangatimekirara/status/1858511262201905188',
    blank: true
  },
  {
    date: new Date('2024-01-22'),
    content: 'まんがページにさよならバードランドを追加しました',
    link: '/comics',
    blank: false
  }
]
</script>
<template>
  <!-- <div class="bg-[url(top_image.webp)] w-screen"> -->
  <div class="grid grid-cols-1 justify-items-center">
    <div class="border border rounded-md my-4 p-1 m-2">
      <p class="text-2xl p-2 italic font-serif text-">
        ようこそ!! <br />赤城ナツイチのホームページへ
      </p>
    </div>
    <div class="pb-4 text-xl">
      <p class="p-2">📚 描いたまんがは<a href="/comics">こちら</a>。</p>
      <p class="p-2">✒️ お仕事の連絡などは<a href="/work">こちら</a>。</p>
    </div>

    <div class="p-2 m-2 pb-4 border border-inherit rounded-sm">
      <h3 class="text-xl font-black p-2">ニュース</h3>
      <div class="px-3">
        <ul>
          <li v-for="news in newsList" class="">
            <p>
              {{ news.date.toLocaleDateString() }}
              <span
                class="text-red-500 font-black"
                v-if="
                  new Date(news.date) > new Date(new Date().setMonth(new Date().getMonth() - 1))
                "
              >
                new
              </span>
            </p>
            <p class="pb-2 pl-2">
              {{ news.content }}
              <span><a :href="news.link" :target="news.blank ? '_blank' : ''">詳細</a></span>
            </p>
          </li>
        </ul>
      </div>
    </div>
    <img src="../../assets/top_image.webp" />
  </div>
</template>

<style scoped>
img {
  width: 100%;
  height: auto;
  pointer-events: none;
}

h1 {
  margin-bottom: 30px;
  margin-top: 20px;
}
.news {
  border: 1px solid #000000;
  padding: 0 20px;
  margin: 30px 5px;
}
</style>
