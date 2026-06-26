<script setup lang="ts">
const config = useRuntimeConfig();
const username = config.public.githubUsername;
import type { ButtonProps } from "@nuxt/ui";

const links = shallowRef<ButtonProps[]>([
  {
    label: "Proyectos",
    to: "/projects",
    icon: "i-lucide-square-play",
  },
  {
    label: "Conóceme",
    to: "/about",
    color: "neutral",
    variant: "subtle",
    trailingIcon: "i-lucide-arrow-right",
  },
]);
</script>

<template>
  <UPageHero
    :title="`Portafolio de ${username}`"
    description="Este es mi portafolio personal, aquí podrás encontrar mis proyectos y mis habilidades. Puedes contactarme a través de mi correo electrónico o mi perfil de GitHub. "
    :links="links"
  />
  <UMarquee>
    <UIcon name="cib:php" class="size-10 shrink-0" />
    <UIcon name="cib:js" class="size-10 shrink-0" />
    <UIcon name="cib:typescript" class="size-10 shrink-0" />
    <UIcon name="cib:html5" class="size-10 shrink-0" />
    <UIcon name="cib:angular" class="size-10 shrink-0" />
    <UIcon name="cib:vue-js" class="size-10 shrink-0" />
    <UIcon name="bxl:c-sharp" class="size-10 shrink-0" />
  </UMarquee>
</template>
