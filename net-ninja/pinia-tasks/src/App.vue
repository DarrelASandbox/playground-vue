<script setup>
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';
import TaskDetails from './components/TaskDetails.vue';
import TaskForm from './components/TaskForm.vue';
import { useTaskStore } from './stores/TaskStore';

const taskStore = useTaskStore();
const showTasks = ref('all');
const { getTasks } = taskStore;
const { tasks, isLoading, favTasks, favTaskCount, totalTaskCount } =
  storeToRefs(taskStore);

onMounted(async () => await getTasks());
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

    <div class="loading" v-if="isLoading">Loading tasks...</div>

    <div class="task-list" v-if="showTasks === 'all'">
      <p>Total Tasks: {{ totalTaskCount }}</p>
      <div v-for="task in tasks" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>

    <div class="task-list" v-if="showTasks === 'fav'">
      <p>Fav Tasks: {{ favTaskCount }}</p>
      <div v-for="task in favTasks" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>

    <button @click="taskStore.$reset">Reset State</button>
  </main>
</template>
