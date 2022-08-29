import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import Routes from "./Routes";

const pinia = createPinia();

createApp(App).use(pinia).use(Routes).mount("#app");
