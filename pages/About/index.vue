<template>
  <div class="text-left dark:text-gray-200 text-gray-900 px-2 md:px-4 -mt-40 lg:-mt-56 mx-auto w-full lg:w-11/12">
    <div id="header" class=" dark:bg-gray-800 bg-gray-300 rounded-t-md text-center pt-4 md:w-3/4 lg:w-3/5 mx-auto pb-2">
      <h2 class="text-center text-3xl mb-1">
        <strong>About Me</strong>
      </h2>
    </div>

    <div class="dark:bg-gray-800 bg-gray-300 rounded-md px-4 pb-1 pt-4 -mt-3 md:-mt-2 w-full">
      <div class="flex flex-wrap justify-between lg:justify-center">
        <div class="md:pr-2 w-full md:w-2/3 lg:w-3/4">
          <h3 class=" text-xl text-center mb-3">
            Building the next generation of web apps
          </h3>

          <p class="mb-3">
            I have built over 70 websites over years. From static HTML sites and ones utilizing
            content management systems; to dynamic projects build with .NET, Angular, and Vue.
            Vue, as well as Nuxt and Quasar are my go to for new or rebuilding websites.
          </p>

          <h4 class=" text-xl text-center mb-3">
            Why Use Vue?
          </h4>

          <p class=" mb-3">
            VueJS has learned form the other JavaScript frameworks on the market. Implementing and improving
            their features, yet remaining as unopinionated as possible. Vue has the smallest payload of all
            the other JavaScript frameworks, with the Vue's 3rd iteration in Beta and scheduled for release
            in September, that size will be getting even smaller. VueJS is user and developer-friendly, has
            tons of useful libraries, a solid community and a great toolset.
          </p>

          <ul class="mb-3 ml-12 md:ml-32 lg:ml-64 list-disc">
            <li>Development Speed</li>
            <li>Smallest JavaScript Payload</li>
            <li>Versatile</li>
            <li>Reusability</li>
            <li>Large Ecosystem</li>
            <li>Future Proof</li>
          </ul>

          <p class="mb-3">
            My blog post on why
            <nuxt-link class="text-gray-500" exact to="/blog/why-vue">
              <span class=" underline">
                I Love Vue
              </span>
            </nuxt-link> goes into more detail.
          </p>
        </div>
        <div class="w-full md:w-1/3 lg:w-1/4">
          <AboutRelated />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AboutRelated from '@/components/Nav/AboutRelated'
export default {
  components: { AboutRelated }
}
</script>

<style scoped>

</style>
