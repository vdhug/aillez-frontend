export default defineNuxtConfig({
  app: {
    head: {
        title: "frontend",
        htmlAttrs: {
        lang: "en",
        },
        meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
        ],
        link: [
            { rel: "preconnect", href: "https://fonts.googleapis.com" },
            { rel: "preconnect", href: "https://fonts.gstatic.com" },
            { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&family=Roboto:wght@500;700;900&display=swap" },

            // Icon Font Stylesheet
            { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" },
            { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" },

            // Libraries Stylesheet
            { rel: 'stylesheet', href: '/css/animate.min.css' },
            { rel: 'stylesheet', href: '/css/owl.carousel.min.css' },
            { rel: 'stylesheet', href: '/static/lightbox/css/lightbox.min.css' },

            // Customized Bootstrap Stylesheet
            { rel: 'stylesheet', href: '/css/bootstrap.min.css' },

            // Template Stylesheet
            { rel: "stylesheet", href: "/css/style.css" },
        ],
        script: [
            {
                src: "https://code.jquery.com/jquery-3.4.1.min.js",
                type: "text/javascript"
            },
            {
                src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js",
                type: "text/javascript"
            },
            {
                src: "/js/wow.min.js",
                type: "text/javascript"
            },
            {
                src: "/js/easing.min.js",
                type: "text/javascript"
            },
            {
                src: "/js/waypoints.min.js",
                type: "text/javascript"
            },
            {
                src: "/js/counterup.min.js",
                type: "text/javascript"
            },
            {
                src: "/js/owl.carousel.min.js",
                type: "text/javascript"
            },
            {
                src: "/js/isotope.min.js",
                type: "text/javascript"
            },
            {
                src: "/static/lightbox/js/lightbox.min.js",
                type: "text/javascript"
            },
            {
                src: "/js/main.js",
                type: "text/javascript"
            },
        ]
    },
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxtjs",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  server: {
    host: "0.0.0.0",
    port: process.env.PORT || 3000,
  },
});
