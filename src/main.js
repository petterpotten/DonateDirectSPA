import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Asegúrate de que la ruta al archivo de configuración del router es correcta
import "./assets/styles/tailwind.css";

const app = createApp(App);

// Usa el router en la aplicación
app.use(router);

// Monta la aplicación en el elemento HTML con el id "app"
app.mount("#app");
