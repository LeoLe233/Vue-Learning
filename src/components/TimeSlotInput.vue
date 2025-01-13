<script setup>
const props = defineProps({
  modelValue: Object,
  locations: Array,
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (field, value) => {
  emit('update:modelValue', {
    ...props.modelValue,
    [field]: value,
  })
}
</script>

<template>
  <div class="time-slot">
    <div class="input-group">
      <label>Start:</label>
      <input
        type="time"
        :value="modelValue.startTime"
        @input="updateValue('startTime', $event.target.value)"
      />
    </div>
    <div class="input-group">
      <label>End:</label>
      <input
        type="time"
        :value="modelValue.endTime"
        @input="updateValue('endTime', $event.target.value)"
      />
    </div>
    <div class="input-group">
      <label>Location:</label>
      <select :value="modelValue.location" @change="updateValue('location', $event.target.value)">
        <option value="">Select location</option>
        <option v-for="location in locations" :key="location" :value="location">
          {{ location }}
        </option>
      </select>
    </div>
  </div>
</template>

<style scoped>
.time-slot {
  padding: 0.5rem;
}

.input-group {
  margin-bottom: 0.5rem;
}

label {
  display: block;
  font-size: 0.8rem;
  margin-bottom: 0.2rem;
}

input,
select {
  width: 100%;
  padding: 0.3rem;
}
</style>
