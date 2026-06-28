<script setup lang="ts">
defineProps<{
  repos: any[];
  username: string;
}>();
const languageColors: Record<string, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Vue: "#41b883",
  Python: "#3572A5",
  Rust: "#dea584",
  Go: "#00ADD8",
  Java: "#b07219",
  Ruby: "#701516",
  C: "#555555",
  "C++": "#f34b7d",
  "C#": "#178600",
  PHP: "#4F5D95",
  Shell: "#89e051",
  PowerShell: "#012456",
  Markdown: "#777777",
  Dart: "#00B4AB",
};

const getLanguageColor = (lang: string) => {
  return languageColors[lang] || "#8b949e";
};
</script>

<template>
  <div
    v-if="repos.length === 0"
    class="text-center py-12 text-neutral-500 dark:text-neutral-400"
  >
    No se encontraron proyectos con los filtros seleccionados.
  </div>
  <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <UCard v-for="repo in repos" :key="repo.id">
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
          <div class="flex items-center gap-1.5 text-neutral-400">
            <span
              class="w-2.5 h-2.5 rounded-full inline-block"
              :style="{
                backgroundColor: getLanguageColor(repo.language || 'Markdown'),
              }"
            />
            <span>{{ repo.language || "Markdown" }}</span>
          </div>
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
