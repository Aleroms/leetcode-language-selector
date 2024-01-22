import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import languages from '@/assets/leetcode/languages.json'

export const useLeetcodeStore = defineStore('leetcodeStore', {
  state: () => ({
    userLanguages: useLocalStorage('userLanguages', []),
    history: useLocalStorage('history', []),
    options: useLocalStorage('options', { challenges: 0, include_recent: false }),
    dateSelected: useLocalStorage('dateSelected', Date()),
    collection: languages,
    hasSelectedToday: false,
    todaysLanguages: []
  }),
  actions: {
    initialize() {
      //checks if date has been selected on app start
      const today = new Date()
      this.hasSelectedToday = this.dateSelected === today.toDateString('en-US')
      // console.log(this.dateSelected, today.toDateString('en-US'))
    },
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
      //check history to see if it was recently deleted,
      //if so readd the amount of times it was used and last used
    },
    remove(id) {
      this.userLanguages = this.userLanguages.filter((l) => {
        return l.name !== id
      })
    },
    updateOptions(options) {
      this.options = options
    },
    getTodaysLanguage() {
      const today = new Date()
      this.hasSelectedToday = this.dateSelected === today.toDateString('en-US')

      if (!this.hasSelectedToday) {
        const userLangLength = this.userLanguages.length

        //gets random languages for today
        for (let i = 0; i < this.options.challenges; i++) {
          const rand = Math.floor(Math.random() * userLangLength)
          let lang = this.userLanguages[rand]
          console.log(lang)

          //modify language details
          lang.times_used += 1
          lang.last_used = today.toDateString()
          this.todaysLanguages.push(lang)
        }
        console.log(this.todaysLanguages)
        this.history.push(this.todaysLanguages)
        //set has used to true
        this.hasSelectedToday = true
        this.dateSelected = today.toDateString('en-US')
      }
    }
  }
})
