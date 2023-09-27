import { defineStore } from 'pinia';
import { ref } from 'vue';
const url = 'https://fakerapi.it/api/v1/persons?_quantity=20';

export const useUserStore = defineStore('userStore', () => {
  const users= ref([]);

  const getUsers = async() => {
    const res = await fetch(url);
    const data = await res.json();
    users.value = data.data;
  };

  return {users, getUsers}
});