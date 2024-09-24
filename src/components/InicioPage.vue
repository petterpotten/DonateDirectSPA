<template>
  <div class="inicio-container">
    <div
      class="inicio-wrapper"
      :style="{ transform: `translateX(${translateX})` }"
    >
      <div v-for="(src, index) in images" :key="index" class="inicio-slide">
        <img
          :src="src"
          :alt="`Slide ${index}`"
          :class="['inicio-image', { dimmed: isHovered }]"
        />
      </div>
    </div>
    <div
      class="inicio-overlay"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <img
        src="@/assets/AlbergueCasaArcoirisLogo.ico"
        alt="Albergue Casa Arcoíris Logo"
        class="inicio-logo"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "InicioPage",
  data() {
    return {
      images: [
        require("@/assets/images/Inicio/imagen_inicio_1.jpg"),
        require("@/assets/images/Inicio/imagen_inicio_2.jpg"),
        require("@/assets/images/Inicio/imagen_inicio_3.jpg"),
        require("@/assets/images/Inicio/imagen_inicio_4.jpg"),
      ],
      currentIndex: 0,
      isHovered: false,
    };
  },
  computed: {
    translateX() {
      return -(this.currentIndex * 100) + "%";
    },
  },
  mounted() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 3000); // Cambiar cada 3 segundos
  },
};
</script>

<style src="./InicioPage.css"></style>
