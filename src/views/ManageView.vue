<template>
  <div class="manage-wrapper">
    <div class="manage-banner">
      <LeetcodeIcon :width="80" :height="80" />
      <h1>add languages you want to code in ...</h1>
      <SelectForm />
      <Divider />
    </div>
    <LanguageList />
  </div>
</template>

<script setup>
import LeetcodeIcon from '@/components/LeetcodeIcon.vue'
import Divider from 'primevue/divider'
import SelectForm from '@/components/SelectForm.vue'
import LanguageList from '@/components/LanguageList.vue'
</script>

<style lang="scss" scoped>
.manage-wrapper {
  margin: 1rem auto;
  padding: 1rem;
  max-width: 1024px;
}
.manage-banner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
