<template>
    <div class="bg-bluetint dark:bg-neutral-700 py-12">
        <div class="container">
            <h2 class="inter-semi-bold text-4xl text-neutral-500 dark:text-neutral-50">Leadership</h2>
            <p class="text-neutral-500 dark:text-neutral-50 mt-3">Meet the team behind the innovation</p>
            <div class="grid md:grid-cols-3 gap-12 items-center mt-4">
                <div class="col-span-3 md:col-span-1 text-neutral-500 dark:text-neutral-50" data-aos="zoom-in"
                    data-aos-duration="1000">
                    <img src="../../assets/images/management_image.png" />
                </div>
                <div class="col-span-3 md:col-span-1 text-neutral-500 dark:text-neutral-50" data-aos="zoom-in"
                    data-aos-delay="300" data-aos-duration="1000">
                    <img src="../../assets/images/management_image.png" />
                </div>
                <div class="col-span-3 md:col-span-1 text-neutral-500 dark:text-neutral-50" data-aos="zoom-in"
                    data-aos-delay="600" data-aos-duration="1000">
                    <img src="../../assets/images/management_image.png" />
                </div>
            </div>
        </div>
    </div>
    <div class="bg-[#F3F7FA] dark:bg-neutral-600 py-12">
        <Typed :options="options">
            <h1 class="typing"></h1>
        </Typed>

        <div class="flex justify-center mt-3">
            <router-link to="/clinicalresearchapplicationform">
                <button type="button" data-te-ripple-init data-te-ripple-color="light"
                    class="inter-medium mt-3 inline-block rounded bg-primary-500 px-6 pb-2 pt-2.5 text-sm font-medium leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primarydeep hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primarydeep focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                    Start application
                </button>
            </router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Typed } from "@duskmoon/vue3-typed-js";
import type { TypedOptions } from "@duskmoon/vue3-typed-js";

const options: TypedOptions = {
    strings: ["<h2 class='inter-medium text-center text-4xl text-neutral-500 dark:text-primary-300'>Ready to start application process ?</h2>", "<h2 class='inter-medium text-center text-4xl text-neutral-500 dark:text-primary-300'>Click the button below to start your application</h2>"],
    loop: true,
    typeSpeed: 40,
};
</script>