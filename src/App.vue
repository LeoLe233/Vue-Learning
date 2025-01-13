<script setup>
import { ref } from 'vue'
import ScheduleHeader from './components/ScheduleHeader.vue'
import ScheduleGrid from './components/ScheduleGrid.vue'

const currentSport = ref('Tennis')

const handleSportChange = (sport) => {
  currentSport.value = sport
}
</script>

<template>
  <div class="app">
    <ScheduleHeader @sport-change="handleSportChange" />
    <ScheduleGrid :sport="currentSport" />
  </div>
</template>

<style>
.app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}
</style>
