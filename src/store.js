import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

const url = 'https://fakerapi.it/api/v1/persons';

export const useUserStore = defineStore('userStore', () => {
  const users = ref([]);
  let currentPage = ref(1);
  const usersOnPage = 5;
  const isLoading = ref(false);
  const isModalInfo = ref(false);

  const loadUsers = async() => {
    if (isLoading.value) return;
      isLoading.value = true;
    try {
      const response = await axios.get(`${url}?_quantity=${usersOnPage}`);
      const newUsers = response.data.data;
      if (newUsers.length > 0) {
        users.value = [...newUsers];
      }
    } catch (error) {
      console.error('Bad request', error);
    }finally {
      isLoading.value = false;
    }
  }
  return {users, currentPage, usersOnPage, isLoading, isModalInfo, loadUsers}
});
