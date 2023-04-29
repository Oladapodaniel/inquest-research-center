<template>
    <div class="bg-bluetint dark:bg-neutral-700">
        <div class="md:container px-5 py-12">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div class="col-span-2 md:col-span-1">
                    <h1
                        class="inter-semi-bold leading-snug text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-sky-300 to-sky-500">
                        In-House Clinical Research with Inquest Research Centre</h1>
                    <div class="dark:text-neutral-50">Fast & quick research web platform for institutes and more.</div>
                    <router-link to="/clinicalresearchapplicationform">
                        <button type="button" data-te-ripple-init data-te-ripple-color="light"
                            class="inter-medium mt-3 inline-block rounded bg-primary-500 px-6 pb-2 pt-2.5 text-sm font-medium leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primarydeep hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primarydeep focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                            Start application
                        </button>
                    </router-link>
                </div>
                <div class="col-span-2 md:col-span-1">
                    <div class="flex justify-center md:justify-end">
                        <img src="../../assets/images/researcher-cuate.svg" class="w-80" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup></script>