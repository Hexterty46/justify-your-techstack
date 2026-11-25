<script setup lang="ts">
import MouseComponent from './components/MouseComponent.vue';

const { data, refresh, status, pending, error } = await useFetch('/api/sampling-points')

</script>

<template>
  <div>
    <NuxtLoadingIndicator />
    <!-- <NuxtRouteAnnouncer />
    <NuxtWelcome /> -->
    <MouseComponent />
    <!-- <Test /> -->
    <p v-show="status">Status van data</p>
    <p v-if="pending">Laden....</p>
    <p v-else-if="error">FOUT</p>
    
    
    <p v-else>{{ data }}</p>
    <p>{{ console.log(data) }}</p>
  </div>
</template>
