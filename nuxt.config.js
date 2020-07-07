import axios from 'axios'

const siteRoutes = function (callback) {
  const token = 'bwir4B2SmD0WBu84SxDvrwtt'
  const version = 'published'
  // eslint-disable-next-line camelcase
  let cache_version = 0

  const toIgnore = ['home', 'en/settings']
  const routes = ['/']

  axios
    .get(`https://api.storyblok.com/v1/cdn/spaces/me?token=${token}`)
    // eslint-disable-next-line camelcase
    // eslint-disable-next-line
    .then(space_res => {
      // timestamp of latest publish
      // eslint-disable-next-line camelcase
      cache_version = space_res.data.space.version

      // Call for all Links using the Links API: https://www.storyblok.com/docs/Delivery-Api/Links

      axios
        // eslint-disable-next-line camelcase
        .get(`https://api.storyblok.com/v1/cdn/links?token=${token}&version=${version}&cv=${cache_version}&per_page=100`
        )
        .then((res) => {
          Object.keys(res.data.links).forEach((key) => {
            if (!toIgnore.includes(res.data.links[key].slug)) {
              routes.push('/' + res.data.links[key].slug)
            }
          })

          callback(null, routes)
        })
    })
}

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
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      { src: 'https://f.convertkit.com/ckjs/ck.5.js', defer: true, async: true }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#327a5a', height: '15px' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/vuelidate'],
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
    '@nuxtjs/sitemap',
    // '@nuxtjs/axios',
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
    ],
    [
      'storyblok-nuxt',
      {
        accessToken:
        process.env.NODE_ENV === 'production'
          ? 'bwir4B2SmD0WBu84SxDvrwtt'
          : 'HyzhsjfQ5DFBvA14Bw7eDQtt',
        cacheProvider: 'memory'
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
  sitemap: {
    hostname: 'https://harbisonapps.netlify.app',
    gzip: true,
    routes: siteRoutes
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
  // axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {}
  },
  generate: {
    routes: siteRoutes
  }
}
