<script setup>
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import LanguageDetail from '@/components/LanguageDetail.vue'
</script>

<template>
  <div class="home-wrapper">
    <div class="banner">
      <i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>
      <h1>Today I will use...</h1>
      <Button label="randomize" icon="pi pi-sync" />
    </div>
    <Divider />
    <h2>Language!</h2>
    <Divider />
    <LanguageDetail />
  </div>
</template>

<style lang="scss">
.home-wrapper {
  margin: 1rem;
  padding: 1rem;

  .banner {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
}
</style>
