import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import MarkdownIt from "markdown-it";
import { full as emoji } from 'markdown-it-emoji'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const markdown = new MarkdownIt({html: true, breaks: true}).use(emoji);

app.use(createPinia())
app.use(router)

app.config.globalProperties.markdown = markdown;

app.mount('#app')
