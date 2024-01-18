<template>
  <Panel toggleable>
    <template #header>
      <div class="header">
        <img width="40" height="40" src="/svg/ruby.svg" alt="ruby" />
        <span>Ruby</span>
      </div>
    </template>
    <p>this is where the description goes</p>
    <a href="https://www.ruby-lang.org/en/documentation/">Official documentation</a>
  </Panel>
</template>

<script setup>
import Panel from 'primevue/panel'
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
