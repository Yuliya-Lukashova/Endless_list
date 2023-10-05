<script setup>
import { useVirtualList, useInfiniteScroll } from '@vueuse/core';
import { useUserStore } from '../store';
import DetailsModal from './DetailsModal.vue';

const userStore = useUserStore();

const props = defineProps({
  list: {
    type: Array,
  },
  item: {
    type: Object,
    required: true,
    default: () => {},
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

const showModalInfo = () => {
  userStore.isModalInfo = true;
}

</script>

<template>
  <DetailsModal
    v-if="userStore.isModalInfo"
    v-for="user in userStore.users" :key="user.id"
  >
    <p class="target-user__firstname"><span>Firstname: </span>{{ user.firstname }}</p>
    <p class="target-user__lastname"><span>Lastname: </span>{{ user.lastname }}</p>
    <p class="target-user__email"><span>Email: </span>{{ user.email }}</p>
    <p class="target-user__phone"><span>Phone: </span>{{ user.phone }}</p>
    <p class="target-user__birthday"><span>Birthday: </span>{{ user.birthday }}</p>
    <p class="target-user__address"><span>Address: </span>{{ user.address }}</p>
    <p class="target-user__gender"><span>Gender: </span>{{ user.gender }}</p>
    <p class="target-user__website"><span>Website: </span>{{ user.website }}</p>
  </DetailsModal>

  <div v-bind="containerProps" style="height: 700px">
    <div v-bind="wrapperProps">
      <div v-for="item in list" :key="item.id" style="height: 225px">
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
            <button class="user-info__button-info" @click="showModalInfo()">Info</button>
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
}

.card__img {
  width: 140px;
  height: 170px;
  border-radius: 17px;
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
  right: 10px;
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
  box-shadow: 6px 6px 12px #a5a3a3,
             -6px -6px 12px #ffffff;
}

.user-info__button-info:active {
  border: 1px solid white;
  box-shadow: 10px 10px 12px #9d9b9b,
             -4px -4px 12px #ffffff;
}
</style>