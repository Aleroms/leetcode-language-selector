<template>
  <div class="manage-wrapper">
    <div class="manage-banner">
      <LeetcodeIcon :width="80" :height="80" />
      <h1>add languages you want to code in ...</h1>
      <form @submit.prevent="handleSubmit">
        <Dropdown
          v-model="selectedLanguages"
          :options="programming_languages"
          optionLabel="name"
          placeholder="Select a Language"
        >
          <template #value="slotProps">
            <div v-if="slotProps.value">
              <img src="/svg/ruby.svg" alt="slotProps.value.label" @click="test" />
              <div>{{ slotProps.value.name }}</div>
            </div>
          </template>
          <template #option="slotProps">
            <div>
              <img width="18" src="/svg/ruby.svg" alt="slotProps.option.label" @click="test" />
              <div>{{ slotProps.option.name }}</div>
            </div>
          </template>
        </Dropdown>
        <Button label="add" type="submit" />
      </form>
      <Divider />
    </div>
  </div>
</template>

<script setup>
import LeetcodeIcon from '@/components/LeetcodeIcon.vue'
import Divider from 'primevue/divider'
import Dropdown from 'primevue/dropdown'
import Button from 'primevue/button'
import programming_languages from '@/assets/leetcode/languages.json'
import { ref } from 'vue'

const selectedLanguages = ref()

const test = (s) => {}
const progLang = ref(programming_languages)
const handleSubmit = () => {
  console.log('submitted')
}
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
