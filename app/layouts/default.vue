<script setup lang="ts">
const isSidebarOpen = ref(false);

function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value;
}
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <MainSidebar :is-open="isSidebarOpen" @toggle-sidebar="toggleSidebar()" />
    <div class="main-content pt-16">
      <MainHeader
        :is-open="isSidebarOpen"
        @toggle-sidebar="toggleSidebar()"
        class="shrink-0"
      />
      <main class="container mx-auto flex-1 mt-4 mb-8">
        <slot />
      </main>
    </div>
    <USeparator />
    <MainFooter class="shrink-0" />
  </div>
</template>

<style scoped>
@import "tailwindcss";
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
