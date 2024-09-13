<script setup>
import { onMounted, ref } from 'vue';
import TaskDetails from './components/TaskDetails.vue';
import TaskForm from './components/TaskForm.vue';
import { useTaskStore } from './stores/TaskStore';

const taskStore = useTaskStore();
const showTasks = ref('all');

onMounted(async () => await taskStore.getTasks());
</script>

<template>
  <main>
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia logo" />
      <h1>Pinia Task</h1>
    </header>

    <div class="new-task-form"><TaskForm /></div>

    <nav class="filter">
      <button @click="showTasks = 'all'">All Tasks</button>
      <button @click="showTasks = 'fav'">Fav Tasks</button>
    </nav>

    <div class="loading" v-if="taskStore.isLoading">Loading tasks...</div>

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
