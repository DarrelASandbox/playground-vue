<script setup>
import { useTaskStore } from '@/stores/TaskStore';

const props = defineProps({ task: Object });
const taskStore = useTaskStore();
</script>

<template>
  <div class="task">
    <h3>{{ props.task.title }}</h3>
    <div class="icons">
      <i class="material-icons" @click="taskStore.deleteTask(props.task.id)">delete</i>
      <i
        class="material-icons"
        :class="{ active: task.isFav }"
        @click="taskStore.toggleFavTask(props.task.id)"
        >favorite</i
      >
    </div>
  </div>
</template>
