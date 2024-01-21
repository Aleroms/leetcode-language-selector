import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import languages from '@/assets/leetcode/languages.json'

export const useLeetcodeStore = defineStore('leetcodeStore', {
  state: () => ({
    userLanguages: useLocalStorage('userLanguages', []),
    collection: languages,
    history: useLocalStorage('history', []),
    options: useLocalStorage('options', { challenges: 0, include_recent: false })
  }),
  actions: {
    add(lang) {
      //only add new items
      if (lang !== '' && !this.userLanguages.find((item) => item.name === lang.name)) {
        const date = new Date()
        this.userLanguages.push({
          ...lang,
          times_used: 0,
          last_used: `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
        })
      }
    },
    remove(id) {
      this.userLanguages = this.userLanguages.filter((l) => {
        return l.name !== id
      })
    },
    push(addToHistory) {
      //lang_arr = [{},{},...] length 1+
      const date = new Date()
      addToHistory.forEach((item) =>
        this.history.push({
          ...item,
          date: `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
        })
      )
    },
    updateOptions(options) {
      this.options = options
    }
  }
})
