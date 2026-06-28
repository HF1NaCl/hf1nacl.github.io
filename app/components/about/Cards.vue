<script setup lang="ts">
interface faqText {
  question: string;
  answer: string | string[];
}
const items: {
  title: string;
  description?: string;
  text: string | string[];
  faqText?: faqText[];
}[] = [
  {
    title: "Acerca de Mí",
    description: "Conoce a quién hace estos proyectos",
    text: [
      "Soy un Desarrollador, Ingeniero Informático, aquella persona que le gusta buscar nuevas oportunidades e inspiraciones para hacer software y hacer demostraciones para darme a conocer.",
      "Hasta ahora he enterado empleos cortos y me he dado cuenta que los sistemas pueden ser mantenibles si es deseable y desarrollar soluciones modernas para cada caso.",
    ],
  },
  {
    title: "Preguntas",
    description: "En caso de que te estés preguntando",
    text: "Dejaré unas preguntas con respuestas en caso de dudas",
    faqText: [
      {
        question: "¿Por qué una página dedicada a Proyectos Repos de Github?",
        answer:
          "Ordenar formalmente aquellos proyectos que hice a través de un ambiente separado y limpio sin mucha información.",
      },
      {
        question: "¿Cómo esto se diferencia con los repositorios Github?",
        answer:
          "Sencillo. Algo limpio como ver el Nombre, Descripción y Lenguaje. Así sin más. Sin información adicional a la vista. Pero si necesitas detalles, siempre puedes ver dentro del repositorio. Un enlace tan sencillo como este y ya aparece todo al alcance.",
      },
      {
        question:
          "¿Puedes aprender X lenguaje de programación y subir una demostración?",
        answer: "Siempre que tenga la posibilidad, lo haré.",
      },
    ],
  },
];
</script>

<template>
  <UCard v-for="item in items" variant="soft" class="md:w-2/3">
    <template #header>
      <h3 class="text-xl font-bold">{{ item.title }}</h3>
      <h4 v-if="item.description" class="text-md opacity-70">
        {{ item.description }}
      </h4>
    </template>
    <!--Texto-->
    <template v-if="Array.isArray(item.text)">
      <p v-for="(text, index) in item.text" :key="index" class="mb-2">
        {{ text }}
      </p>
    </template>
    <p v-else>{{ item.text }}</p>
    <!--Preguntas y Respuestas-->
    <template v-if="item.faqText">
      <div
        v-for="({ question, answer }, index) in item.faqText"
        :key="index"
        class="mt-2 mb-2"
      >
        <p class="font-bold text-lg">{{ question }}</p>
        <template v-if="Array.isArray(answer)">
          <p v-for="(text, index) in answer" :key="index" class="mb-2">
            - {{ text }}
          </p>
        </template>
        <p v-else>- {{ answer }}</p>
      </div>
    </template>
  </UCard>
</template>
