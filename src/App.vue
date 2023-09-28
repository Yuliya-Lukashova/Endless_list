<script setup>
import { useUserStore } from './store';
import AppCard from './components/AppCard.vue';

const userStore = useUserStore();

let users = userStore.loadUsers();

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  if (scrollY + windowHeight >= documentHeight - 200) {
    userStore.loadUsers();
  }
});
</script>

<template>
  <h3 class="app-title">Endless list app</h3>
  <ul class="cards">
    <AppCard 
      v-for="user in userStore.users"
      :key="user.id"
      :user="user"
    />
  </ul> 
</template>

<style lang="scss">
$font: 'Kanit', sans-serif;

.app-title {
  text-align: center;
  font-family: $font;
}
.cards{
display: flex;
align-items: center;
flex-direction: column;
}
</style>
