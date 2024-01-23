<template>
  <div class="manage-wrapper">
    <div class="manage-banner">
      <AddLanguageBanner />
      <div class="forms">
        <SelectForm />
        <OptionsForm />
      </div>
      <Divider />
    </div>
    <LanguageList style="margin: 2rem 0 3rem" />
    <LanguageHistoryList />
  </div>
</template>

<script setup>
import Divider from 'primevue/divider'
import SelectForm from '@/components/forms/SelectForm.vue'
import OptionsForm from '@/components/forms/OptionsForm.vue'
import LanguageList from '@/components/LanguageList.vue'
import LanguageHistoryList from '@/components/LanguageHistoryList.vue'
import AddLanguageBanner from '@/components/AddLanguageBanner.vue'
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
.forms {
  max-width: 340px;
}
</style>
