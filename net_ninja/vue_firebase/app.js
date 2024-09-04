const app = Vue.createApp({
  data() {
    const baseURL = 'https://www.google.com/search?q=vue+';

    return {
      cdn: 'https://unpkg.com/vue@3/dist/vue.global.js',
      things: [
        { name: 'createApp', url: baseURL + 'createApp', hasEmoji: true },
        { name: 'mount', url: baseURL + 'mount', hasEmoji: false },
        { name: 'template', url: baseURL + 'template', hasEmoji: false },
        { name: 'data', url: baseURL + 'data', hasEmoji: false },
        { name: 'methods', url: baseURL + 'methods', hasEmoji: true },
        { name: 'directives', url: baseURL + 'directives', hasEmoji: false },
        { name: 'mouse events', url: baseURL + 'mouse+events', hasEmoji: false },
        { name: 'attribute binding', url: baseURL + 'attribute+binding', hasEmoji: true },
        { name: 'dynamic classes', url: baseURL + 'dynamic+classes', hasEmoji: true },
        { name: 'computed', url: baseURL + 'computed', hasEmoji: true },
      ],
      num: 5,
      bool: false,
      isVisible: false,
      someData: 'someData from app.js',
      x: 0,
      y: 0,
    };
  },

  methods: {
    increaseNum() {
      this.num++;
    },

    decreaseNum() {
      this.num--;
    },

    toggleBomb() {
      this.bool = !this.bool;
    },

    toggleVisibility() {
      this.isVisible = !this.isVisible;
    },

    handleEvent(e, data) {
      console.log(e, e.type);
      if (data) console.log(data);
    },

    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
      console.log(`(${this.x}, ${this.y})`);
    },

    toggleHasEmoji(thing) {
      thing.hasEmoji = !thing.hasEmoji;
    },
  },

  computed: {
    getEmojiList() {
      let emojiList = [];
      for (let i = 0; i <= this.num; i++) {
        emojiList.push(i % 2 === 0 ? '🎁' : '🍠');
      }
      return emojiList;
    },

    filteredThings() {
      return this.things.filter((thing) => thing.hasEmoji);
    },
  },
});

app.mount('#app');
