<template>
    <div class="p-4 sm:p-8">
        <h1 class="inter-semi-bold text-4xl">Enrolments</h1>
        <div class="mt-5">
            <div class="hidden lg:block">
                <div
                    class="grid lg:grid-cols-4 items-center bg-white dark:bg-neutral-500 h-[50px] px-5 rounded-[6px] shadow-[2px_4px_9px_rgba(2,16,23,0.05)]">
                    <div class="col-span-4 lg:col-span-1 inter-medium">
                        Name
                    </div>
                    <div class="col-span-4 lg:col-span-1 inter-medium">
                        Phone
                    </div>
                    <div class="col-span-4 lg:col-span-1 inter-medium">
                        Email
                    </div>
                    <!-- <div class="col-span-4 lg:col-span-1 inter-medium">
                        Status
                    </div> -->
                    <!-- <div class="col-span-4 lg:col-span-1 inter-medium">
                        Review
                    </div> -->
                    <div class="col-span-4 lg:col-span-1 inter-medium">
                        Action
                    </div>
                </div>
            </div>

            <div class="grid lg:grid-cols-4 items-center bg-white dark:bg-neutral-500 px-5 lg:h-[50px] rounded-[6px] shadow-[2px_4px_9px_rgba(2,16,23,0.05)] mt-5"
                v-for="(item, index) in enrolments" :keys="index">
                <div class="col-span-4 lg:col-span-1">
                    <div class="flex justify-between">
                        <div class="lg:hidden inter-medium">Name</div>
                        <div>{{ item.full_name }}</div>
                    </div>
                </div>
                <div class="col-span-4 lg:col-span-1">
                    <div class="flex justify-between">
                        <div class="lg:hidden inter-medium">Phone</div>
                        {{ item.phone_number }}
                    </div>
                </div>
                <div class="col-span-4 lg:col-span-1">
                    <div class="flex justify-between">
                        <div class="lg:hidden inter-medium">Email</div>
                        {{ item.email }}
                    </div>
                </div>
                <!-- <div class="col-span-4 lg:col-span-1">
                    <div class="flex justify-between">
                        <div class="lg:hidden inter-medium">Status</div>
                        {{ item.status }}
                    </div>
                </div> -->
                <!-- <div class="col-span-4 lg:col-span-1">
                    <div class="flex justify-between">
                        <div class="lg:hidden inter-medium">Review</div>
                        <button type="button" data-te-toggle="modal" data-te-target="#exampleModalLg" data-te-ripple-init
                            data-te-ripple-color="light"
                            class="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200">
                            Review
                        </button>
                    </div>
                </div> -->
                <div class="col-span-4 lg:col-span-1">
                    <div class="flex justify-between">
                        <div class="lg:hidden inter-medium">Action</div>
                        <div class="relative mr-3" data-te-dropdown-ref>
                            <!-- First dropdown trigger -->
                            <a class="hidden-arrow mr-4 flex items-center text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                                href="#" id="dropdownMenuButton1" role="button" data-te-dropdown-toggle-ref
                                aria-expanded="false">
                                <!-- Dropdown trigger icon -->
                                <span class="[&>svg]:w-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor"
                                        class="w-6 h-6 text-neutral-500 dark:text-neutral-50">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                    </svg>

                                </span>
                            </a>
                            <!-- First dropdown menu -->
                            <ul class="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                                aria-labelledby="dropdownMenuButton1" data-te-dropdown-menu-ref>
                                <!-- First dropdown menu items -->
                                <li>
                                    <a class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                                        href="#" data-te-dropdown-item-ref>Schedule checkup</a>
                                </li>
                                <li>
                                    <a class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                                        href="#" data-te-dropdown-item-ref>Send medication</a>
                                </li>
                                <li>
                                    <a class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                                        href="#" data-te-dropdown-item-ref>No adverse effect</a>
                                </li>
                                <li>
                                    <a class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                                        href="#" data-te-dropdown-item-ref>Adverse effect detected</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center mt-5" v-if="loading">
                <div class="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status">
                    <span
                        class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import {
    Dropdown,
    initTE,
    Modal,
    Ripple
} from "tw-elements";
import db from "../init"

onMounted(() => {
    initTE({ Dropdown, Modal, Ripple });
})

const loading = ref(true)
const enrolments = ref([])
const getAllEnrolments = () => {
    loading.value = true
    db.collection('enrolments')
        .get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                console.log(doc.data())

                let documents = {
                    ...doc.data(),
                    id: doc.id
                }
                enrolments.value.push(documents)
                console.log(documents)
            })
            loading.value = false
        })
        .catch((error) => {
            loading.value = false
            console.log("Error getting document:", error);
        });

}
getAllEnrolments();
</script>

<style scoped></style>