<template>
  <Panel toggleable>
    <template #header>
      <div class="header">
        <img
          width="40"
          height="40"
          :src="item.url !== undefined ? `/svg/${item.url}` : '/favicon.ico'"
          alt="ruby"
        />
        <span>{{ item.name }}</span>
      </div>
    </template>
    <p>this is where the description goes</p>
    <a :href="`${item.documentation}`">Official documentation</a>
  </Panel>
</template>

<script setup>
import Panel from 'primevue/panel'
defineProps({
  item: {
    type: Object
  }
})
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  gap: 1rem;
}
</style>
