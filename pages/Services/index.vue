<template>
  <div class="text-left dark:text-gray-200 text-gray-900 px-2 md:px-4 -mt-40 lg:-mt-56 mx-auto w-full lg:w-11/12">
    <div id="header" class="dark:bg-gray-800 bg-gray-300 rounded-t-md text-center pt-4 md:w-3/4 lg:w-3/5 mx-auto pb-2">
      <h2 class="text-center text-3xl mb-1">
        <strong>Services</strong>
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
        </div>
        <div class="w-full md:w-1/3 lg:w-1/4">
          <aside class="border bg-gray-100 dark:bg-gray-300 border-gray-700 rounded mb-3 ">
            <h3 class="text-center text-gray-900 font-semibold text-xl my-3">
              Recent Posts
            </h3>
            <PostLinks
              v-for="post in posts"
              :id="post.id"
              :key="post.id"
              :title="post.title"
            />
          </aside>
          <aside>
            <Newsletter />
          </aside>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Newsletter from '@/components/NewsLetter'
import PostLinks from '@/components/Blog/PostLinks'
export default {
  components: { Newsletter, PostLinks },
  asyncData (context) {
    return context.app.$storyapi.get('cdn/stories/', {
      version: context.isDev ? 'draft' : 'published',
      starts_with: 'blog/'
    })
      .then((res) => {
        return {
          // posts: res.data.stories.slice(0, 5).map((bp) => {
          posts: res.data.stories.map((bp) => {
            return {
              id: bp.slug,
              title: bp.content.title
            }
          })
        }
      })
  }
}
</script>

<style scoped>

</style>
