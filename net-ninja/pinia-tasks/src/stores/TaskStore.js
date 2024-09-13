import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [],
    isLoading: false,
  }),

  getters: {
    favTasks: (state) => state.tasks.filter((task) => task.isFav),
    favTaskCount: (state) => state.tasks.reduce((p, c) => (c.isFav ? p + 1 : p), 0),
    totalTaskCount: (state) => state.tasks.length,
  },

  actions: {
    async getTasks() {
      this.isLoading = true;
      const res = await fetch('http://localhost:3000/tasks');
      this.tasks = await res.json();
      console.log(this.tasks);
      this.isLoading = false;
    },

    async addTask(task) {
      this.tasks.push(task);
      const res = await fetch('http://localhost:3000/tasks', {
        method: 'POST',
        body: JSON.stringify(task),
        headers: { 'Content-Type': 'application/json' },
      });
      if (res.error) console.log(res.error);
    },

    async deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
      const res = await fetch('http://localhost:3000/tasks/' + id, { method: 'DELETE' });
      if (res.error) console.log(res.error);
    },

    async toggleFavTask(id) {
      const task = this.tasks.find((task) => task.id === id);
      task.isFav = !task.isFav;

      const res = await fetch('http://localhost:3000/tasks/' + id, {
        method: 'PATCH',
        body: JSON.stringify({ isFav: task.isFav }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (res.error) console.log(res.error);
    },
  },
});
