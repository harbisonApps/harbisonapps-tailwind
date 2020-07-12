<template>
  <div class="dark:bg-gray-900 bg-gray-100">
    <MainNav />
    <Masthead />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Masthead from '@/components/Masthead'
import Footer from '@/components/Footer'
import MainNav from '@/components/Nav/MainNav'
export default {
  components: { Masthead, Footer, MainNav }
}
</script>
<style>
html {
  font-family:  Montserrat, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

p {
  text-indent: 10px;
}

.button--green {
  display: inline-block;
  background-color:#327a5a ;
  color: #fff;
}

.button--green:hover {
  color: #327a5a;
  background-color: #fff;
}

.button--green:focus {
  border: #fff solid 1px;
}

.button--grey {
  display: inline-block;
  border: 1px solid #304455;
  color: #304455;
}

.button--grey:hover {
  color: #fff;
  background-color: #304455;
}

.button--accent {
  display: inline-block;
  background-color: #4fc08d;
  border: 1px solid #4fc08d;
}
</style>
