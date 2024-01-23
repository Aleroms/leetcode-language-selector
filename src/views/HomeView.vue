<script setup>
import Button from 'primevue/button'
import Toast from 'primevue/toast'
import Divider from 'primevue/divider'
import LanguageDetail from '@/components/LanguageDetail.vue'
import ProgressSpinner from 'primevue/progressspinner'
import Skeleton from 'primevue/skeleton'
import { useLeetcodeStore } from '@/stores/programmingLanguages'
import { useToast } from 'primevue/usetoast'
import { computed } from 'vue'
const leetcodeStore = useLeetcodeStore()
const toast = useToast()
// const todaysLanguage = ref(leetcodeStore.history[leetcodeStore.history.length - 1])
// console.log(todaysLanguage.value)
const todaysLanguage = computed(() => {
  return leetcodeStore.history.length > 0
    ? leetcodeStore.history[leetcodeStore.history.length - 1]
    : [{ name: 'unknown', url: '/favico.ico' }]
})
const handleClick = () => {
  try {
    leetcodeStore.getTodaysLanguage()
  } catch (error) {
    toast.add({
      severity: 'error',
      summary: error,
      life: 3000
    })
    console.log(error)
  }
}
</script>

<template>
  <Toast />
  <div class="home-wrapper">
    <div class="banner">
      <ProgressSpinner v-if="!leetcodeStore.hasSelectedToday" />
      <img
        v-else
        width="60"
        height="60"
        :src="`/svg/${todaysLanguage[0].url}`"
        :alt="todaysLanguage[0].name"
        id="mask"
      />

      <h1 class="title">
        Today I will use{{
          !leetcodeStore.hasSelectedToday ? '...' : ` ${todaysLanguage[0].name}!`
        }}
      </h1>
      <Button
        label="randomize"
        icon="pi pi-sync"
        @click="handleClick"
        :disabled="leetcodeStore.hasSelectedToday"
      />
    </div>
    <Divider />
    <h2>Highlight Language</h2>
    <div v-if="leetcodeStore.hasSelectedToday">
      <div v-for="(lang, index) in todaysLanguage" :key="lang.name">
        <h2 v-if="index > 0">Fallback Language</h2>
        <LanguageDetail :item="lang" />
      </div>
    </div>
    <div v-else>
      <Skeleton height="10rem"></Skeleton>
      <Divider />
      <Skeleton height="10rem"></Skeleton>
    </div>
  </div>
</template>

<style lang="scss">
.home-wrapper {
  margin: 1rem auto;
  padding: 1rem;
  max-width: 1200px;

  .banner {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
}
.title {
  text-align: center;
}
</style>
