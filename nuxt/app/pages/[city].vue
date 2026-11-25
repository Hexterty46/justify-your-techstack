<script setup>
const route = useRoute()

const { data, error } = await useFetch(`/api/sampling-points/${route.params.city}`)
</script>

<template>
    <NuxtLink to="/">Hoofdpagina</NuxtLink>
  <main>
    <p v-if="error">FOUT: {{ error.message }}</p>
    <p v-else-if="!data.points.length">Geen punten gevonden voor {{ route.params.city }}</p>
    <section v-else>
      <PointCard
        v-for="(point, index) in data.points"
        :key="index"
        :point="point"
      />
    </section>
  </main>
</template>

<style scoped>
main {
  max-width: 64ch;
}

section {
  display: grid;
  gap: var(--spacing-m);
  padding: var(--spacing-m);
}
</style>