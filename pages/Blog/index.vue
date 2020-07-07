<template>
  <div class="text-left text-gray-200 px-2 md:px-4 -mt-40 lg:-mt-56 mx-auto w-full lg:w-11/12">
    <div id="header" class="bg-gray-800 rounded-t-md text-center pt-4 md:w-3/4 lg:w-3/5 mx-auto pb-2">
      <h2 class="text-center text-3xl mb-1">
        <strong>In My Vue</strong>
      </h2>
    </div>

    <div class="bg-gray-800 rounded-md pb-1 pt-4 -mt-3 md:-mt-2 w-full">
      <div class="flex flex-wrap justify-between lg:justify-center px-2 mb-3">
        <!-- Blog Posts -->
        <PostPreview
          v-for="post in posts"
          :id="post.id"
          :key="post.id"
          :title="post.title"
          :date="post.date"
          :excerpt="post.excerpt"
          :thumbnail="post.thumbnailUrl"
          class=""
        />
      </div>
      <div class="mb-3 flex flex-wrap justify-center ">
        <Newsletter
          class="mx-3 w-full md:w-3/5 lg:w-2/5"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PostPreview from '@/components/Blog/PostPreview'
import Newsletter from '@/components/NewsLetter'
export default {
  components: { PostPreview, Newsletter },
  data () {
    return {
      pageTitle: 'In My Vue',
      description: 'A weekly blog dedicated to VueJs, the MEVN stack, and a handful of topics I find interesting.'
    }
  },
  asyncData (context) {
    return context.app.$storyapi.get('cdn/stories/', {
      version: context.isDev ? 'draft' : 'published',
      starts_with: 'blog/'
    })
      .then((res) => {
        return {
          posts: res.data.stories.map((bp) => {
            return {
              id: bp.slug,
              title: bp.content.title,
              excerpt: bp.content.excerpt,
              thumbnailUrl: bp.content.thumbnailUrl,
              date: bp.content.date
            }
          })
        }
      })
  },
  head () {
    return {
      title: this.pageTitle + ' - Harbison Apps',
      meta: [
        // hid is used as unique identifier.
        { hid: 'description', name: 'description', content: this.description }
      ]
    }
  }
}
</script>
