<template>
    <div>
        <div class="grid lg:grid-cols-4 gap-12 items-start">
            <div class="col-span-3 lg:col-span-3">
                <!-- Search Input -->
                <div class="relative flex flex-wrap items-stretch">
                    <span
                        class="h-[40px] flex items-center whitespace-nowrap rounded-l bg-white dark:bg-neutral-600 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                        id="basic-addon1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
                            stroke="currentColor" class="h-5 w-5 text-neutral-500 dark:text-neutral-50">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                        </svg></span>
                    <input type="text"
                        class="relative m-0 block w-[1px] min-w-0 flex-auto rounded-r bg-white dark:bg-neutral-700 bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                        placeholder="Search for keywords" aria-label="Search" aria-describedby="basic-addon1" />
                </div>
                <div class="mt-10">
                    <h1 class="inter-semi-bold text-3xl text-neutral-800 dark:text-neutral-50">Welcome {{ userdata.firstName }} <span>👋🏼</span></h1>
                    <div class="dark:text-neutral-50">Check the lastest updates on your account</div>
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-12">
                        <div class="col-span-1 md:col-span-1">
                            <div class="flex items-start mt-7 dark:text-neutral-50">
                                <img src="../assets/images/calendar.svg" class="mt-2" />
                                <div class="ml-2">
                                    <h2 class="inter-semi-bold text-3xl leading-tight">28</h2>
                                    <div class="text-sm text-neutral-500 dark:text-neutral-100">Total applicatins</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-1 md:col-span-1">
                            <div class="flex items-start mt-7 dark:text-neutral-50">
                                <img src="../assets/images/calendar.svg" class="mt-2" />
                                <div class="ml-2">
                                    <h2 class="inter-semi-bold text-3xl leading-tight">28</h2>
                                    <div class="text-sm text-neutral-500 dark:text-neutral-100">Rejected applicatins</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-1 md:col-span-1">
                            <div class="flex items-start mt-7 dark:text-neutral-50">
                                <img src="../assets/images/calendar.svg" class="mt-2" />
                                <div class="ml-2">
                                    <h2 class="inter-semi-bold text-3xl leading-tight">28</h2>
                                    <div class="text-sm text-neutral-500 dark:text-neutral-100">Approved applicatins</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="mt-10">
                    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-12">
                        <div class="col-span-2 md:col-span-2 lg:col-span-1">
                            <div
                                class="bg-white dark:bg-neutral-700 h-[150px] flex justify-center items-center shadow-[11px_4px_30px_-2px_rgba(2,16,23,0.08)]">
                                <div class="flex dark:text-neutral-50">
                                    <img src="../assets/images/chart.svg" />
                                    <div class="ml-2">
                                        <h2 class="inter-medium text-3xl leading-tight">200</h2>
                                        <div class="text-sm text-neutral-500 dark:text-neutral-100">Total enrolments</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-2 md:col-span-2 lg:col-span-1">
                            <div
                                class="bg-white dark:bg-neutral-700 h-[150px] flex justify-center items-center shadow-[11px_4px_30px_-2px_rgba(2,16,23,0.08)]">
                                <div class="flex dark:text-neutral-50">
                                    <img src="../assets/images/chart.svg" />
                                    <div class="ml-2">
                                        <h2 class="inter-medium text-3xl leading-tight">150</h2>
                                        <div class="text-sm text-neutral-500 dark:text-neutral-100">Approved enrolments
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-2 md:col-span-2 lg:col-span-1">
                            <div
                                class="bg-white dark:bg-neutral-700 h-[150px] flex justify-center items-center shadow-[11px_4px_30px_-2px_rgba(2,16,23,0.08)]">
                                <div class="flex dark:text-neutral-50">
                                    <img src="../assets/images/chart.svg" />
                                    <div class="ml-2">
                                        <h2 class="inter-medium text-3xl leading-tight">50</h2>
                                        <div class="text-sm text-neutral-500 dark:text-neutral-100">Delined enrolments</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-10">
                    <apexchart width="100%" height="300" type="area" :options="options" :series="series"></apexchart>
                </div>
            </div>

            <div class="col-span-3 md:col-span-1 items-start">
                <div class="flex justify-end">
                    <!-- Theme switcher -->
                    <div class="mr-3">
                        <ThemeSwitcher />
                    </div>
                    <!-- First drpdwn cntainer -->
                    <div class="relative mr-3" data-te-dropdown-ref>
                        <!-- First dropdown trigger -->
                        <a class="hidden-arrow mr-4 flex items-center text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                            href="#" id="dropdownMenuButton1" role="button" data-te-dropdown-toggle-ref
                            aria-expanded="false">
                            <!-- Dropdown trigger icon -->
                            <span class="[&>svg]:w-5">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="h-5 w-5">
                                    <path fill-rule="evenodd"
                                        d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                                        clip-rule="evenodd" />
                                </svg>
                            </span>
                            <!-- Notification counter -->
                            <span
                                class="absolute -mt-2.5 ml-2 rounded-[0.37rem] bg-danger px-[0.45em] py-[0.2em] text-[0.6rem] leading-none text-white">1</span>
                        </a>
                        <!-- First dropdown menu -->
                        <ul class="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                            aria-labelledby="dropdownMenuButton1" data-te-dropdown-menu-ref>
                            <!-- First dropdown menu items -->
                            <li>
                                <a class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                                    href="#" data-te-dropdown-item-ref>Action</a>
                            </li>
                            <li>
                                <a class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                                    href="#" data-te-dropdown-item-ref>Another action</a>
                            </li>
                            <li>
                                <a class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                                    href="#" data-te-dropdown-item-ref>Something else here</a>
                            </li>
                        </ul>
                    </div>

                    <!-- Second dropdown container -->
                    <div class="relative" data-te-dropdown-ref>
                        <!-- Second dropdown trigger -->
                        <a class="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                            href="#" id="dropdownMenuButton2" role="button" data-te-dropdown-toggle-ref
                            aria-expanded="false">
                            <!-- User avatar -->
                            <img src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg" class="rounded-full"
                                style="height: 25px; width: 25px" alt="" loading="lazy" />
                            <img src="../assets/images/angle-arrow-down.png" class="w-[10px] ml-1" />
                        </a>
                        <!-- Second dropdown menu -->
                        <ul class="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                            aria-labelledby="dropdownMenuButton2" data-te-dropdown-menu-ref>
                            <!-- Second dropdown menu items -->
                            <li>
                                <a class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                                    href="#" data-te-dropdown-item-ref>Action</a>
                            </li>
                            <li>
                                <a class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                                    href="#" data-te-dropdown-item-ref>Another action</a>
                            </li>
                            <li>
                                <a class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                                    href="#" data-te-dropdown-item-ref>Something else here</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div>
        <div>user id: {{ currentUserID }}</div>
        Dashboard
        <div> firstg name: {{ userdata.firstName }}</div>
        <div>lat nae: {{ userdata.firstName }}</div>
        <div>rle: {{ userdata.role }}</div>

    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import db from '../init'
