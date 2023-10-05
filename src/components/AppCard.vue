<script setup>
import { ref } from 'vue';
import { useVirtualList, useInfiniteScroll } from '@vueuse/core';
import { useUserStore } from '../store';
import DetailsModal from './DetailsModal.vue';

const currentUser = ref(null);
const userStore = useUserStore();

const props = defineProps({
  list: {
    type: Array,
  }
});

let users = props.list;
const { list, containerProps, wrapperProps } = useVirtualList(users, {
  itemHeight: 225,
});

const loadData = async () => {
  await userStore.loadUsers();
  users.push(...userStore.users);
}

useInfiniteScroll(
  containerProps.ref,
  () => loadData(),
  { distance: 1 }
);

const showModalInfo = (user) => {
userStore.isModalInfo = true;
currentUser.value = user.data;
}
</script>

<template>
  <DetailsModal
    v-if="userStore.isModalInfo"
  >
    <p class="target-user__firstname"><span>Firstname: </span>{{ currentUser.firstname }}</p>
    <p class="target-user__lastname"><span>Lastname: </span>{{ currentUser.lastname }}</p>
    <p class="target-user__email"><span>Email: </span>{{ currentUser.email }}</p>
    <p class="target-user__phone"><span>Phone: </span>{{ currentUser.phone }}</p>
    <p class="target-user__birthday"><span>Birthday: </span>{{ currentUser.birthday }}</p>
    <p class="target-user__address"><span>Address: </span>{{ currentUser.address.street }}</p>
    <p class="target-user__gender"><span>Gender: </span>{{ currentUser.gender }}</p>
    <p class="target-user__website"><span>Website: </span>{{ currentUser.website }}</p>
  </DetailsModal>

  <div v-bind="containerProps" style="height: 700px">
    <div v-bind="wrapperProps">
      <div
        v-for="item in list"
        :key="item.id"
        style="height: 225px">
        <li class="card" id="card">
          <div>
            <img class="card__img" src="https://i.pinimg.com/474x/27/01/f5/2701f51da94a8f339b2149ca5d15d2a5.jpg">
          </div>
          <div class="card__user-info user-info">
            <p class="user-info__name"><span>name: </span>{{ item.data.firstname }}</p>
            <p class="user-info__phone"><span>phone: </span>{{ item.data.phone }}</p>
            <p class="user-info__email"><span>email: </span>{{ item.data.email }}</p>
            <p class="user-info__gender"><span>gender: </span>{{ item.data.gender }}</p>
            <p class="user-info__website"><span>website: </span>{{ item.data.website }}</p>
            <button class="user-info__button-info" @click="showModalInfo(item)">Info</button>
          </div>
        </li> 
      </div>
    </div>
  </div>
</template>

<style lang="scss">
$font: 'Kanit', sans-serif;

.card {
  position: relative;
  box-sizing: border-box;
  width: 385px;
  height: 195px;
  box-shadow: 12px 17px 20px rgba(0, 0, 0, 0.22);
  border-radius: 17px;
  transition: all 0.5s;
  display: flex;
  margin: 30px;
  padding: 11px;
  .card__img {
    width: 140px;
    height: 170px;
    border-radius: 17px;
  }
}

.user-info {
  padding: 5px;
  margin-left: 7px;
  font-family: $font;
  p {
    font-size: 14px;
    margin: 5px;
  }
  span {
    font-weight:bolder;
  }
}

.user-info__button-info {
  position: absolute;
  bottom: 5px;
  right: 20px;
  text-align: center;
  cursor: pointer;
  width: 40px;
  height: 22px;
  color: #090909;
  font-size: 12px;
  border-radius: 0.5em;
  background: #6c8b3f;
  border: 2px solid #c4c1c1;
  transition: all .3s;
  box-shadow: 2px 2px 9px #a5a3a3,
             -2px -2px 9px #ffffff;
}

.user-info__button-info:active {
  border: 1px solid white;
  box-shadow: 10px 10px 12px #9d9b9b,
             -4px -4px 12px #ffffff;
}
</style>