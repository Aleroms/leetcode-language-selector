<template>
  <div class="landing-banner">
    <LeetcodeIcon :width="100" :height="100" class="icon" />
    <Panel header="Welcome!">
      <p>Ever find yourself pondering which programming language to tackle on LeetCode today?</p>
      <p>The struggle is real!</p>
      <p>That's why I took matters into my own hands and created the LeetCode Language Selector.</p>
      <p>
        This nifty tool is designed to make your decision-making process a breeze by randomly
        selecting a programming language for you to dive into.
      </p>
      <p>
        Say goodbye to the dilemma and hello to coding efficiency with the LeetCode Language
        Selector!
      </p>
      <p>Get started with the LeetCode Language Selector today.</p>
      <Button label="get started" @click="getStarted" />
    </Panel>
  </div>
</template>

<script setup>
import LeetcodeIcon from '@/components/LeetcodeIcon.vue'
import Button from 'primevue/button'
import Panel from 'primevue/panel'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
const router = useRouter()
const user = useUserStore()
const getStarted = () => {
  user.updateVisit()
  router.push('/manage')
}
</script>

<style lang="scss" scoped>
.landing-banner {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 1rem auto;
  max-width: 1024px;

  .icon {
    margin: 2rem 0;
  }
}
</style>
