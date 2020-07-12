<template>
  <div class="text-left dark:text-gray-200 text-gray-900 px-2 md:px-4 -mt-40 lg:-mt-56 mx-auto w-full lg:w-11/12">
    <div id="header" class="dark:bg-gray-800 bg-gray-300 rounded-t-md text-center pt-4 md:w-3/4 lg:w-3/5 mx-auto pb-2">
      <h2 class="text-center text-3xl mb-1">
        <strong>Thank You</strong>
      </h2>
    </div>

    <div class="dark:bg-gray-800 bg-gray-300 rounded-md px-2 md:px-4 pb-1 pt-4 -mt-3 md:-mt-2">
      <h3 class=" text-xl text-center mb-3">
        I will contact you shortly
      </h3>

      <p class="mb-3">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum totam ut doloribus odit ducimus
        blanditiis quia eaque nesciunt laboriosam obcaecati, tempore accusantium hic assumenda autem aut
        veniam provident similique et.
      </p>

      <div class="text-center flex justify-around mb-3">
        <Newsletter class=" lg:w-3/5" />
      </div>
    </div>
  </div>
</template>

<script>
import Newsletter from '@/components/NewsLetter'
export default {
  components: { Newsletter }
}
</script>

<style scoped>

</style>
