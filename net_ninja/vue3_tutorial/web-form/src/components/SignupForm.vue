<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const role = ref('');
const terms = ref(false);
const skills = ref([]);
const tempSkill = ref('');

/**
 * Adds a new skill to the skills array when the user presses the comma (,) or Enter key.
 * - For comma: removes the last character (comma) before adding the skill.
 * - Converts the skill to uppercase.
 * - Ensures no duplicate skills are added.
 * - Clears the input field after the skill is added.
 */
const addSkill = (e) => {
  if (
    (e.key === ',' || e.key === 'Enter') &&
    tempSkill.value &&
    !skills.value.includes(tempSkill.value)
  ) {
    skills.value.push(
      e.key === ','
        ? tempSkill.value.slice(0, -1).toUpperCase()
        : tempSkill.value.toUpperCase()
    );
    tempSkill.value = '';
  }
};

const deleteSkill = (skill) => (skills.value = skills.value.filter((s) => s !== skill));

const passwordErr = ref('');
const handleSubmit = () => {
  passwordErr.value =
    password.value.length > 7 ? '' : 'Password must be at least 8 characters long.';

  if (!passwordErr.value) {
    console.log('email: ', email.value);
    console.log('password: ', password.value);
    console.log('role: ', role.value);
    console.log('skills: ', skills.value);
    console.log('terms accepted: ', terms.value);
  }
};
</script>

<template>
  <!-- v-modal: two way data binding -->
  <form @submit.prevent="handleSubmit" @keydown.enter.prevent>
    <label for="email">Email:</label>
    <input type="email" required v-model="email" />
    <label for="password">Password:</label>
    <input type="password" required v-model="password" />
    <div v-if="passwordErr" class="error">{{ passwordErr }}</div>

    <label for="role">Role:</label>
    <select required v-model="role">
      <option value="developer">Web Developer</option>
      <option value="designer">Web Designer</option>
    </select>

    <label for="skills">Skills:</label>
    <input type="text" v-model="tempSkill" @keyup="addSkill" />
    <div v-for="(skill, index) in skills" :key="index" class="skill">
      <span @click="deleteSkill(skill)">{{ skill }}</span>
    </div>

    <div class="terms">
      <input type="checkbox" required v-model="terms" />
      <label for="terms">Accept terms and conditions</label>
    </div>

    <div class="submit">
      <button>Create an account</button>
    </div>
  </form>
</template>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}

input[type='checkbox'] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}

.skill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}

button {
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}

.submit {
  text-align: center;
}

.error {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>
