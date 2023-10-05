<script setup>
import { useUserStore } from './store';
import { useDark, useToggle } from "@vueuse/core";
import AppCard from './components/AppCard.vue';

const isDark = useDark();
const toggleDark = useToggle(isDark);
const userStore = useUserStore();
let users = userStore.loadUsers();
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

.app-title {
  text-align: center;
  font-family: $font;
}

.cards{
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  overflow: auto;
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
  box-shadow: 3px 3px 20px #969696,
             -3px -3px 20px #ffffff;
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
    box-shadow: 12px 17px 20px rgba(124, 123, 123, 0.22);
  }
  .details-modal__wrapper {
    color:#eceaea;
    background: rgb(94, 93, 93);
    box-shadow: inset 0 -3em 3em rgba(0,0,0,0.1),
                0 0  0 2px rgb(151, 150, 150),
                0.3em 0.3em 1em rgba(0,0,0,0.7);
  }
  .details-modal__button-close {
    box-shadow: 2px 2px 6px #c5c5c5,
             -2px -2px 6px #5e5d5d;
  }
  .details-modal__button-close:active {
    border: 1px solid white;
    box-shadow: 10px 10px 12px #9d9b9b,
              -4px -4px 12px #ffffff;
  }
}

</style>
