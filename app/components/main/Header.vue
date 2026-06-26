<script setup lang="ts">
const config = useRuntimeConfig();
const username = config.public.githubUsername;
// El modo Oscuro se calcula con el dark: con el TailwindCSS, no hace falta importar nada
const props = defineProps({
  isOpen: Boolean,
});
const emit = defineEmits(["toggle-sidebar"]);
</script>

<template>
  <div
    class="fixed backdrop-blur-sm inset-x-0 top-0 z-10 border-b bg-default/80 shadow transition-all duration-300 border-success dark:border-error"
  >
    <div class="mx-auto flex h-16 max-w-7x1 items-center justify-between px-4">
      <!--Left Group-->
      <div class="flex items-center gap-4">
        <UButton
          icon="i-lucide-list"
          size="md"
          color="neutral"
          variant="ghost"
          @click="$emit('toggle-sidebar')"
        />
        <div class="h-6 w-px bg-gray-300 hidden md:block"></div>
        <h2 class="hidden md:block">Portafolio de {{ username }}</h2>
      </div>
      <div class="flex items-center gap-4">
        <UButton
          icon="i-lucide-github"
          size="md"
          color="neutral"
          variant="ghost"
          :to="`https://github.com/${username}`"
          target="_blank"
        />
        <UColorModeButton />
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "tailwindcss";
.Icon {
  @apply bg-black cursor-pointer transition opacity-40 hover:opacity-60;
  font-size: 24px;
}
</style>
