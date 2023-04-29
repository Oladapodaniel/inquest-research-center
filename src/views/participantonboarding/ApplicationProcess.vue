<template>
  <div class="bg-bluetint dark:bg-neutral-800 parent">
    <div class="md:w-[70%] m-auto px-5 py-12 h-[5629px]">
      <ul data-te-stepper-init
        class="relative m-0 flex list-none justify-between  p-0 transition-[height] duration-200 ease-in-out h-[5629px]">
        <!--First item-->
        <li data-te-stepper-step-ref data-te-stepper-step-active class="w-[4.5rem] flex-auto">
          <div data-te-stepper-head-ref
            class="flex cursor-pointer items-center pl-2 leading-[1.3rem] no-underline after:ml-2 after:h-px after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
            <span data-te-stepper-head-icon-ref
              class="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
              1
            </span>
            <span data-te-stepper-head-text-ref
              class="font-medium text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
              Fill application form
            </span>
          </div>
          <div data-te-stepper-content-ref ref="steponeref" class="absolute w-full p-4 transition-all duration-500 ease-in-out">
            <ApplicationForm @next="nextStep"/>
          </div>
        </li>

        <!--Second item-->
        <li data-te-stepper-step-ref class="w-[4.5rem] flex-auto">
          <div data-te-stepper-head-ref 
            class="flex cursor-pointer items-center leading-[1.3rem] no-underline before:mr-2 before:h-px before:w-full before:flex-1 before:bg-[#e0e0e0] before:content-[''] after:ml-2 after:h-px after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
            <span data-te-stepper-head-icon-ref
              class="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
              <!-- <button ref="steptworef" id="steptworef">ddd</button> -->
              2
            </span>
            <span data-te-stepper-head-text-ref
              class="text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
              Sign consent form
            </span>
          </div>
          <div data-te-stepper-content-ref ref="steptworef"
            class="absolute left-0 w-full translate-x-[150%] p-4 transition-all duration-500 ease-in-out">
            <ConsentForm @goback="goBack"/>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import {
  initTE,
  Stepper,
} from "tw-elements";
import { onMounted, ref } from "vue";
import ApplicationForm from "../../components/applicationonboarding/ApplicationForm.vue";
import ConsentForm from "../../components/applicationonboarding/ConsentForm.vue"
onMounted(() => {
  initTE({ initTE, Stepper })
})

const steponeref = ref(null)
const steptworef = ref(null)

const nextStep = () => {
  steptworef.value.classList.remove('translate-x-[150%]')
  steptworef.value.classList.add('translate-0')
  steponeref.value.classList.add('-translate-x-[150%]')
  steponeref.value.classList.remove('translate-0')
  backToTop()
  console.log(steponeref.value)
}

const goBack = () => {
  console.log('bdjskfdn')
  steptworef.value.classList.remove('translate-0')
  steptworef.value.classList.add('translate-x-[150%]')
  steponeref.value.classList.remove('-translate-x-[150%]')
  steponeref.value.classList.add('translate-0')
  backToTop()
}



function backToTop() {
  console.log('backToTop')
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

</script>

<style scoped>


</style>