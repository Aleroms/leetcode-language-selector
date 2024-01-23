import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import languages from '@/assets/leetcode/languages.json'

export const useLeetcodeStore = defineStore('leetcodeStore', {
  state: () => ({
    userLanguages: useLocalStorage('userLanguages', []),
    history: useLocalStorage('history', []),
    options: useLocalStorage('options', { challenges: 1, exclude_recent: false }),
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
      console.log(this.userLanguages.length)

      if (this.userLanguages.length === 0)
        throw 'no available languages xP\nadd languages in manage'
      if (!this.hasSelectedToday) {
        //gets random languages for today
        shuffleArray(this.userLanguages)
        for (let i = 0; i < this.options.challenges; i++) {
          let lang = this.userLanguages[i]
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

//Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}
