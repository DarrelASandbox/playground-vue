<script setup>
import Modal from './components/Modal.vue';
import ModalSlot from './components/ModalSlot.vue';
import { ref } from 'vue';

const title = ref('Vue Website using `npm create vue@latest`');
const things = ref([
  'options api',
  'composition api',
  'template refs',
  'root component',
  'component tree',
  'scoped',
  'data attribute',
  'props',
  'emitting custom events',
  'event modifiers',
  'slots',
  'named slots',
  'teleport component',
]);

const inputRef = ref(null);
const handleClick = () => {
  if (inputRef.value) {
    console.log(inputRef.value);
    inputRef.value.classList.add('active');
    inputRef.value.focus();
  }
};

const showModal = ref(false);
const toggleModal = () => (showModal.value = !showModal.value);

const showModalSlot = ref(false);
const toggleModalSlot = () => (showModalSlot.value = !showModalSlot.value);

const header = 'Sign up for free giveaways!';
const text = '🥑🥑🥑';
const arr = [4, 'different types'];
const obj = { type: 'object' };
const theme = 'light';
</script>

<template>
  <!-- Components -->
  <div v-if="showModal">
    <Modal
      @close="toggleModal"
      :header="header"
      :text="text"
      :arr="arr"
      :obj="obj"
      :theme="theme"
    />
  </div>

  <teleport to=".modals" v-if="showModalSlot">
    <ModalSlot @close="toggleModalSlot" theme="sale">
      <template v-slot:links>
        <a href="#">sign up now</a>
        <a href="#">more info</a>
      </template>

      <h1>Slots</h1>
      <p>Using slots instead of props!</p>
    </ModalSlot>
  </teleport>

  <h1>{{ title }}</h1>
  <section>
    <h3>Things</h3>
    <ol>
      <li v-for="(thing, index) in things" :key="index">{{ thing }}</li>
    </ol>
  </section>

  <section>
    <input type="text" ref="inputRef" />
    <button @click="handleClick">click me</button>
    <button @click.shift="toggleModal" class="dark-btn">⬆️🖱️</button>
    <button @click="toggleModalSlot" class="dark-btn">🖱️</button>
  </section>

  <section>
    <h3>Notes</h3>
    <ul>
      <li>
        <code>Header.vue</code>, <code>Article.vue</code> and <code>Footer.vue</code> are
        nested in <code>App.vue</code>
      </li>
    </ul>
  </section>

  <div>
    <h4>Key Differences Between Slots and Props</h4>
    <table>
      <thead>
        <tr>
          <th>Feature</th>
          <th>Props</th>
          <th>Slots</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Purpose</td>
          <td>Pass data or configuration from parent to child</td>
          <td>Pass content (HTML or templates) from parent to child</td>
        </tr>
        <tr>
          <td>Use Case</td>
          <td>For static data like strings, numbers, arrays, and objects</td>
          <td>For passing dynamic or reusable content to be rendered in the child</td>
        </tr>
        <tr>
          <td>Nature</td>
          <td>Data-driven, used for logic and values</td>
          <td>Content-driven, used for custom content inside a component</td>
        </tr>
        <tr>
          <td>Default Value</td>
          <td>Can define default values</td>
          <td>Can provide default (fallback) content</td>
        </tr>
        <tr>
          <td>Type Enforcement</td>
          <td>Supports type checking (e.g., string, array, object)</td>
          <td>No type enforcement (since slots are for content, not data)</td>
        </tr>
        <tr>
          <td>Parent Control</td>
          <td>Parent controls data passed to child</td>
          <td>Parent controls content rendered inside the child component</td>
        </tr>
        <tr>
          <td>Number of Values</td>
          <td>Typically passes a fixed number of props</td>
          <td>
            Can pass multiple slots for different parts of the component (e.g., header,
            footer, etc.)
          </td>
        </tr>
        <tr>
          <td>Reactivity</td>
          <td>Reactive and can be used for computed properties or values</td>
          <td>Content slots are also reactive, but focus on content rendering</td>
        </tr>
        <tr>
          <td>Binding</td>
          <td>Used with <code>v-bind</code> to bind props to child components</td>
          <td>
            Use <code>&lt;slot&gt;</code> and <code>#slot-name</code> for defining and
            using slots
          </td>
        </tr>
        <tr>
          <td>Example Usage</td>
          <td><code>&lt;Modal :isVisible="true" :title="Welcome!" /&gt;</code></td>
          <td>
            <code
              >&lt;template #header&gt;&lt;h2&gt;Custom
              Header&lt;/h2&gt;&lt;/template&gt;</code
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
th,
td {
  border: 1px solid #ddd;
  padding: 8px;
}
th {
  background-color: #818fb4;
  text-align: left;
}

.active {
  color: red;
}

.dark-btn {
  background-color: transparent;
  border: none;
  font-size: 30px;
}
</style>
