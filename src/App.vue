<script setup>
// JS part
import { ref } from 'vue'

const blog = ref({
  //Defines an object with properties
  name: 'Leo',
  info: 'Executive chef of LionLink',
  link: '/who-is-leo',
})

console.log(blog.)
</script>

<template>
  <!-- HTML part -->
  <div>
    <header>
      <h1>
        <a :href="blog.link"> {{ blog.name }}</a>
      </h1>
      <article>
        {{ blog.info }}
      </article>
    </header>
  </div>
</template>

<style scoped>
/* CSS part*/
</style>
