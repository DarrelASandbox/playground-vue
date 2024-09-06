<script setup>
const props = defineProps({
  header: String,
  text: String,
  arr: Array,
  obj: Object,
  theme: String,
});

const emit = defineEmits(['close']);
const closeModal = () => emit('close');
</script>

<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ light: theme === 'light' }">
      <h1>{{ props.header }}</h1>
      <h2>{{ props.text }}</h2>
      <h2>Pass an array of props: {{ props.arr }}</h2>
      <h2>Pass an object of props: {{ props.obj.type }}</h2>
      <p>modal content</p>
    </div>
  </div>
</template>

<style scoped>
.modal {
  width: 500px;
  padding: 20px;
  margin: 100px auto;
  background: #4c3bcf;
  border-radius: 10px;
  text-align: center;
}

.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}

.modal.sale {
  background: #dbafa0;
  color: #49243e;
}

h1 {
  display: inline-block;
  padding-bottom: 10px;
  color: #32012f;
}
</style>
