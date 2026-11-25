<script setup>
const route = useRoute()

const { data, error } = await useFetch(`/api/sampling-points/${route.params.city}`)
</script>

<template>
    <NuxtLink to="/">Homepagina</NuxtLink>
  <p v-if="error">FOUT: {{ error.message }}</p>
  <p v-else-if="!data?.points?.length">Geen punten gevonden voor {{ route.params.city }}</p>
  <ul v-else>
    <li v-for="(point, index) in data.points" :key="index">
      {{ point.location }}
    </li>
  </ul>
</template>