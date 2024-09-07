<script setup lang="ts">
import type { OrderTerm } from '@/types/OrderTerm';
import { computed } from 'vue';
import type { Job } from '../types/Job';

const props = defineProps<{ jobs: Job[]; order: OrderTerm }>();

// Creates a computed property that returns a sorted array of jobs based on the selected order property.
// It first creates a shallow copy of the jobs array, then sorts it by the given property (e.g., title, salary).
const sortedJobs = computed(() =>
  [...props.jobs].sort((a: Job, b: Job) => (a[props.order] > b[props.order] ? 1 : -1))
);
</script>

<template>
  <div class="job-list">
    <p>Ordered by {{ props.order }}</p>

    <transition-group name="list" tag="ul">
      <li v-for="job in sortedJobs" :key="job.id">
        <h2>{{ job.title }}</h2>
        in {{ job.location }}
        <div class="salary">
          <img src="../assets/rupee.svg" alt="rupee icon" />
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
    </transition-group>
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
.list-move {
  transition: all 1s;
}
</style>
