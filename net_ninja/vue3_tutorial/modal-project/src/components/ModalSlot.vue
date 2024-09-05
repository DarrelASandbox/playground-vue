<script setup>
const props = defineProps({ theme: String });

const emit = defineEmits(['close']);
const closeModal = () => emit('close');
</script>

<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <slot>default content for fallback</slot>
      <div class="actions"><slot name="links"></slot></div>
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
