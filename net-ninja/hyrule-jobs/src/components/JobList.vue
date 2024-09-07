<script setup lang="ts">
import type { Job } from '../types/Job';

const props = defineProps<{ jobs: Job[] }>();
</script>

<template>
  <div class="job-list">
    <ul>
      <li v-for="job in props.jobs" :key="job.id">
        <h2>{{ job.title }}</h2>
        in {{ job.location }}
        <div class="salary">
          <p>{{ job.salary }} rupees</p>
        </div>

        <div class="description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam velit vitae
            magni, minima corporis vero hic qui laborum nihil numquam earum id eius
            accusantium ut amet, optio omnis officia eos nostrum saepe est quaerat soluta,
            maxime molestiae! Molestias repudiandae illo fuga earum, exercitationem
            laborum consequatur iste? Laborum sint ad fugiat adipisci, minus perferendis
            repellendus debitis ex fugit excepturi soluta deleniti?
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<style>
.job-list {
  max-width: 960px;
  margin: 40px auto;
}
.job-list ul {
  padding: 0;
}
.job-list li {
  list-style-type: none;
  background: white;
  padding: 16px;
  margin: 16px 0;
  border-radius: 4px;
}
.job-list h2 {
  margin: 0 0 10px;
  text-transform: capitalize;
}
.salary {
  display: flex;
}
.salary img {
  width: 30px;
}
.salary p {
  color: #17bf66;
  font-weight: bold;
  margin: 10px 4px;
}
</style>
