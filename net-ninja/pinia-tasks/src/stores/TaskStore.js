import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [
      { id: 1, title: 'buy some milk', isFav: false },
      { id: 2, title: 'play Gloomhaven', isFav: true },
    ],
  }),

  getters: {
    favTasks: (state) => state.tasks.filter((task) => task.isFav),
    favTaskCount: (state) => state.tasks.reduce((p, c) => (c.isFav ? p + 1 : p), 0),
    totalTaskCount: (state) => state.tasks.length,
  },
});
