const pkg = require('./package')
const cfg = require('./config')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Basitceogren.com - Adım adım nasıl yapılır',
    meta: [
      { charset: 'utf-8' },
      { name="google-site-verification", content="MXmf95C8M7wRsTYCjBekmFlELU9npM7EDZBn0qEGtQo" },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Teknoloji, hayat, spor, yemek ve birçok kategoride adım adım nasıl yapılır tavsiyeleri.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&amp;subset=latin-ext' }
    ]
  },
  

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#D81159' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/style.css',
    // SCSS file in the project
    '@/assets/css/style.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
    ['@nuxtjs/google-analytics', {
      id: 'UA-121930768-1'
    }]
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  env: {
    fbAPI: cfg.apiKey
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
