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
