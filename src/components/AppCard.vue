<script setup>
import { useVirtualList, useInfiniteScroll } from '@vueuse/core';
import { useUserStore } from '../store';
const userStore = useUserStore();

const props = defineProps({
  list: {
    type: Array,
  },
  user: {
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
</script>

<template>
  <div v-bind="containerProps" style="height: 700px">
    <div v-bind="wrapperProps">
      <div v-for="item in list" :key="item.index" style="height: 225px">
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
          </div>
        </li> 
      </div>
    </div>
  </div>
</template>

<style lang="scss">
$font: 'Kanit', sans-serif;

.card {
  box-sizing: border-box;
  width: 385px;
  height: 195px;
  box-shadow: 12px 17px 20px rgba(0, 0, 0, 0.22);
  border-radius: 17px;
  transition: all 0.5s;
  display: flex;
  margin: 30px;
  padding: 11px;
  &:hover {
    border: 3px solid #6c8b3f;
  transform: scale(1.05);
  }
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
</style>