<script setup>
import { ref } from 'vue';
import TaskDetails from './components/TaskDetails.vue';
import { useTaskStore } from './stores/TaskStore';

const taskStore = useTaskStore();
const showTasks = ref('all');
</script>

<template>
  <main>
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia logo" />
      <h1>Pinia Task</h1>
    </header>

    <nav class="filter">
      <button @click="showTasks = 'all'">All Tasks</button>
      <button @click="showTasks = 'fav'">Fav Tasks</button>
    </nav>

    <div class="task-list" v-if="showTasks === 'all'">
      <p>Total Tasks: {{ taskStore.totalTaskCount }}</p>
      <div v-for="task in taskStore.tasks" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>

    <div class="task-list" v-if="showTasks === 'fav'">
      <p>Fav Tasks: {{ taskStore.favTaskCount }}</p>
      <div v-for="task in taskStore.favTasks" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>
  </main>
</template>
