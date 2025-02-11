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
          <li>
            2024/11/19
            <a href="https://x.com/mangatimekirara/status/1858511262201905188"
              >まんがタイムきららMAX 2025年1月号</a
            >(2024年11月発売)にて、執筆した漫画「きみとボドゲが作りたい！」1話 2話が掲載されました。
          </li>
          <li>2024/01/22 <a href="/comics">まんがページ</a>にさよならバードランドを追加しました</li>
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
