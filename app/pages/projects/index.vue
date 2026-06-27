<script setup lang="ts">
import type { GithubRepo } from "~/interfaces/GithubRepo.interface";

const config = useRuntimeConfig();
const username = config.public.githubUsername;
const { $github } = useNuxtApp();

// useAsyncData le dice a Nuxt que guarde este resultado en el payload estático de la build
const { data: repos } = await useAsyncData(
  "github_repos",
  () => $github<GithubRepo[]>(`/users/${username}/repos`),
  {
    default: () => [], // Evita errores de array nulo en el template
  },
);
</script>

<template>
  <div class="mt-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <UCard
      v-for="repo in repos.filter((r) => r.name !== username.toLowerCase())"
      :key="repo.id"
    >
      <div>
        <div class="flex justify-between items-start gap-2">
          <h3 class="font-bold text-lg truncate">{{ repo.name }}</h3>
          <span
            v-if="repo.stargazers_count"
            class="text-xs text-amber-500 whitespace-nowrap"
          >
            ★ {{ repo.stargazers_count }}
          </span>
        </div>
        <p class="text-sm text-neutral-500 my-2 line-clamp-2">
          {{ repo.description || "No se proporcionó una descripción" }}
        </p>
        <div
          class="flex justify-between items-center text-xs mt-4 pt-2 border-t border-neutral-100 dark:border-neutral-800"
        >
          <span class="text-neutral-400">{{
            repo.language || "Markdown"
          }}</span>
          <NuxtLink
            v-if="repo.has_pages"
            :to="`https://${username.toLowerCase()}.github.io/${repo.name}`"
            class="text-primary-500 hover:underline"
          >
            Ver proyecto en GitHub Pages
          </NuxtLink>
          <NuxtLink
            :to="`${repo.html_url}`"
            class="text-primary-500 hover:underline"
          >
            Ver Más
          </NuxtLink>
        </div>
      </div>
    </UCard>
  </div>
</template>
