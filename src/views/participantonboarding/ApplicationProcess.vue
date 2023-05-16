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
          <div data-te-stepper-content-ref ref="steponeref"
            class="absolute w-full p-4 transition-all duration-500 ease-in-out">
            <ApplicationForm @next="nextStep" @formdata="setFormData" />
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
            <ConsentForm @goback="goBack" @signature="setSignature" @submitform="submitApplicationForm" />
          </div>
        </li>

        <!--Third item-->
        <!-- <li data-te-stepper-step-ref class="w-[4.5rem] flex-auto">
          <div data-te-stepper-head-ref
            class="flex cursor-pointer items-center pr-2 leading-[1.3rem] no-underline before:mr-2 before:h-px before:w-full before:flex-1 before:bg-[#e0e0e0] before:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
            <span data-te-stepper-head-icon-ref
              class="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
              3
            </span>
            <span data-te-stepper-head-text-ref
              class="text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
              step3
            </span>
          </div>
          <div data-te-stepper-content-ref
            class="absolute left-0 w-full translate-x-[150%] p-4 transition-all duration-500 ease-in-out">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </div>
        </li> -->
      </ul>
    </div>
    <VueModalityV3 ref="submitsuccess" :hide-header="true" @ok="$router.push('/')" width="600px" :hide-cancel="true" centered>
      <div class="relative p-4 pt-0">
        <div class="flex justify-center">
          <video width="320" height="240" autoPlay loop muted>
            <source src="../../assets/images/screenrecording.mp4">
          </video>
        </div>
        <div class="inter-semi-bold text-2xl text-center text-[#01b270] mt-5">Success</div>
        <div class="text-center work-sans-medium">Your application was submitted and is under review!</div>
        <div class="text-center mt-2 text-sm mb-5">You will be notified within 2 business days regarding the status of
          your application. If there are any issues, we will reach out to you immediately.
        </div>
      </div>
    </VueModalityV3>
  </div>
</template>

<script setup>
import {
  initTE,
  Stepper,
} from "tw-elements";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import ApplicationForm from "../../components/applicationonboarding/ApplicationForm.vue";
import ConsentForm from "../../components/applicationonboarding/ConsentForm.vue"
import db from "../../init"
import VueModalityV3 from 'vue-modality-v3'
onMounted(() => {
  initTE({ initTE, Stepper })
})

const router = useRouter()
const steponeref = ref(null)
const steptworef = ref(null)
const full_form = ref({})
const submitsuccess = ref(null)

const nextStep = () => {
  steptworef.value.classList.remove('translate-x-[150%]')
  steptworef.value.classList.add('translate-0')
  steponeref.value.classList.add('-translate-x-[150%]')
  steponeref.value.classList.remove('translate-0')
  backToTop()
  console.log(steponeref.value)
}

const goBack = () => {
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

const setFormData = (payload) => {
  console.log(payload)
  full_form.value = payload
}

const setSignature = (payload) => {
  full_form.value.signature = payload
}

const submitApplicationForm = () => {
  console.log(full_form.value)
  full_form.value.status = "in review"
  full_form.value.application_date = new Date().toISOString().split('T')[0];
  db.collection("applications")
    .add(full_form.value)
    .then(() => {
        submitsuccess.value.open();
    })
}
</script>

<style scoped></style>