<script setup lang="ts">
const props = defineProps<{
  title: string
  url: string
}>()
const twitterShare = () => {
  // シェアする画面を設定
  var shareURL =
    'https://twitter.com/intent/tweet?text=' +
    encodeURIComponent('ナツイチ.comで\n') +
    encodeURIComponent(`漫画「${props.title}」をよみました\n`) +
    encodeURIComponent(`#ナツイチノマンガ\n`) +
    encodeURIComponent(`https://ナツイチ.com${props.url}`)
  // シェア用の画面へ移行
  window.open(shareURL, '_blank')
}
</script>

<template>
  <div class="twitter_share">
    <button id="bottone5" @click="twitterShare">このマンガをtwitterでシェア</button>
  </div>
</template>

<style scoped>
#bottone5 {
  align-items: center;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  display: inline-flex;
  font-family:
    system-ui,
    -apple-system,
    system-ui,
    'Helvetica Neue',
    Helvetica,
    Arial,
    sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  min-height: 3rem;
  padding: calc(0.875rem - 1px) calc(1.5rem - 1px);
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;
}

#bottone5:hover,
#bottone5:focus {
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  color: rgba(0, 0, 0, 0.65);
}

#bottone5:hover {
  transform: translateY(-1px);
}

#bottone5:active {
  background-color: #f0f0f1;
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
  color: rgba(0, 0, 0, 0.65);
  transform: translateY(0);
}
</style>
