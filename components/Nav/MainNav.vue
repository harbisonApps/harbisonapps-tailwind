<template>
  <div>
    <div class="absolute bg-green-800 w-full py-3 invisible md:visible">
      <div class="z-10 absolute left-0 ml-3 xl:ml-12 -mt-1 bg-transparent">
        <button
          @click="toggleTheme"
          class=""
          type="button"
          name="Switch Theme"
          title="Switch Theme"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="lightgray" width="40px" height="40px"><path d="M0 0h24v24H0z" fill="none" />
            <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02zM8 16h2.5l1.5 1.5 1.5-1.5H16v-2.5l1.5-1.5-1.5-1.5V8h-2.5L12 6.5 10.5 8H8v2.5L6.5 12 8 13.5V16zm4-7c1.66 0 3 1.34 3 3s-1.34 3-3 3V9z" />
          </svg>
        </button>
      </div>
      <div class="">
        <h1 class="text-center md:-ml-40 lg:ml-0 text-2xl text-gray-300">
          Harbison Apps
        </h1>
      </div>
      <menu class="absolute text-center ml-16 md:ml-0 md:right-0 -mt-10 md:mr-2 lg:mr-3 text-2xl">
        <nuxt-link exact to="/about">
          <button class="text-gray-300 mx-auto hover:text-gray-900 hover:bg-gray-300 px-3 py-1 rounded mr-1">
            About
          </button>
        </nuxt-link>
        <nuxt-link exact to="/services">
          <button class="text-gray-300 mx-auto hover:text-gray-900 hover:bg-gray-300 px-3 py-1 rounded mr-1">
            Services
          </button>
        </nuxt-link>
        <nuxt-link exact to="/blog">
          <button class="text-gray-300 mx-auto hover:text-gray-900 hover:bg-gray-300 px-3 py-1 rounded mr-1">
            Blog
          </button>
        </nuxt-link>
      </menu>
    </div>
    <div class=" visible md:invisible absolute text-center bg-green-800 w-full py-2">
      <div class=" w-full">
        <button
          @click="toggleTheme"
          class=" z-10 absolute left-0 ml-3"
          type="button"
          name="Switch Theme"
          title="Switch Theme"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="lightgray" width="40px" height="40px"><path d="M0 0h24v24H0z" fill="none" />
            <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02zM8 16h2.5l1.5 1.5 1.5-1.5H16v-2.5l1.5-1.5-1.5-1.5V8h-2.5L12 6.5 10.5 8H8v2.5L6.5 12 8 13.5V16zm4-7c1.66 0 3 1.34 3 3s-1.34 3-3 3V9z" />
          </svg>
        </button>
        <h1 class="text-center text-2xl text-gray-300">
          Harbison Apps
        </h1>
      </div>
      <menu class="text-center text-xl w-full -ml-6">
        <nuxt-link exact to="/about">
          <button class="text-gray-300 mx-auto hover:text-gray-900 hover:bg-gray-300 px-3 py-1 rounded mr-1">
            About
          </button>
        </nuxt-link>
        <nuxt-link exact to="/services">
          <button class="text-gray-300 mx-auto hover:text-gray-900 hover:bg-gray-300 px-3 py-1 rounded mr-1">
            Services
          </button>
        </nuxt-link>
        <nuxt-link exact to="/blog">
          <button class="text-gray-300 mx-auto hover:text-gray-900 hover:bg-gray-300 px-3 py-1 rounded mr-1">
            Blog
          </button>
        </nuxt-link>
      </menu>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleTheme () {
      // const m = localStorage.getItem('theme')
      // this.$colorMode.preference =
      //   this.$colorMode.value === 'light' ? 'dark' : 'light'
      // if (m === 'dark') {
      //   localStorage.setItem('theme', 'dark')
      // } else {
      //   localStorage.removeItem('theme')
      // }

      // eslint-disable-next-line no-console
      console.log('toggle theme')
    }
  }
}
</script>

<style scoped>
/* .toggle-settings{
  height: 50px;
  color: lightgray;
} */
</style>
