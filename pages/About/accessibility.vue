<template>
  <div class="text-left dark:text-gray-200 text-gray-900 px-2 md:px-4 -mt-40 lg:-mt-56 mx-auto w-full lg:w-11/12">
    <div id="header" class="dark:bg-gray-800 bg-gray-300 rounded-t-md text-center pt-4 md:w-3/4 lg:w-3/5 mx-auto pb-2">
      <h3 class="text-center text-3xl mb-1">
        <strong>Accessibility Statement</strong>
      </h3>
    </div>

    <div class="dark:bg-gray-800 bg-gray-300 rounded-md px-4 pb-1 pt-4 -mt-3 md:-mt-2 w-full">
      <div class="flex flex-wrap justify-between lg:justify-center">
        <div class="md:pr-2 w-full md:w-2/3 lg:w-3/4">
          <p class="mb-3">
            <span class="font-semibold">Harbison Apps</span>
            is committed to ensuring digital accessibility for people with disabilities.
            We are continually improving the user experience for everyone, and applying the relevant
            accessibility standards.
          </p>
          <h3 class="mb-3 text-2xl text-center">
            Measures to Support Accessibility
          </h3>
          <p class="mb-3">
            <span class="font-semibold"> Harbison Apps</span>
            takes the following measures to ensure accessibility of
            <span class="font-semibold ">Harbison Apps</span>:
          </p>
          <ul class=" ml-3 md:ml-12 mb-3 list-disc">
            <li>Include accessibility throughout our internal policies.</li>
            <li>Appoint an accessibility officer and/or ombudsperson.</li>
            <li>Provide continual accessibility training for our staff.</li>
            <li>Assign clear accessibility targets and responsibilities.</li>
            <li>Employ formal accessibility quality assurance methods.</li>
          </ul>
          <h3 class="mb-3 text-2xl text-center">
            Conformance Status
          </h3>
          <p class="mb-3">
            The <a href="https://www.w3.org/WAI/standards-guidelines/wcag/">Web Content Accessibility
              Guidelines (WCAG)</a> defines requirements for designers and developers to improve accessibility
            for people with disabilities. It defines three levels of conformance: Level A, Level AA, and
            Level AAA. <span class="font-semibold ">Harbison Apps</span>
            is <span class="">partially
              conformant</span> with <span class="basic-information conformance-standard">
              <span data-negate="">WCAG 2.1 level AA</span>.</span>
            <span><span class="s"> Partially conformant</span>
              means that <span class="">some parts of the content
                do not fully conform to the accessibility standard</span>.
            </span>
          </p>
          <h3 class="mb-3 text-2xl text-center">
            Feedback
          </h3>
          <p class="mb-3">
            We welcome your feedback on the accessibility of
            <span class="font-semibold ">Harbison Apps</span>.
            Please let us know if you encounter accessibility barriers.
          </p>
          <p class="feedback md-3">
            E-mail:
            <a
              class=" underline font-semibold"
              href="mailto:harbisonapps@gmail.com?subject=Harbison Apps Website: Accessibility"
            >harbisonapps@gmail.com</a>
          </p>
          <p class="mb-3">
            We try to respond to feedback within <span class="feedback">1-2 business days</span>.
          </p>
          <h3 class="mb-3 text-2xl text-center">
            Technical Specifications
          </h3>
          <p class="mb-3">
            Accessibility of <span class="font-semibold ">Harbison Apps</span>
            relies on the following technologies to work with the particular combination of web browser and any
            assistive technologies or plugins installed on your computer:
          </p>
          <ul class=" list-disc ml-12 mb-3">
            <li>HTML</li>
            <li>WAI-ARIA</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
          <p class="mb-3">
            These technologies are relied upon for conformance with the accessibility standards used.
          </p>
          <h3 class="mb-3 text-2xl text-center">
            Assessment Approach
          </h3>
          <p class="mb-3">
            <a
              class="email font-semibold"
              href="mailto:harbisonapps@gmail.com?subject=Harbison Apps Website: Accessibility"
            >harbisonapps@gmail.com</a>
            assessed the accessibility of <span class="font-semibold">Harbison Apps</span> by the following approaches:
          </p>
          <ul class=" list-disc ml-12 mb-3">
            <li>Self-evaluation</li>
          </ul>
          <hr class="mb-3">
          <p class="mb-3">
            This statement was created on
            <span class="">June 1st, 2020</span>
          </p>
        </div>
        <div class="w-full md:w-1/3 lg:w-1/4">
          <AboutRelated />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AboutRelated from '@/components/Nav/AboutRelated'
export default {
  components: { AboutRelated }
}
</script>

<style scoped>

</style>
