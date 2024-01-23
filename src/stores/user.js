import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
export const useUserStore = defineStore('userStore', {
  state: () => ({
    firstVisit: useLocalStorage('first-visit', true)
  }),
  actions: {
    updateVisit() {
      this.firstVisit = false
    }
  }
})
