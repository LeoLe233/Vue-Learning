// This mounts the vue app and is used in index.html
// Can think of it as a "bridge" file that connects app.vue to index.js
// Don't need to touch anything here
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
