
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Harbison Apps',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [{ src: 'https://f.convertkit.com/ckjs/ck.5.js', defer: true, async: true }]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#327a5a', height: '15px' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vuelidate'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    [
      'nuxt-compress',
      {
        gzip: {
          cache: true
        },
        brotli: {
          threshold: 10240
        }
      }
    ]
  ],
  pwa: {
    meta: {
      title: 'Harbison Apps',
      author: 'Harbison Apps'
    },
    manifest: {
      name: 'Harbison Apps PWA',
      short_name: 'Harbison Apps PWA',
      lang: 'en',
      start_url: '/'
    },
    workbox: {
      offline: true,
      preCaching: ['/'],
      skipWaiting: true
    }
  },
  purgeCSS: {
    whitelist: [
      'seva-form',
      'formkit-form',
      'formkit-background',
      'formkit-subheader',
      'formkit-alert',
      'formkit-alert-error',
      'seva-fields',
      'formkit-fields',
      'formkit-field',
      'formkit-input',
      'formkit-submit',
      'formkit-guarantee'
    ]
  },
  tailwindcss: {
    configPath: '~tailwind.config.js',
    cssPath: '~/assets/css/tailwind.css',
    exposeConfig: false
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
