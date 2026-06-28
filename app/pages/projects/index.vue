<script setup lang="ts">
import githubCache from "~/assets/github-cache.json";

const config = useRuntimeConfig();
const username = config.public.githubUsername;
const repos = githubCache.repos || [];

const search = ref("");
const language = ref("");

const filteredRepos = computed(() => {
  const query = search.value.toLowerCase().trim();
  const selectedLang = language.value;
  return repos.filter((repo) => {
    if (repo.name === username.toLowerCase()) return false;
    const matchesSearch = repo.name.toLowerCase().includes(query);
    const matchesLanguage = !selectedLang || repo.language === selectedLang;
    return matchesSearch && matchesLanguage;
  });
});

const languages = computed(() => {
  const list = repos
    .filter((repo) => repo.name !== username.toLowerCase() && repo.language)
    .map((repo) => repo.language);

  return Array.from(new Set(list)).sort();
});
</script>

<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="flex gap-2 mb-4">
      <UInput
        type="text"
        v-model="search"
        placeholder="Buscar proyecto..."
        color="primary"
        variant="subtle"
        icon="i-heroicons-magnifying-glass"
        class="max-w-xs"
      />
      <UInputMenu
        v-model="language"
        :items="languages"
        placeholder="Filtrar por lenguaje..."
        class="max-w-xs"
      />
      <UButton
        v-if="search || language"
        color="neutral"
        variant="ghost"
        icon="i-heroicons-x-mark"
        @click="
          () => {
            search = '';
            language = '';
          }
        "
      >
        Limpiar
      </UButton>
    </div>
    <ProjectsCards :repos="filteredRepos" :username="username" />
  </div>
</template>
