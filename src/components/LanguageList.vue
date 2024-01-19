<template>
  <section id="leetcode-language-list">
    <DataTable :value="leetcodeStore.userLanguages" tableStyle="min-width: 50rem">
      <Column field="name" header="Name"></Column>
      <Column field="url" header="Image">
        <template #body="slotProps">
          <img
            width="40"
            height="40"
            :src="`/svg/${slotProps.data.url}`"
            :alt="slotProps.data.name"
          />
        </template>
      </Column>
      <Column field="times_used" header="Times Used"></Column>
      <Column field="last_used" header="Last Used">
        <template #body="slotProps">
          {{ slotProps.data.times_used > 0 ? slotProps.data.last_used : 'not used yet' }}...
        </template>
      </Column>
      <template #footer>
        <div v-if="leetcodeStore.userLanguages.length !== 0">
          there {{ leetcodeStore.userLanguages.length > 1 ? 'are' : 'is' }}
          {{ leetcodeStore.userLanguages.length }} language{{
            leetcodeStore.userLanguages.length > 1 ? 's' : ''
          }}
          to code in...
        </div>
        <div v-else>please add languages...</div>
      </template>
      <Column header="remove">
        <template #body="slotProps">
          <Button
            icon="pi pi-trash"
            @click="remove(slotProps.data.name)"
            aria-label="remove"
            text
            rounded
            severity="secondary"
          />
        </template>
      </Column>
    </DataTable>
  </section>
</template>

<script setup>
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Button from 'primevue/button'
import { useLeetcodeStore } from '@/stores/programmingLanguages'
import { ref } from 'vue'
const leetcodeStore = useLeetcodeStore()
const arrLength = ref(leetcodeStore.userLanguages.length)
const remove = (id) => {
  console.log('removing', id)
  leetcodeStore.remove(id)
}
</script>

<style lang="scss" scoped></style>
