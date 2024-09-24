const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.ico$/,
          use: {
            loader: "file-loader",
            options: {
              name: "[name].[hash].[ext]", // Nombre del archivo resultante
              outputPath: "assets/", // Carpeta de salida para los archivos
            },
          },
        },
      ],
    },
  },
});
