<template>
  <div class="text-gray-900 dark:text-gray-300">
    <ul>
      <li v-for="color of colors" :key="color" class=" inline-block pl-2 cursor-pointer">
        <!-- eslint-disable-next-line vue/require-component-is -->
        <component
          :is="`icon-${color}`"
          :class="getClasses(color)"
          @click="$colorMode.preference = color"
        />
      </li>
    </ul>
    <!-- <span class="">
      <ColorScheme placeholder="..." tag="span">
        <span class="">{{ $colorMode.preference }}</span>
      </ColorScheme>
    </span> -->
  </div>
</template>

<script>
import IconLight from '@/assets/icons/light.svg?inline'
import IconDark from '@/assets/icons/dark.svg?inline'
export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    IconLight, IconDark
  },
  data () {
    return {
      colors: ['light', 'dark']
    }
  },
  methods: {
    getClasses (color) {
      // Does not set classes on ssr preference is system (because we know them on client-side)
      if (this.$colorMode.unknown) {
        return {}
      }
      return {
        preferred: color === this.$colorMode.preference,
        selected: color === this.$colorMode.value
      }
    }
  }
}
</script>

<style scoped>
/* .feather {
  position: relative;
  top: 0px;
  cursor: pointer;
  padding: 7px;
  background-color: var(--bg-secondary);
  border: 2px solid var(--border-color);
  margin: 0;
  border-radius: 5px;
  transition: all 0.1s ease;
}
.feather:hover {
  top: -3px;
}
.feather.preferred {
  border-color: var(--color-primary);
  top: -3px;
}
.feather.selected {
  color: var(--color-primary);
} */

</style>
