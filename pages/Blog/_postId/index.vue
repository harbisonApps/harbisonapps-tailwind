<template>
  <div class="text-left text-gray-200 px-2 md:px-4 mx-auto w-full lg:w-3/4">
    <section id="blog-post" v-editable="blokPost" class="pt-16">
      <div id="header" class="text-center pt-1 pb-2 md:w-3/4 lg:w-3/5 mx-auto">
        <div class=" flex justify-center">
          <img :src="image" :title="title" :alt="title" class=" rounded-md">
        </div>
      </div>

      <article :title="title" class="bg-gray-800 rounded-md p-2 mb-3">
        <h2 id="post-title" class="text-center text-xl">
          {{ title }}
        </h2>
        <p class="text-center">
          {{ date }}
        </p>
        <p class="text-center font-thin px-3">
          <i>
            {{ excerpt }}
          </i>
        </p>
        <p class="px-3">
          {{ content }}
        </p>
      </article>
    </section>
    <section class="mb-3 flex flex-wrap justify-center ">
      <Newsletter
        class="mx-3 w-full md:w-3/5 lg:w-2/5"
      />
    </section>
  </div>
</template>

<script>
import Newsletter from '@/components/NewsLetter'
export default {
  layout: 'blog-post',
  components: { Newsletter },
  asyncData (context) {
    return context.app.$storyapi.get('cdn/stories/blog/' + context.params.postId, {
      version: context.isDev ? 'draft' : 'published'
    }).then((res) => {
      return {
        blokPost: res.data.story.content,
        image: res.data.story.content.thumbnailUrl,
        title: res.data.story.content.title,
        keywords: res.data.story.content.keywords,
        date: res.data.story.content.date,
        excerpt: res.data.story.content.excerpt,
        content: res.data.story.content.content
      }
    })
  },
  head () {
    return {
      title: this.title + ' - In My Vue / Harbison Apps',
      meta: [
        // hid is used as unique identifier.
        { hid: 'description', name: 'description', content: this.excerpt },
        { hid: 'creationdate', name: 'creationdate', content: this.date },
        { hid: 'author', name: 'author', content: 'Brian Leabold, Harbison Apps' },
        { hid: 'keywords', name: 'keywords', content: this.keywords }
      ]
    }
  }
}
</script>

<style scoped>
p {
  white-space: pre-line;
}
</style>
