<template>
  <div class="p-2 grid grid-cols-1 justify-items-center gap-4">
    <p class="text-lg">Contact</p>
    <div class="py-3">X: <a href="https://twitter.com/DDDD__akagi" target="_blank">@DDDD__akagi</a></div>
    <div class="py-3">
      Pixiv: <a href="https://www.pixiv.net/users/65997288" target="_blank">65997288</a>
    </div>
    <div class="">email: akagihajimee@gmail.com</div>
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
