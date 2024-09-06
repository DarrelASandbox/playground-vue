<script setup>
import { defineProps, onMounted, ref } from 'vue';

const props = defineProps({ score: Number });
const rank = ref('loser');

onMounted(() => {
  if (props.score <= 250) {
    rank.value = 'nimble fingers';
  } else if (props.score <= 400) {
    rank.value = 'grandma';
  } else {
    rank.value = 'loser';
  }
});
</script>

<template>
  <p class="rank">{{ rank }}</p>
  <p>Reaction Time: {{ props.score }} ms</p>
</template>

<style>
.rank {
  font-size: 1.4em;
  color: aquamarine;
  font-weight: bold;
}
</style>
