<template>
  <section id="leetcode-language-list">
    <DataTable :value="leetcodeStore.history" tableStyle="min-width: 50rem">
      <template #header>History</template>
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
      <Column field="last_used" header="Date">
        <template #body="slotProps">
          {{ slotProps.data.times_used > 0 ? slotProps.data.last_used : 'not used yet' }}...
        </template>
      </Column>
      <template #footer>
        <div v-if="leetcodeStore.history.length !== 0">
          there {{ leetcodeStore.userLanguages.length > 1 ? 'are' : 'is' }}
          {{ leetcodeStore.userLanguages.length }} language{{
            leetcodeStore.userLanguages.length > 1 ? 's' : ''
          }}
          to code in...
        </div>
        <div v-else>no history yet!</div>
      </template>
    </DataTable>
  </section>
</template>

<script setup>
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import { useLeetcodeStore } from '@/stores/programmingLanguages'
const leetcodeStore = useLeetcodeStore()
</script>

<style lang="scss" scoped></style>
