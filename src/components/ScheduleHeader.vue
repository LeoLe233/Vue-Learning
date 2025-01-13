<script setup>
import { ref } from 'vue'

const sports = ['Tennis', 'Basketball', 'Soccer', 'Volleyball']
const selectedSport = ref('Tennis')

defineEmits(['sportChange'])
</script>

<template>
  <div class="header">
    <h1>Athletic Schedule Tool</h1>
    <div class="sport-selector">
      <select v-model="selectedSport" @change="$emit('sportChange', selectedSport)">
        <option v-for="sport in sports" :key="sport" :value="sport">
          {{ sport }}
        </option>
      </select>
    </div>
  </div>
</template>

<style scoped>
.header {
  text-align: center;
  margin-bottom: 2rem;
}

.sport-selector {
  margin: 1rem 0;
}

select {
  padding: 0.5rem;
  width: 200px;
}
</style>
