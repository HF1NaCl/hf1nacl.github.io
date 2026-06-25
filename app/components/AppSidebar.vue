<script setup lang="ts">
const route = useRoute();

import type { NavigationMenuItem } from "@nuxt/ui";

defineProps({
  isOpen: Boolean,
});
const emit = defineEmits(["toggle-sidebar"]);

const items = ref<NavigationMenuItem[][]>([
  [
    {
      label: "Proyectos",
      to: "/projects",
      icon: "i-lucide-folder-git",
      active: route.path.startsWith("/projects"),
    },
    {
      label: "Acerca De",
      to: "/about",
      icon: "i-lucide-info",
      active: route.path.startsWith("/about"),
    },
  ],
  [
    {
      label: "GitHub",
      icon: "i-simple-icons-github",
      to: "https://github.com/HF1NaCl",
    },
  ],
]);
</script>

<template>
  <div>
    <div
      class="fixed inset-0 bg-black/40 transition-opacity duration-300"
      :class="
        isOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      "
    />
    <div
      class="fixed inset-y-0 left-0 z-30 w-64 max-w-full bg-default shadow-xl transition-transform duration-300 ease-in-out"
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <div class="flex flex-col p-2">
        <div class="flex gap-2 items-center">
          <h3 class="flex-auto text-center font-bold text-xl">Portafolio</h3>
          <UButton
            icon="i-lucide-square-x"
            size="xl"
            color="neutral"
            variant="ghost"
            class="flex-none"
            @click="emit('toggle-sidebar')"
          />
        </div>
        <div>
          <UNavigationMenu orientation="vertical" :items="items" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "tailwindcss";
</style>
