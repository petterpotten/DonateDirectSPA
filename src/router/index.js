import { createRouter, createWebHistory } from "vue-router";
import InicioPage from "../components/InicioPage.vue";
import AcercaDeNosotrosPage from "../components/AcercaDeNosotrosPage.vue";
import MisionVisionPrincipiosPage from "../components/MisionVisionPrincipiosPage.vue";
import ServiciosPage from "../components/ServiciosPage.vue";
import DonarPage from "../components/DonarPage.vue";
import ContactoPage from "../components/ContactoPage.vue";
import DirectorioPage from "../components/DirectorioPage.vue";
import NotFoundComponent from "../components/NotFoundComponent.vue";

const routes = [
  {
    path: "/",
    name: "InicioPage",
    component: InicioPage,
  },
  {
    path: "/acerca-de-nosotros",
    name: "AcercaDeNosotrosPage",
    component: AcercaDeNosotrosPage,
  },
  {
    path: "/mision-vision-principios",
    name: "MisionVisionPrincipiosPage",
    component: MisionVisionPrincipiosPage,
  },
  {
    path: "/servicios",
    name: "ServiciosPage",
    component: ServiciosPage,
  },
  {
    path: "/donar",
    name: "DonarPage",
    component: DonarPage,
  },
  {
    path: "/contacto",
    name: "ContactoPage",
    component: ContactoPage,
  },
  {
    path: "/directorio",
    name: "DirectorioPage",
    component: DirectorioPage,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFoundComponent",
    component: NotFoundComponent,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
