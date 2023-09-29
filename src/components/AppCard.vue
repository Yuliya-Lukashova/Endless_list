<script setup>
import { RecycleScroller } from 'vue-virtual-scroller';
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';
import { useUserStore } from '../store';

const userStore = useUserStore();

// userStore.users.forEach((user) => console.log(user));
const props = defineProps({
  users: {
    type: Array,
  },
  user: {
    type: Object,
    required: true,
    default: () => {},
  }
});
console.log(props.users);

</script>

<template>
  <!-- <RecycleScroller
    class="scroller"
    :items="users"
    :item-size="32"
    key-field="id"
    v-slot="{ user }"
  > -->
    <li class="card">
      <div>
        <img class="card__img" src="https://i.pinimg.com/474x/27/01/f5/2701f51da94a8f339b2149ca5d15d2a5.jpg">
      </div>
      <div class="card__user-info user-info">
        <p class="user-info__name"><b>name: </b>{{ user?.firstname}}</p>
        <p class="user-info__phone"><span>phone: </span>{{ user?.phone }}</p>
        <p class="user-info__email"><span>email: </span>{{ user?.email }}</p>
        <p class="user-info__gender"><span>gender: </span>{{ user?.gender }}</p>
        <p class="user-info__website"><span>website: </span>{{ user?.website }}</p>
      </div>
    </li>
  <!-- </RecycleScroller> -->
</template>

<style lang="scss">
$font: 'Kanit', sans-serif;

.scroller {
  height: 100%;
}

.card {
  box-sizing: border-box;
  width: 385px;
  height: 195px;
  box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.32);
  border-radius: 17px;
  transition: all 0.5s;
  display: flex;
  margin: 10px;
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