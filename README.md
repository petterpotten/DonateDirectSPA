# DonateDirectSPA Aplicada a Albergue Casa Arcoíris

Este proyecto es una aplicación de una sola página (SPA) creada para el Albergue Casa Arcoíris. La aplicación está desarrollada con [Vue.js](https://vuejs.org/) y usa [Tailwind CSS](https://tailwindcss.com/) para los estilos. 

## Secciones de la SPA
- **Inicio**: Presentación y bienvenida.
- **Acerca de Nosotros**: Información sobre la organización.
- **Misión, Visión y Principios**: Valores y objetivos de la organización.
- **Servicios**: Detalles sobre los servicios ofrecidos.
- **Donar**: Opción para realizar donaciones.
- **Contacto**: Formulario de contacto y detalles de comunicación.
- **Directorio**: Información de contacto de recursos y servicios relacionados.

## Configuración del Proyecto

### Instalación de dependencias
Instala las dependencias necesarias ejecutando el siguiente comando:
```
npm install
```

### Compilar y recargar en desarrollo
```
npm run serve
```

### Compilar y minimizar para producción
```
npm run build
```

### Lint y correcciones de estilo
```
npm run lint
```

## Personalización de configuración
Para más detalles sobre la configuración personalizada de Vue.js, visita la [Referencia de Configuración](https://cli.vuejs.org/config/).

## Requisitos previos
[Node.js](https://nodejs.org/en) (versión recomendada: 16.x o superior),

[Vue CLI](https://cli.vuejs.org/),

## Preset CLI
Este proyecto fue configurado utilizando el preset:
```
SPA-Project-Setup-bypetterpotten
```

## Instalación de Tailwind CSS
Para instalar Tailwind CSS en tu proyecto, sigue estos pasos:

1. **Instala Tailwind CSS a través de npm**:
   ```
   npm install -D tailwindcss postcss autoprefixer
   ```
2. **Genera los archivos de configuración:**:
   ```
   npx tailwindcss init -p
   ```
    Esto creará dos archivos: tailwind.config.js y postcss.config.js.

3. **Configura Tailwind para eliminar el CSS no utilizado en producción:**:
    Abre tailwind.config.js y modifica el contenido de la propiedad content:
   ```
    module.exports = {
        content: [
            "./src/**/*.{vue,js,ts,jsx,tsx}",
        ],
        theme: {
            extend: {},
        },
        plugins: [],
    }
   ```
4. **Agrega las directivas de Tailwind a tu archivo CSS:**:
    Crea un archivo CSS en tu proyecto (por ejemplo, src/index.css) y añade lo siguiente:
   ```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
   ```
5. **Importa el archivo CSS en tu archivo principal :**:
    (src/main.js o src/main.ts)
   ```
   import './index.css';
   ```
6. **Compila y recarga en desarrollo :**:
    (src/main.js o src/main.ts)
   ```
   npm run serve
   ```

## Despliegue
Una vez que hayas generado los archivos para producción, puedes subirlos a cualquier servicio de hosting o despliegue.

## Licencia
Este proyecto está licenciado bajo la [MIT License](LICENSE).




