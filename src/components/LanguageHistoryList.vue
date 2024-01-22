<template>
  <section id="leetcode-language-list">
    <DataTable :value="leetcodeStore.history" tableStyle="min-width: 50rem">
      <template #header>History</template>
      <Column field="name" header="Name">
        <template #body="slotProps">
          <div>
            <span v-for="(item, index) in slotProps.data" :key="item.name"
              >{{ item.name }}{{ index < slotProps.data.length - 1 ? ', ' : '' }}</span
            >
          </div>
        </template>
      </Column>
      <Column field="url" header="Image">
        <template #body="slotProps">
          <div>
            <img
              v-for="item in slotProps.data"
              :key="item.name"
              width="35"
              height="35"
              :src="`/svg/${item.url}`"
              :alt="item.name"
            />
          </div>
        </template>
      </Column>
      <Column field="last_used" header="Date">
        <template #body="slotProps">
          {{
            slotProps.data[slotProps.data.length - 1].times_used > 0
              ? slotProps.data[slotProps.data.length - 1].last_used
              : 'not used yet...'
          }}
        </template>
      </Column>
      <template #footer>
        <div v-if="leetcodeStore.history.length !== 0">
          total {{ leetcodeStore.history.length }}
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
