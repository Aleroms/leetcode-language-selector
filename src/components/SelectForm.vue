<template>
  <form @submit.prevent="handleSubmit" id="language-selector">
    <Dropdown
      v-model="dropDownItem"
      :options="leetcodeStore.collection"
      placeholder="Select a Language"
    >
      <template #value="slotProps">
        <div v-if="slotProps.value" class="lang-ddm">
          <img
            width="18"
            height="18"
            :src="`/svg/${slotProps.value.url}`"
            alt="slotProps.value.label"
          />
          <div>{{ slotProps.value.name }}</div>
        </div>
      </template>
      <template #option="slotProps">
        <div class="lang-ddm">
          <img
            width="26"
            height="26"
            :src="`/svg/${slotProps.option.url}`"
            alt="slotProps.option.label"
          />
          <div>{{ slotProps.option.name }}</div>
        </div>
      </template>
    </Dropdown>
    <Button label="add" type="submit" />
  </form>
</template>

<script setup>
import Dropdown from 'primevue/dropdown'
import Button from 'primevue/button'
import { ref } from 'vue'
import { useLeetcodeStore } from '@/stores/programmingLanguages'
const leetcodeStore = useLeetcodeStore()
const dropDownItem = ref('')
const handleSubmit = () => {
  if (dropDownItem.value !== '') {
    leetcodeStore.add(dropDownItem.value)
    dropDownItem.value = ''
  }
}
</script>

<style lang="scss" scoped>
#language-selector {
  display: flex;
  gap: 15px;
}
.lang-ddm {
  display: flex;
  gap: 10px;
  padding: 0 0.625rem;
}
</style>
