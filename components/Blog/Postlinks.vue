<template>
  <article class="ml-3 mb-3 lg:ml-6 text-lg font-semibold text-green-700">
    <hr>
    <nuxt-link :to="'/blog/' + id" class="p-2 text-green-700">
      {{ title }}
    </nuxt-link>
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  },
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
