<template>
  <div class="mt-2 w-full md:w-1/2 lg:w-1/3 dark:text-gray-200 text-gray-900">
    <div class=" mx-1 border dark:border-gray-300 border-gray-900 rounded">
      <div class="m-1 flex justify-center">
        <img
          :src="thumbnail"
          :alt="title"
          :title="title"
        >
      </div>

      <h4 :title="title" class="pb-1 mx-1 text-xl font-semibold text-center">
        {{ title }}
      </h4>
      <p class="px-4 mx-1 font-thin  text-center">
        {{ date }}
      </p>
      <p class="px-4 mx-1">
        {{ excerpt }}
      </p>
      <div class="mx-1 m-auto p-1">
        <nuxt-link :to="'/blog/' + id">
          <button class=" bg-green-800 rounded w-full">
            Read
          </button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    excerpt: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
img {
  height: 200px
}
</style>
