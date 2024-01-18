import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import languages from '@/assets/leetcode/languages.json'

export const useLeetcodeStore = defineStore('leetcodeStore', {
  state: () => ({
    userLanguages: useLocalStorage('userLanguages', []),
    collection: languages
  }),
  actions: {
    add(lang) {
      console.log(lang)
      if (lang !== '' && !this.userLanguages.find((item) => item.name === lang.name)) {
        this.userLanguages.push(lang)
      }
    },
    remove(id) {
      this.userLanguages = this.userLanguages.filter((l) => {
        return l.name !== id
      })
    }
  }
})
