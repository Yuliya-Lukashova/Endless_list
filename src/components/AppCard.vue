<script setup>
import { RecycleScroller } from 'vue-virtual-scroller';
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
import { useUserStore } from '../store';

const userStore = useUserStore();

// userStore.users.forEach((user) => console.log(user));
const props = defineProps({
  user: {
    type: Object,
    required: true,
    default: () => {},
  }
})

</script>

<template>
  <RecycleScroller
    class="scroller"
    :items="userStore.users"
    :item-size="4"
    key-field="id"
    v-slot="{ user }"
  >
    <li class="card">
      <div>
        <img class="card__img" src="https://i.pinimg.com/474x/27/01/f5/2701f51da94a8f339b2149ca5d15d2a5.jpg">
      </div>
      <div class="card__user-info user-info">
        <p class="user-info__name"><b>name: </b>{{ user?.name }}</p>
        <p class="user-info__phone"><span>phone: </span>{{ user?.phone }}</p>
        <p class="user-info__email"><span>email: </span>{{ user?.email }}</p>
        <p class="user-info__gender"><span>gender: </span>{{ user?.gender }}</p>
        <p class="user-info__website"><span>website: </span>{{ user?.website }}</p>
      </div>
    </li>
  </RecycleScroller>
</template>

<style lang="scss">
$font: 'Kanit', sans-serif;

.scroller {
  height: 100%;
}


.card {
  box-sizing: border-box;
  width: 500px;
  height: 230px;
  background: rgba(220, 220, 207, 0.58);
  box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.32);
  border-radius: 17px;
  transition: all 0.5s;
  display: flex;
  color: black;
  margin: 10px;
  padding: 15px;
  &:hover {
    border: 3px solid #6c8b3f;
  transform: scale(1.05);
  }
}

.card__img {
  width: 150px;
  height: 200px;
  border-radius: 17px;
}

.user-info {
  padding: 5px;
  margin-left: 10px;
  font-family: $font;
  p {
    margin: 5px;
  }
  span {
    font-weight:bolder;
  }
}
</style>