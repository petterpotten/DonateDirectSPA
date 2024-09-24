<template>
  <div id="app">
    <nav>
      <router-link to="/">Inicio</router-link> |
      <router-link to="/acerca-de-nosotros">Acerca de Nosotros</router-link> |
      <router-link to="/mision-vision-principios"
        >Misión, Visión y Principios</router-link
      >
      | <router-link to="/servicios">Servicios</router-link> |
      <router-link to="/donar">Donar</router-link> |
      <router-link to="/contacto">Contacto</router-link> |
      <router-link to="/directorio">Directorio</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
