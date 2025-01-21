<template>
  <div>
    <nav class="flex justify-between items-center bg-transparent p-4">
      <div>
        <img
          src="@/assets/AlbergueCasaArcoirisLogo.ico"
          alt="Logo del Albergue"
          class="h-10"
        />
      </div>
      <ul class="flex space-x-4">
        <li @click="scrollTo('inicio')">Inicio</li>
        <li @click="scrollTo('acerca-de-nosotros')">Acerca de Nosotros</li>
        <li @click="scrollTo('mision-vision-principios')">
          Misión, Visión y Principios
        </li>
        <li @click="scrollTo('servicios')">Servicios</li>
        <li @click="scrollTo('donar')">Donar</li>
        <li @click="scrollTo('contacto')">Contacto</li>
        <li @click="scrollTo('directorio')">Directorio</li>
      </ul>
    </nav>

    <section id="inicio" class="py-20">
      <InicioPage />
      <!-- Componente de Inicio -->
    </section>
    <section id="acerca-de-nosotros" class="py-20">
      <AcercaDeNosotrosPage />
      <!-- Componente Acerca de Nosotros -->
    </section>
    <section id="mision-vision-principios" class="py-20">
      <MisionVisionPrincipiosPage />
      <!-- Componente Misión, Visión y Principios -->
    </section>
    <section id="servicios" class="py-20">
      <ServiciosPage />
      <!-- Componente Servicios -->
    </section>
    <section id="donar" class="py-20">
      <DonarPage />
      <!-- Componente Donar -->
    </section>
    <section id="contacto" class="py-20">
      <ContactoPage />
      <!-- Componente Contacto -->
    </section>
    <section id="directorio" class="py-20">
      <DirectorioPage />
      <!-- Componente Directorio -->
    </section>

    <!-- Botón flotante -->
    <button
      v-show="showScrollButton"
      class="scroll-to-top"
      @click="scrollTo('inicio')"
    >
      ▲
    </button>
  </div>
</template>

<script>
import InicioPage from "./InicioPage.vue";
import AcercaDeNosotrosPage from "./AcercaDeNosotrosPage.vue";
import MisionVisionPrincipiosPage from "./MisionVisionPrincipiosPage.vue";
import ServiciosPage from "./ServiciosPage.vue";
import DonarPage from "./DonarPage.vue";
import ContactoPage from "./ContactoPage.vue";
import DirectorioPage from "./DirectorioPage.vue";

export default {
  name: "MainContainer",
  components: {
    InicioPage,
    AcercaDeNosotrosPage,
    MisionVisionPrincipiosPage,
    ServiciosPage,
    DonarPage,
    ContactoPage,
    DirectorioPage,
  },
  data() {
    return {
      showScrollButton: false, // Controla la visibilidad del botón flotante
    };
  },
  methods: {
    scrollTo(section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
    handleScroll() {
      this.showScrollButton = window.scrollY > 100; // Muestra el botón si el scroll supera 100 píxeles
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll); // Escucha el evento de scroll
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll); // Limpia el evento al desmontar el componente
  },
};
</script>

<style scoped src="./MainContainer.css"></style>
