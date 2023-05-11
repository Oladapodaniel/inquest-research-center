<template>
    <div>
        <h1 class="inter-semi-bold text-4xl">Enrolments</h1>
        <div class="mt-5">
            <div class="hidden lg:block">
                <div
                    class="grid lg:grid-cols-5 items-center bg-white dark:bg-neutral-500 h-[50px] px-5 rounded-[6px] shadow-[2px_4px_9px_rgba(2,16,23,0.05)]">
                    <div class="col-span-4 lg:col-span-1 inter-medium">
                        Name
                    </div>
                    <div class="col-span-4 lg:col-span-1 inter-medium">
                        Phone
                    </div>
                    <div class="col-span-4 lg:col-span-1 inter-medium">
                        Email
                    </div>
                    <div class="col-span-4 lg:col-span-1 inter-medium">
                        Status
                    </div>
                    <!-- <div class="col-span-4 lg:col-span-1 inter-medium">
                        Review
                    </div> -->
                    <div class="col-span-4 lg:col-span-1 inter-medium">
                        Action
                    </div>
                </div>
            </div>

            <div class="grid lg:grid-cols-5 items-center bg-white dark:bg-neutral-500 px-5 lg:h-[50px] rounded-[6px] shadow-[2px_4px_9px_rgba(2,16,23,0.05)] mt-5"
                v-for="(item, index) in applications" :keys="index">
                <div class="col-span-4 lg:col-span-1">
                    <div class="flex justify-between">
                        <div class="lg:hidden inter-medium">Name</div>
                        <div>{{ item.name }}</div>
                    </div>
                </div>
                <div class="col-span-4 lg:col-span-1">
                    <div class="flex justify-between">
                        <div class="lg:hidden inter-medium">Phone</div>
                        {{ item.phone }}
                    </div>
                </div>
                <div class="col-span-4 lg:col-span-1">
                    <div class="flex justify-between">
                        <div class="lg:hidden inter-medium">Email</div>
                        {{ item.email }}
                    </div>
                </div>
                <div class="col-span-4 lg:col-span-1">
                    <div class="flex justify-between">
                        <div class="lg:hidden inter-medium">Status</div>
                        {{ item.status }}
                    </div>
                </div>
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
        </div>
    </div>

    <div data-te-modal-init
        class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="exampleModalLg" tabindex="-1" aria-labelledby="exampleModalLgLabel" aria-modal="true" role="dialog">
        <div data-te-modal-dialog-ref
            class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px] min-[992px]:max-w-[800px]">
            <div
                class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                <div
                    class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                    <!--Modal title-->
                    <h5 class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                        id="exampleModalLgLabel">
                        Applicant data
                    </h5>
                    <!--Close button-->
                    <button type="button"
                        class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                        data-te-modal-dismiss aria-label="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <!--Modal body-->
                <div class="relative p-4">
                    <div>
                        <p class="inter-medium">Full name</p>
                        <p class="mt-1">lsfilsjfilpfdadap qeqefeqdaniel</p>
                    </div>
                    <div class="mt-3">
                        <p class="inter-medium">Phone</p>
                        <p class="mt-1">3485903854398</p>
                    </div>
                    <div class="mt-3">
                        <p class="inter-medium">Email</p>
                        <p class="mt-1">ajnrklvnrf@esrwgjenr.cm</p>
                    </div>
                    <div class="mt-3">
                        <p class="inter-medium">Date f birth</p>
                        <p class="mt-1">43, amy, 4040</p>
                    </div>
                    <div class="mt-3">
                        <p class="inter-medium">Address</p>
                        <p class="mt-1">43, 4wergwergh wgrjnkerg wrj wrjnjwj wejk0</p>
                    </div>
                    <div class="mt-3">
                        <p class="inter-medium">City</p>
                        <p class="mt-1">jnjwj wejk0</p>
                    </div>
                    <div class="mt-3">
                        <p class="inter-medium">State/Prvine</p>
                        <p class="mt-1">jnjwj wewse wewejk0</p>
                    </div>
                    <div class="mt-3">
                        <p class="inter-medium">Zip pstal c0de</p>
                        <p class="mt-1">100220202</p>
                    </div>
                    <div class="mt-3">
                        <p class="inter-medium">Cuntry</p>
                        <p class="mt-1">rhfjf, fjfjf fjfjfj</p>
                    </div>
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

onMounted(() => {
    initTE({ Dropdown, Modal, Ripple });
})

const applications = ref([
    {
        name: 'dapo',
        phone: '2554r22352',
        email: 'oladapodaniel10@gmail.om',
        status: 'accepted',
    },
    {
        name: 'dapo',
        phone: '2554r22352',
        email: 'oladapo10@gmail.om',
        status: 'in review',
    },
    {
        name: 'dapo',
        phone: '2554r22352',
        email: 'oladapodaniel10@gmail.om',
        status: 'declined',
    },
    {
        name: 'dapo',
        phone: '2554r22352',
        email: 'oladapodaniel10@.om',
        status: 'accepted',
    },
    {
        name: 'dapo',
        phone: '2554r22352',
        email: 'oladapodaniel10@gmail.om',
        status: 'Eligible',
    },
    {
        name: 'dapo',
        phone: '2554r22352',
        email: 'oladapodaniel10@gmail.om',
        status: 'Ineligible',
    },
    {
        name: 'dapo',
        phone: '2554r22352',
        email: 'oladapodanieail.om',
        status: 'Eligible',
    },
])
</script>

<style scoped></style>