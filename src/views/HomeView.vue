<script setup>
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import LanguageDetail from '@/components/LanguageDetail.vue'
import ProgressSpinner from 'primevue/progressspinner'
import Skeleton from 'primevue/skeleton'
import { useLeetcodeStore } from '@/stores/programmingLanguages'
import { ref } from 'vue'
const leetcodeStore = useLeetcodeStore()
const todaysLanguage = ref(leetcodeStore.history[leetcodeStore.history.length - 1])
</script>

<template>
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
        @click="leetcodeStore.getTodaysLanguage"
        :disabled="leetcodeStore.hasSelectedToday"
      />
    </div>
    <Divider />
    <h2>Highlight Language</h2>
    <div v-if="leetcodeStore.hasSelectedToday">
      <div v-if="todaysLanguage.length > 1">
        <div v-for="(lang, index) in todaysLanguage" :key="lang.name">
          <h2 v-if="index > 0">Fallback Language</h2>
          <LanguageDetail :item="lang" />
        </div>
      </div>
      <div v-else>
        <LanguageDetail />
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
