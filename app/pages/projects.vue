<script setup lang="ts">
import type { GithubRepo } from "~/interfaces/GithubRepo.interface";
import type { GithubUser } from "~/interfaces/GithubUser.interface";

const config = useRuntimeConfig();
const username = config.public.githubUsername;

const { $github } = useNuxtApp();

const user: GithubUser = await $github(`/users/${username}`);
const repos: GithubRepo[] = await $github(`/users/${username}/repos`);
</script>

<template>
  <div class="mt-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <UPageCard
      v-for="(repo, index) in repos"
      :title="repo.name"
      :description="repo.description"
      variant="subtle"
    />
  </div>
</template>
