<template>
  <aside class="border bg-gray-300 border-gray-700 rounded mb-3 ">
    <h3 class="text-center text-gray-900 font-semibold text-xl my-3">
      Related Pages
    </h3>
    <ul class=" ml-6 mb-3">
      <li
        v-for="link in links"
        :key="link.label"
        class="mb-1"
      >
        <nuxt-link
          :to="link.to"
          exact
          exact-active-class=" font-semibold"
          class="text-green-700 underline"
        >
          {{ link.label }}
        </nuxt-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  data () {
    return {
      links: [
        { to: '/about/privacy', label: 'Privacy Statement' },
        { to: '/about/terms', label: 'Terms of Service' },
        { to: '/about/accessibility', label: 'Accessability Statement' }
        // { to: '', label: '' },
      ]
    }
  }
}
</script>
