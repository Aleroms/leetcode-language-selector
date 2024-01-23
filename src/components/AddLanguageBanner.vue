<template>
  <div class="banner">
    <LeetcodeIcon :width="80" :height="80" />
    <h1>add languages you want to code in ...</h1>
  </div>
</template>

<script setup>
import LeetcodeIcon from '@/components/LeetcodeIcon.vue'
</script>

<style lang="scss" scoped>
.banner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
}
</style>
