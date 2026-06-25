<script setup lang="ts">
const isSidebarOpen = ref(false);

function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value;
}
</script>

<template>
  <div class="flex">
    <MainSidebar :is-open="isSidebarOpen" @toggle-sidebar="toggleSidebar()" />
    <main class="flex-1">
      <MainHeader :is-open="isSidebarOpen" @toggle-sidebar="toggleSidebar()" />
      <slot />
    </main>
  </div>
</template>

<style scoped>
@import "tailwindcss";
</style>
