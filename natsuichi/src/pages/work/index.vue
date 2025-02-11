<template>
  <div class="p-2 grid grid-cols-1 justify-items-center gap-4">
    <p class="text-lg">SNSなど</p>
    <div class="grid-cols-2 grid">
      <a href="https://twitter.com/DDDD__akagi" target="_blank">
        <div class="border rounded-sm p-2 m-2 w-30 flex justify-center">twitter</div></a
      >
      <!-- <div class="border rounded-sm p-2 m-2 w-30"><a href="https://coconala.com/users/1767934" class="">ココナラ</a></div> -->
      <a href="https://www.pixiv.net/users/65997288" target="_blank"
        ><div class="border rounded-sm p-2 m-2 w-30 flex justify-center">Pixiv</div></a
      >
      <a href="mailto:akagihajimee@gmail.com" target="_blank"
        ><div class="border rounded-sm p-2 m-2 w-30 flex justify-center">メール</div></a
      >
    </div>
  </div>
</template>

<style>
.contact_container {
  padding: 10px;
}

.list {
  list-style-type: none;
}

.list li {
  display: flex;
  align-items: center;
  gap: 0 10px;
  padding: 1em 0em;
}

.list li::before {
  transform: rotate(-45deg);
  width: 0.4em;
  height: 0.4em;
  border-bottom: 3px solid #000000;
  border-right: 3px solid #000000;
  content: '';
}
</style>
