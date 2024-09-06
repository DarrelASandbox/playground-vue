<script setup>
import { onMounted, onUpdated, ref } from 'vue';

const props = defineProps({ delay: Number });
const showBlock = ref(false);

// Registering Lifecycle Hooks
onMounted(() => {
  console.log('the component is now mounted.');
  setTimeout(() => {
    showBlock.value = true;
    startTimer();
  }, props.delay);
});

onUpdated(() => console.log('the component is now updated.'));

// Helpers
const timer = ref(0);
const reactionTime = ref(0);
const emit = defineEmits(['stop']);

const stopTimer = () => {
  clearInterval(timer.value);
  emit('stop', reactionTime.value);
};

const startTimer = () =>
  (timer.value = setInterval(() => (reactionTime.value += 10), 10));
</script>

<template>
  <button v-if="showBlock" @click="stopTimer" class="block">🤚🏻</button>
</template>

<style>
.block {
  width: 350px;
  height: 350px;
  border-radius: 20px;
  background-color: #503c3c;
  color: #eee;
  text-align: center;
  margin: 20px auto;
  font-size: 172px;
}
</style>
