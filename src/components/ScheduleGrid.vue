<script setup>
import { ref, watch } from 'vue'
import TimeSlotInput from './TimeSlotInput.vue'

const props = defineProps({
  sport: String,
})

// Hardcoded locations for now (would come from API)
const locations = ['Main Gym', 'Field 1', 'Field 2', 'Court 1', 'Court 2']

// Hardcoded teams (would come from API)
const teams = ['Varsity', 'JV', 'Freshman']

// Days of the week
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

// Store schedule data for each sport
const scheduleData = ref({})

// Initialize empty schedule for a sport
const initializeSportSchedule = (sport) => {
  if (!scheduleData.value[sport]) {
    scheduleData.value[sport] = {}
    teams.forEach((team) => {
      scheduleData.value[sport][team] = {}
      days.forEach((day) => {
        scheduleData.value[sport][team][day] = {
          startTime: '',
          endTime: '',
          location: '',
        }
      })
    })
  }
}

// Watch for sport changes
watch(
  () => props.sport,
  (newSport) => {
    initializeSportSchedule(newSport)
  },
  { immediate: true },
)

// Methods for saving and loading
const saveSchedule = async () => {
  try {
    // This would be an API call to save the data
    console.log('Saving schedule:', scheduleData.value[props.sport])
  } catch (error) {
    console.error('Error saving schedule:', error)
  }
}

const loadPreset = async () => {
  try {
    // This would be an API call to load the data
    console.log('Loading preset for:', props.sport)
  } catch (error) {
    console.error('Error loading preset:', error)
  }
}
</script>

<template>
  <div class="schedule-grid">
    <div class="action-buttons">
      <button @click="loadPreset">Load Preset</button>
      <button @click="saveSchedule">Save</button>
    </div>

    <table>
      <thead>
        <tr>
          <th>Team</th>
          <th v-for="day in days" :key="day">{{ day }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="team in teams" :key="team">
          <td>{{ team }}</td>
          <td v-for="day in days" :key="day">
            <TimeSlotInput v-model="scheduleData[props.sport][team][day]" :locations="locations" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.schedule-grid {
  margin: 1rem;
}

.action-buttons {
  margin-bottom: 1rem;
}

button {
  margin-right: 1rem;
  padding: 0.5rem 1rem;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f4f4f4;
}
</style>
