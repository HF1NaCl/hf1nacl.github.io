<script setup lang="ts">
const config = useRuntimeConfig();
const username = config.public.githubUsername;
</script>

<template>
  <UFooter>
    <template #left>
      <p class="text-muted text-sm">
        {{ username }} - {{ new Date().getFullYear() }}
      </p>
    </template>
    <div class="flex gap-1">
      <span class="text-center text-muted"
        >Hecho con <a class="font-bold">Nuxt UI </a></span
      >
      <UIcon name="simple-icons:nuxt" class="text-primary size-5" />
    </div>
    <template #right>
      <UButton
        icon="i-simple-icons-github"
        color="neutral"
        variant="ghost"
        :to="`https://github.com/${username}`"
        target="_blank"
        aria-label="GitHub"
      />
    </template>
  </UFooter>
</template>
