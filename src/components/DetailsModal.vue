<script setup>
import { useUserStore } from '../store';

const userStore = useUserStore();

const props = defineProps({
  item: {
    type: Object,
    required: true,
    default: () => {},
  }
});

const closeModalInfo = () => {
  userStore.isModalInfo = false;
}
</script>

<template>
<div class="details-modal__wrapper">
    <div class="details-modal__target-user target-user">
      <slot></slot>
    </div>
    <button class="details-modal__button-close" @click="closeModalInfo()">Close</button>
  </div>
</template>

<style lang="scss">
.details-modal__wrapper {
  position: absolute;
  z-index: 10;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  position: absolute;
  background: white;
  border-radius: 10px;
  transition: border-radius 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: inset 0 -3em 3em rgba(0,0,0,0.1),
              0 0  0 2px rgb(190, 190, 190),
              0.3em 0.3em 1em rgba(0,0,0,0.3);
 }

 .target-user p {
  max-width: 300px;
  font-family: 'Kanit', sans-serif;
  padding: 3px;
  border: 1px solid rgb(210, 206, 206);
  border-radius: 12px;
 }
 
 .target-user p span{
  color: #6c8b3f;
 }

 .details-modal__button-close {
  cursor: pointer;
  width: 70px;
  align-items: end;
  color: #090909;
  padding: 12px;
  font-size: 12px;
  border-radius: 0.5em;
  background: #6c8b3f;
  border: 2px solid #c4c1c1;
  transition: all .3s;
  box-shadow: 6px 6px 12px #c5c5c5,
             -6px -6px 12px #ffffff;
}

.details-modal__button-close:active {
  border: 1px solid white;
  box-shadow: 10px 10px 12px #9d9b9b,
             -4px -4px 12px #ffffff;
}
</style>