<script setup>
import { RouterView } from 'vue-router'
import { useRouter } from 'vue-router'
import { ref, onBeforeMount } from 'vue'
import { usePrimeVue } from 'primevue/config'
import { useLeetcodeStore } from './stores/programmingLanguages'
import { useThemeStore } from './stores/theme'

//primevue
import Menubar from 'primevue/menubar'
import Button from 'primevue/button'
import Divider from 'primevue/divider'

import LeetcodeIcon from '@/components/LeetcodeIcon.vue'

const themeStore = useThemeStore()
const router = useRouter()
const currentTheme = ref(themeStore.theme)
const PrimeVue = usePrimeVue()
const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    route: '/',
    command: () => router.push('/')
  },
  {
    label: 'Manage',
    icon: 'pi pi-cog',
    command: () => router.push('/manage')
  }
])
const leetcodeStore = useLeetcodeStore()

const toggleTheme = () => {
  console.log('click')
  let nextTheme = currentTheme.value === 'lara-light-green' ? 'lara-dark-green' : 'lara-light-green'
  PrimeVue.changeTheme(currentTheme.value, nextTheme, 'theme-link', () => {})
  currentTheme.value = nextTheme
  themeStore.toggleTheme(currentTheme.value)
}
onBeforeMount(() => {
  leetcodeStore.initialize()
})
</script>

<template>
  <header>
    <Menubar :model="items">
      <template #start>
        <RouterLink to="/">
          <LeetcodeIcon :width="35" :height="45" />
        </RouterLink>
      </template>
      <template #end>
        <div class="card-start">
          <a
            href="https://github.com/Aleroms/leetcode-language-selector"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button outlined icon="pi pi-github" severity="secondary" />
          </a>
          <!-- dear dev. Fuck this shit -->
          <!-- <Button outlined icon="pi pi-sun" @click="toggleTheme" severity="secondary" /> -->
        </div>
      </template>
    </Menubar>
  </header>

  <main>
    <RouterView />
  </main>
  <Divider />
  <footer id="footer">
    <p>
      Copyright @
      <a href="https://santiagomorales.dev" target="_blank" rel="noopener noreferrer"
        >Santiago Morales</a
      >
    </p>
  </footer>
</template>

<style scoped lang="scss">
.card-start {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
#footer {
  text-align: center;
}
</style>
