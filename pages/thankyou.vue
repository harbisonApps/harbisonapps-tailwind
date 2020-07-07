<template>
  <div class="text-left text-gray-200 px-2 md:px-4 -mt-40 md:-mt-56 lg:-mt-64 mx-auto w-12/12 md:w-11/12 lg:w-3/4">
    <div id="header" class="bg-gray-800 rounded-t-md text-center pt-4 md:w-3/4 lg:w-3/5 mx-auto pb-2">
      <h2 class="text-center text-3xl mb-1">
        <strong>Thank You</strong>
      </h2>
    </div>

    <div class="bg-gray-800 rounded-md px-2 md:px-4 pb-1 pt-4 -mt-3 md:-mt-2">
      <h3 class=" text-xl text-center mb-3">
        I will contact you shortly
      </h3>

      <p class="mb-3">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum totam ut doloribus odit ducimus
        blanditiis quia eaque nesciunt laboriosam obcaecati, tempore accusantium hic assumenda autem aut
        veniam provident similique et.
      </p>

      <div class="text-center flex justify-around mb-3">
        <Newsletter class=" lg:w-2/3" />
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
