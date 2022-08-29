import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import Routes from "./Routes";
import VueFeather from "vue-feather";

const pinia = createPinia();

createApp(App)
  .use(pinia)
  .use(Routes)
  .component("VueFeather", VueFeather)
  .mount("#app");
