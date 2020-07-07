<template>
  <div class="">
    <div class="text-center absolute bg-green-800 w-full mx-auto py-3">
      <h1 class=" text-2xl text-gray-300">
        Harbison Apps
      </h1>
    </div>
    <div class="z-10 absolute left-0 mt-3 ml-3 bg-transparent">
      <button
        @click="toggleTheme"
        class="rounded-full bg-gray-300"
        type="button"
        name="Switch Theme"
        title="Switch Theme"
      >
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          class="w-8 h-8"
        >
          <path
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      </button>
    </div>
    <div class="masthead">
      <div class="leading-10 text-white text-3xl w-auto text-center px-6">
        Building the next generation of web apps
      </div>
      <button @click="toggleModal = !toggleModal" class="mx-2 leading-7 mt-12 text-2xl rounded-lg px-6 py-4 button--green text-center focus:outline-none">
        Get the Website you deserve
      </button>
    </div>
    <div class="text-center mt-2 mx-auto w-10/12">
      <h2 class="text-center pt-2 text-sm italic text-gray-300 mx-1">
        Pride, Professionalism, Attention to Detail
      </h2>
      <p class=" text-left text-gray-300 my-4">
        Whether you need a new site and you're on a limited budget, or you need a full redesign,
        I wll give you a design that will resonate with your target audience.
      </p>
      <p class=" text-left text-gray-300">
        Every website design is clean, mobile friendly, and built with the fastest and lightest (smallest)
        JavaScript Framework on the market. Each image is optimized for quality and speed. Page
        loading times and accessibility are essential today and I will ensure your site is up to
        the challenge. Turn around time is based on features and complexity.
      </p>
      <div class="text-left text-gray-300">
        <em><small>&mdash; Brian Leabold</small></em>
      </div>
    </div>
    <div class=" container mx-auto mt-1 px-2">
      <div class="flex flex-wrap justify-between lg:justify-center">
        <div class=" w-full md:w-1/2 md:px-1 lg:w-1/3 pb-1">
          <div class="p-1">
            <div class=" p-1 rounded bg-gray-800">
              <h3 class="text-center mt-1 text-gray-300 text-2xl">
                Landing Page
              </h3>
              <img class=" w-full" loading="lazy" src="~/assets/landing-screen-shot.webp" alt="">
              <ul class="text-center text-lg mx-auto my-3 text-gray-300 list-none">
                <li>Customized just for you</li>
                <li>Clear & Targeted presentation</li>
                <li>Starting at $175</li>
              </ul>
              <button
                @click="toggleModal = !toggleModal"
                class="button--accent rounded text-lg text-center py-2 w-full"
              >
                Schedule free consultation
              </button>
            </div>
          </div>
        </div>
        <div class=" w-full md:w-1/2 md:px-1 lg:w-1/3 pb-1">
          <div class="p-1">
            <div class=" p-1 rounded bg-gray-300">
              <h3 class="text-center mt-1 text-gray-900 text-2xl">
                Starter Website
              </h3>
              <img class="mb-4 w-full" loading="lazy" src="~/assets/space-screen-shot.webp" alt="">
              <ul class="text-center text-gray-900  text-lg mx-auto my-3 list-none">
                <li>2 - 5 pages incl. contact form</li>
                <li>Dynamic or Static</li>
                <li>Starting at $299</li>
              </ul>
              <button
                @click="toggleModal = !toggleModal"
                class="button--grey rounded text-lg text-center py-2 w-full"
              >
                Schedule free consultation
              </button>
            </div>
          </div>
        </div>
        <div class=" w-full md:w-1/2 md:px-1 lg:w-1/3 pb-1">
          <div class="p-1">
            <div class=" p-1 rounded bg-gray-800">
              <h3 class="text-center mt-1 text-gray-300 text-2xl">
                CMS Website
              </h3>
              <img class=" w-full" loading="lazy" src="~/assets/blog-screen-shot.webp" alt="">
              <ul class="text-center mx-auto text-lg my-3 text-gray-300 list-none">
                <li>5 - 7 pages SEO ready</li>
                <li>Free 90 day support</li>
                <li>Starting at $499</li>
              </ul>
              <button
                @click="toggleModal = !toggleModal"
                class="text-center text-lg rounded py-2 w-full button--green"
              >
                Schedule free consultation
              </button>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 md:px-1 ">
          <div class="p-1">
            <Newsletter />
          </div>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div v-if="showMenu" class="text-center bg-gray-900 mx-auto mb-4 pt-4">
        <menu class=" -ml-10">
          <nuxt-link exact exact-active-class=" text-green-600" to="/privacy" class=" bg-green-700 hover:bg-green-500 inline-block px-2 py-1 mt-1 hover:text-gray-900 rounded text-gray-300">
            Privacy Statement
          </nuxt-link>
          <nuxt-link exact exact-active-class=" text-green-600" to="/terms" class=" bg-green-700 hover:bg-green-500 inline-block px-2 py-1 mt-1 hover:text-gray-900 rounded text-gray-300">
            Terms of Service
          </nuxt-link>
        </menu>
      </div>
    </transition>
    <transition name="slide-fade" appear>
      <div v-if="toggleModal" class="contact-modal z-50 fixed -mt-32 md:-mt-16 inset-0 justify-center items-center">
        <div class="relative my-auto mt-48 mx-2 md:mx-auto">
          <div class="bg-gray-400 rounded-md opacity-100 relative mx-auto max-w-md md:max-w-xl">
            <h2 class=" text-center text-2xl text-gray-900">
              Your Free Consultation
            </h2>
            <form class="">
              <div :class="{ 'form-group--error': $v.name.$error }" class="text-center">
                <input v-model.trim="$v.name.$model" placeholder="Name" class="bg-gray-900 text-gray-300 border-gray-900 rounded py-2 pl-4 w-10/12 md:w-3/4 my-2">
              </div>
              <div v-if="!$v.name.required" class="text-red-500 pl-12 md:pl-20">
                * required
              </div>
              <div v-if="!$v.name.minLength" class=" text-red-500 pl-12 md:pl-20">
                Name must have at least {{ $v.name.$params.minLength.min }} letters.
              </div>

              <div :class="{ 'form-group--error': $v.email.$error }" class="text-center">
                <input v-model.trim="$v.email.$model" placeholder="Email" class="bg-gray-900 text-gray-300 border-gray-900 rounded py-2 pl-4 w-10/12 md:w-3/4 my-2">
              </div>
              <div v-if="!$v.email.required" class="text-red-500 pl-12 md:pl-20">
                * required
              </div>
              <div v-if="!$v.email.email" class="text-red-500 pl-12 md:pl-20">
                Email is invalid
              </div>

              <div :class="{ 'form-group--error': $v.message.$error }" class="text-center">
                <textarea v-model.trim="$v.message.$model" rows="4" placeholder="Message" class="bg-gray-900 text-gray-300 border-gray-900 rounded py-2 pl-4 w-10/12 md:w-3/4 my-2" />
              </div>
              <div v-if="!$v.message.maxLength" class=" text-red-500 pl-12 md:pl-20">
                Please limit your message to {{ $v.message.$params.maxLength.max }} characters.
              </div>
              <div v-if="$v.termsAgree.$error" class="mx-6 text-red-600">
                Please Accept the Terms and Conditions
              </div>
              <div :class="{ 'form-group--error': $v.termsAgree.$error }" class="text-sm text-left text-gray-900 my-3 mx-6">
                <span>
                  <input
                    id="terms"
                    v-model="$v.termsAgree.$model"
                    @change="$v.termsAgree.$touch()"
                    type="checkbox"
                  >
                </span> By submitting this form, I agree to the
                <a class=" text-green-600 hover:text-green-800" href="/terms" rel="blank">
                  Terms and Conditions
                </a> For more information about our
                privacy practices, see our
                <a class=" text-green-600 hover:text-green-800" href="privacy" rel="blank">
                  Privacy Statement
                </a>
              </div>
              <div class="text-center py-3">
                <button @click.prevent="close" class="px-4 py-2 rounded bg-red-600 text-gray-300">
                  close
                </button>
                <button @click.prevent="reset" class="px-4 py-2 rounded bg-orange-600 text-gray-300">
                  reset
                </button>
                <button @click.prevent="submit" :disabled="submitStatus === 'PENDING'" type="submit" class="px-4 py-2 rounded bg-green-600 text-gray-300">
                  submit
                </button>
              </div>
              <p v-if="submitStatus === 'OK'" class="text-green-600 text-center text-lg pb-2">
                Thank you for your interest.
              </p>
              <p v-if="submitStatus === 'ERROR'" class="text-red-600 text-center pb-2">
                Please fix the errors indicated.
              </p>
              <p v-if="submitStatus === 'PENDING'" class=" text-orange-600 text-center pb-2">
                Sending...
              </p>
            </form>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'
