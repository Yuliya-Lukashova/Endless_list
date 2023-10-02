<script setup>
import { useUserStore } from './store';
import AppCard from './components/AppCard.vue';
import { useDark, useToggle } from "@vueuse/core";
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';

const isDark = useDark();
const toggleDark = useToggle(isDark);

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
  <label class="container">
    <input id="check" type="checkbox" @click="toggleDark()">
    <span></span>
    <label for="check" class="shadow"></label>
  </label>
  <h3 class="app-title">Endless list app</h3>
  <div class="cards">
    <AppCard 
      :list="userStore.users"
    />
  </div> 
</template>

<style lang="scss">
$font: 'Kanit', sans-serif;

.dark {
  .app-title{
    color:rgb(255, 255, 255);
  }
  body {
    background-color: #202020;
  }
  .card {
    background-color: rgba(105, 105, 103, 0.58);
    color: rgb(255, 255, 255);
  }
}

.app-title {
  text-align: center;
  font-family: $font;
}
.cards{
  display: flex;
  align-items: center;
  flex-direction: column;
}

input[type = "checkbox"] {
  visibility: hidden;
  display: none;
  appearance: none;
  -webkit-appearance: none;
}

label.container {
  margin-top: 15px;
  position: absolute;
  left: 48%;
  display: block;
  width: 60px;
  height: 30px;
  background: #d3d3d3;
  border-radius: 50px;
  position: relative;
  cursor: pointer;
  box-shadow: 9px 9px 29px #969696,
             -9px -9px 29px #ffffff;
}

label.shadow {
  width: 50px;
  height: 20px;
  position: absolute;
  border-radius: 50px;
  left: 5px;
  top: 5px;
  box-shadow: inset 3px 3px 10px #969696,
              inset -3px -3px 5px #ffffffbd;
  cursor: pointer;
}

.container span {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: #6c8b3f;
  margin: 5px;
  border-radius: 50px;
  font-size: 20px;
  transition: all 0.3s ease-in;
  position: relative;
  left: 0;
  z-index: 1;
}

input[type = "checkbox"]:checked ~ span {
  left: 29px;
  transition: 0.3s ease-in;
  background: #0a100d;
  transform: rotate(220deg);
}
</style>