import ThemeSwitcher from '../components/ThemeSwither.vue'
import {
    Dropdown,
    initTE,
} from "tw-elements";

onMounted(() => {
    initTE({ Dropdown });
})

const currentUserID = ref(firebase.auth().currentUser ? firebase.auth().currentUser.uid : "")
const getCurrentUser = () => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            currentUserID.value = user.uid
            getUserDetails(user.uid)
        } else {
            // No user is signed in.
            console.log(user, "nt lgged in")
        }
    });
}
if (!currentUserID.value) getCurrentUser()


const userdata = ref({})
const getUserDetails = (uid) => {
    db.collection('users').doc(uid).collection('biodata')
        .get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                userdata.value = doc.data();
                console.log(doc.data(), 'jjjjjjjj')
            })
        })
        .catch((error) => {
            console.log("Error getting document:", error);
        });

}
if (currentUserID.value) getUserDetails(currentUserID.value)

const options = ref({
            chart: {
              height: 350,
              type: 'area'
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'smooth'
            },
            xaxis: {
              type: 'datetime',
              categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
            },
            tooltip: {
              x: {
                format: 'dd/MM/yy HH:mm'
              },
            },
          })

const series = ref([{
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
          }, {
            name: 'series2',
            data: [11, 32, 45, 32, 34, 52, 41]
          }])

</script>