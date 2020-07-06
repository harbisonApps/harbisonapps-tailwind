<template>
  <div>
    <div class="absolute bg-green-800 w-full py-3 invisible md:visible">
      <div class="z-10 absolute left-0 ml-3 bg-transparent">
        <button
          @click="toggleTheme"
          class="rounded-full bg-gray-300"
          type="button"
          name="Switch Theme"
          title="Switch Theme"
        >
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            class="w-8 h-8"
          >
            <path
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
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
          class="rounded-full bg-gray-300 z-10 absolute left-0 ml-3"
          type="button"
          name="Switch Theme"
          title="Switch Theme"
        >
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            class="w-8 h-8"
          >
            <path
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
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
