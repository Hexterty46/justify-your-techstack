<script setup>
import MouseComponent from './components/MouseComponent.vue';

const { data, refresh, status, pending, error } = await useFetch('/api/sampling-points')

</script>

<template>
  <div>
    <NuxtLoadingIndicator />
    <!-- <NuxtRouteAnnouncer />
    <NuxtWelcome /> -->
    <MouseComponent />
    <NuxtPage />
  </div>
</template>