import Newsletter from '@/components/NewsLetter'
export default {
  layout: 'landing',
  components: {
    Newsletter
  },
  data () {
    return {
      toggleModal: false,
      showMenu: false,
      name: '',
      email: '',
      message: '',
      termsAgree: true,
      submitStatus: ''
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(5)
    },
    email: {
      required,
      email
    },
    message: {
      maxLength: maxLength(500)
    },
    termsAgree: {
      required (val) {
        return val
      }
    }
  },
  methods: {

    toggleTheme () {
      // const m = localStorage.getItem('theme')
      // this.$colorMode.preference =
      //   this.$colorMode.value === 'light' ? 'dark' : 'light'
      // if (m === 'dark') {
      //   localStorage.setItem('theme', 'dark')
      // } else {
      //   localStorage.removeItem('theme')
      // }

      // eslint-disable-next-line no-console
      console.log('toggle theme')
    },
    reset () {
      this.name = ''
      this.email = ''
      this.message = ''
      this.termsAgree = true
    },
    close () {
      this.name = ''
      this.email = ''
      this.message = ''
      this.termsAgree = true
      this.toggleModal = false
    },
    submit () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        // eslint-disable-next-line no-console
        console.log(this.name, this.email, this.message, this.termsAgree)
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
        }, 1000)
        setTimeout(() => {
          this.toggleModal = false
          this.submitStatus = ''
          this.name = ''
          this.email = ''
          this.message = ''
          this.termsAgree = true
          this.showMenu = true
        }, 1500)
        setTimeout(() => {
          this.$router.push('/thankyou')
        }, 2700)
      }
    }
  }
}
</script>

<style>
.masthead {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 70vh; /* if you don't want it to take up the full screen, reduce this number */
  overflow: hidden;
  background-size: cover;
  background: radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 0%, rgba(48,68,85,0.65) 100%), url(../assets/laptop.webp) no-repeat center center scroll;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 2.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-leave-active {
  transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(500px);
  opacity: 0;
}

</style>
