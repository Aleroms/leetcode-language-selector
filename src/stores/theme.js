import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useThemeStore = defineStore('themeStore', {
  state: () => ({
    theme: useLocalStorage('theme', 'lara-light-green')
  }),
  actions: {
    toggleTheme(theme) {
      this.theme = theme
    }
  }
})
