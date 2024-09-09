<script setup>
import { ref } from 'vue';

const items = ref([
  { id: 0, title: 'Item A', list: 1 },
  { id: 1, title: 'Item B', list: 1 },
  { id: 2, title: 'Item C', list: 2 },
]);

let draggedItem = null;
const getList = (list) => items.value.filter((item) => item.list === list);

const startDrag = (e, item) => {
  draggedItem = item;
  e.dataTransfer.dropEffect = 'move';
  e.dataTransfer.effectAllowed = 'move';
};

const onDrop = (e, list) => {
  if (draggedItem) draggedItem.list = list;
  console.log(draggedItem);
  draggedItem = null; // clear dragged item after drop
};
</script>

<template>
  <div class="drop-zone" @drop="(e) => onDrop(e, 1)" @dragenter.prevent @dragover.prevent>
    <div
      v-for="item in getList(1)"
      :key="item.id"
      class="drag-el"
      draggable="true"
      @dragstart="(e) => startDrag(e, item)"
    >
      {{ item.title }}
    </div>
  </div>
  <div class="drop-zone" @drop="(e) => onDrop(e, 2)" @dragenter.prevent @dragover.prevent>
    <div
      v-for="item in getList(2)"
      :key="item.id"
      class="drag-el"
      draggable="true"
      @dragstart="(e) => startDrag(e, item)"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<style>
.drop-zone {
  width: 50%;
  margin: 50px auto;
  background-color: #ecf0f1;
  padding: 10px;
  min-height: 10px;
}

.drag-el {
  background-color: #3498db;
  color: white;
  padding: 5px;
  margin-bottom: 10px;
}

.drag-el:nth-last-of-type(1) {
  margin-bottom: 0;
}
</style>
