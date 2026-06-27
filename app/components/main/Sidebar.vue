<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
import type { GithubUser } from "~/interfaces/GithubUser.interface";

const config = useRuntimeConfig();
const username = config.public.githubUsername;
const { $github } = useNuxtApp();

// Extrae la información del usuario una sola vez durante la compilación
const { data: user } = await useAsyncData("github_user", () =>
  $github<GithubUser>(`/users/${username}`),
);

defineProps({
  isOpen: Boolean,
});
const emit = defineEmits(["toggle-sidebar"]);

const items = ref<NavigationMenuItem[][]>([
  [
    {
      label: "Inicio",
      to: "/",
      icon: "i-lucide-house",
    },
    {
      label: "Proyectos",
      to: "/projects",
      icon: "i-lucide-folder-git",
    },
    {
      label: "Acerca De",
      to: "/about",
      icon: "i-lucide-info",
    },
  ],
  [
    {
      label: "GitHub",
      icon: "i-simple-icons-github",
      // Si el user es nulo temporalmente, ponemos un link por defecto
      to: user.value?.html_url || `https://github.com/${username}`,
      target: "_blank",
    },
  ],
]);
</script>

<template>
  <div>
    <div
      class="fixed inset-0 z-20 bg-black/40 transition-opacity duration-300"
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
        <div class="flex flex-col gap-2 items-center justify-center mt-4">
          <USeparator class="w-full" />
          <UAvatar
            :src="`https://github.com/${username}.png`"
            size="lg"
            class="w-48 h-48"
          />
          <h3 class="text-xl font-bold">{{ username }}</h3>
          <h4 class="text-lg">{{ user.name }}</h4>
          <h4 class="text-lg font-light">{{ user.email }}</h4>
          <USeparator class="w-full" />
          <UNavigationMenu
            orientation="vertical"
            :items="items"
            class="w-full"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "tailwindcss";
</style>
