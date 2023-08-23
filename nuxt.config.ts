export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["vuetify/styles/main.sass", "@mdi/font/css/materialdesignicons.css"],
  build: {
    transpile: ["vuetify"],
  },
  // plugins: ["@/plugins/firebase.js"],
});
