<script setup lang="ts">
import { ref } from 'vue';
import type { Job } from './types/Job';
import JobList from './components/JobList.vue';

const jobs = ref<Job[]>([
  { id: '1', title: 'farm worker', location: 'lon lon ranch', salary: 3000 },
  { id: '2', title: 'quarryman', location: 'death mountain', salary: 40000 },
  { id: '3', title: 'flute player', location: 'the lost woods', salary: 35000 },
  { id: '4', title: 'fisherman', location: 'lake hylia', salary: 21000 },
  { id: '5', title: 'prison guard', location: 'gerudo valley', salary: 32000 },
]);
</script>

<template>
  <div class="app">
    <JobList :jobs="jobs" />
  </div>
</template>

<style scoped></style>
