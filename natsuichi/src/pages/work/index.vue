<template>
    <div class="contact_container">
      <ui class="list">
        <li><a href="https://twitter.com/DDDD__akagi" target="_blank" class="workLink">twitter</a></li>
        <li><a href="https://coconala.com/users/1767934" class="workLink">ココナラ</a></li>
        <li><a href="https://skeb.jp/@DDDD__akagi" class="workLink">Skeb</a></li>
        <li><a href="https://www.pixiv.net/users/65997288" target="_blank" class="workLink">Pixiv</a></li>
        <li><a href="mailto:akagihajimee@gmail.com" target="_blank" class="workLink">メール</a></li>
      </ui>
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
    padding: .4em;
}

.list li::before {
    transform: rotate(-45deg);
    width: .4em;
    height: .4em;
    border-bottom: 3px solid #000000;
    border-right: 3px solid #000000;
    content: '';
}

a.workLink {
  color: #000;
}
</style>
