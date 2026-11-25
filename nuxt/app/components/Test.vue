<script setup>

const route = useRoute()

console.log(route.params.city)

const { data, refresh, status } = await useFetch('https://fdnd-agency.directus.app/items/apa_sampling_points')
</script>


<template>
    <p></p>
</template>