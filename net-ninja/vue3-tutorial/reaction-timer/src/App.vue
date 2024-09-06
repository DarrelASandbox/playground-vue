<script setup>
import { ref } from 'vue';
import Block from './components/Block.vue';
import Results from './components/Results.vue';

const isPlaying = ref(false);
const delay = ref(0);
const score = ref(0);
const showResults = ref(false);

const start = () => {
  isPlaying.value = true;
  showResults.value = false;
  delay.value = 2000 + Math.random() * 5000;
};

const endGame = (reactionTime) => {
  isPlaying.value = false;
  showResults.value = true;
  score.value = reactionTime;
};
</script>

<template>
  <h1>Reaction Timer</h1>
  <button @click="start" v-show="!isPlaying" class="playBtn">▶️</button>
  <Block v-if="isPlaying" :delay="delay" @stop="endGame" />
  <Results v-if="showResults" :score="score" />
</template>

<style>
.playBtn {
  font-size: 50px;
  background: none;
  border: none;
  margin: 0px;
  padding: 0px;
}
</style>
