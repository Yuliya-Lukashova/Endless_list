<script setup>
import { RecycleScroller } from 'vue-virtual-scroller';
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';
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

</script>

<template>
  <RecycleScroller
    class="scroller"
    :items="list"
    :item-size="10"
    key-field="id"
    v-slot="{ item }"
  >
    <li class="card">
      <div>
        <img class="card__img" src="https://i.pinimg.com/474x/27/01/f5/2701f51da94a8f339b2149ca5d15d2a5.jpg">
      </div>
      <div class="card__user-info user-info">
        <p class="user-info__name"><span>name: </span>{{ item.firstname}}</p>
        <p class="user-info__phone"><span>phone: </span>{{ item.phone }}</p>
        <p class="user-info__email"><span>email: </span>{{ item.email }}</p>
        <p class="user-info__gender"><span>gender: </span>{{ item.gender }}</p>
        <p class="user-info__website"><span>website: </span>{{ item.website }}</p>
      </div>
    </li>
  </RecycleScroller>
</template>

<style lang="scss">
$font: 'Kanit', sans-serif;

.vue-recycle-scroller.ready .vue-recycle-scroller__item-view {
  position: static;
}
// .vue-recycle-scroller__item-wrapper {
//   min-height: 480px;
// }

.scroller {
  height: 100%;
}

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