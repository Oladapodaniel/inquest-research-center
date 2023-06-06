<template>
    <div>
        <div class="grid lg:grid-cols-6 xl:grid-cols-4 gap-5 items-start">
            <div class="col-span-3 lg:col-span-4 xl:col-span-3 p-4 sm:p-6 ">
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
                <h1 class="inter-semi-bold text-3xl text-neutral-800 dark:text-neutral-50 mt-10">Welcome {{
                    userdata.firstName
                }} <span>👋🏼</span></h1>
                <div class="text-center mt-10" v-if="loading">
                    <div class="inline-block dark:text-neutral-50 h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                        role="status">
                        <span
                            class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                    </div>
                </div>
                <div v-if="userdata && Object.keys(userdata).length > 0 && userdata.role !== 'user'">
                    <div class="dark:text-neutral-50">Check the lastest updates on your account</div>
                    <!-- <div class="grid grid-cols-2 md:grid-cols-3 gap-12">
                        <div class="col-span-1 md:col-span-1">
                            <div class="flex items-start mt-7 dark:text-neutral-50">
                                <img src="../assets/images/calendar.svg" class="mt-2" />
                                <div class="ml-2">
                                    <h2 class="inter-semi-bold text-3xl leading-tight">{{ applications.length }}</h2>
                                    <div class="text-sm text-neutral-500 dark:text-neutral-100">Total applications</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-1 md:col-span-1">
                            <div class="flex items-start mt-7 dark:text-neutral-50">
                                <img src="../assets/images/calendar.svg" class="mt-2" />
                                <div class="ml-2">
                                    <h2 class="inter-semi-bold text-3xl leading-tight">{{ applications.filter(i => i.status == 'declined').length }}</h2>
                                    <div class="text-sm text-neutral-500 dark:text-neutral-100">Rejected applications</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-1 md:col-span-1">
                            <div class="flex items-start mt-7 dark:text-neutral-50">
                                <img src="../assets/images/calendar.svg" class="mt-2" />
                                <div class="ml-2">
                                    <h2 class="inter-semi-bold text-3xl leading-tight">{{ applications.filter(i => i.status == 'accepted').length }}</h2>
                                    <div class="text-sm text-neutral-500 dark:text-neutral-100">Approved applications</div>
                                </div>
                            </div>
                        </div>
                    </div> -->

                </div>
                <div class="mt-10" v-if="userdata && Object.keys(userdata).length > 0 && userdata.role !== 'user'">
                    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-12">
                        <div class="col-span-2 md:col-span-2 lg:col-span-1">
                            <div
                                class="bg-white dark:bg-neutral-700 h-[120px] flex rounded-xl justify-center items-center shadow-[11px_4px_30px_-2px_rgba(2,16,23,0.08)]">
                                <div class="flex dark:text-neutral-50">
                                    <img src="../assets/images/chart.svg" class="w-[30px]" />
                                    <div class="ml-2">
                                        <h2 class="inter-medium text-3xl leading-tight">{{ applications.length }}</h2>
                                        <div class="text-sm text-neutral-500 dark:text-neutral-100">Total applications</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-2 md:col-span-2 lg:col-span-1">
                            <div
                                class="bg-white dark:bg-neutral-700 h-[120px] flex rounded-xl justify-center items-center shadow-[11px_4px_30px_-2px_rgba(2,16,23,0.08)]">
                                <div class="flex dark:text-neutral-50">
                                    <img src="../assets/images/chart.svg" class="w-[30px]" />
                                    <div class="ml-2">
                                        <h2 class="inter-medium text-3xl leading-tight">{{ applications.filter(i => i.status
                                            == 'accepted').length }}</h2>
                                        <div class="text-sm text-neutral-500 dark:text-neutral-100">Approved applications
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-2 md:col-span-2 lg:col-span-1">
                            <div
                                class="bg-white dark:bg-neutral-700 h-[120px] flex rounded-xl justify-center items-center shadow-[11px_4px_30px_-2px_rgba(2,16,23,0.08)]">
                                <div class="flex dark:text-neutral-50">
                                    <img src="../assets/images/chart.svg" class="w-[30px]" />
                                    <div class="ml-2">
                                        <h2 class="inter-medium text-3xl leading-tight">{{ applications.filter(i => i.status
                                            == 'declined').length }}</h2>
                                        <div class="text-sm text-neutral-500 dark:text-neutral-100">Declined applications
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-10 bg-white dark:bg-neutral-600 rounded-xl shadow-[11px_4px_30px_-2px_rgba(2,16,23,0.08)] p-5"
                    v-if="userdata && Object.keys(userdata).length > 0 && userdata.role !== 'user'">
                    <apexchart width="100%" height="300" type="area" :options="options" :series="series"></apexchart>
                </div>
                <div class="bg-[#0093DD] dark:bg-neutral-600 mt-10 rounded-xl p-6" v-if="userdata.role == 'user'">
                    <div class="flex flex-col md:flex-row md:justify-between items-center" v-if="!userdata.enrolled">
                        <div>
                            <h2 class="inter-medium text-2xl text-white">Need to continue your application?</h2>
                            <button type="button" data-te-ripple-init data-te-ripple-color="light" @click="enrol"
                                class="inter-semi-bold mt-3 inline-block rounded bg-white dark:bg-primary-500 px-6 pb-2 pt-2.5 text-sm font-medium leading-normal text-primary-500 dark:text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-100 dark:hover:bg-primarydeep hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-100 dark:focus:bg-primarydeep focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-100 dark:active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                                Enrol
                            </button>
                        </div>
                        <img src="../assets/images/user_frame.svg" class="md:w-1/2" />
                    </div>
                    <div class="flex flex-col md:flex-row md:justify-between items-center" v-else>
                        <div>
                            <h2 class="inter-semi-bold text-2xl text-white">Enrolment successful</h2>
                            <p class="text-white">Your enrolment is successful, you will be communicated <br />about your
                                medical assessment.</p>
                        </div>
                        <img src="../assets/images/enrolmentsuccessful.svg" class="md:w-1/2" />
                    </div>
                </div>
            </div>

            <div
                class="overflow-scroll col-span-3 lg:col-span-2 xl:col-span-1 items-start bg-[#002D44] dark:bg-neutral-700 h-screen p-4 m-6 lg:m-0 sm:px-6 sm:py-8">
                <div class="flex justify-center">
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
                                    class="h-5 w-5 text-white">
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
                <div class="flex justify-between mt-6">
                    <h2 class="text-2xl inter-medium text-neutral-50">Schedules</h2>
                    <button type="button" data-te-toggle="modal" data-te-target="#exampleModalCenter" data-te-ripple-init
                        v-if="userdata.role !== 'user'" data-te-ripple-color="light"
                        class="inline-block rounded bg-transparent border border-neutral-400 text-neutral-400 px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-800 focus:bg-primary-800  focus:outline-none focus:ring-0 active:bg-primary-800 dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                        Add new
                    </button>
                </div>
                <div class="flex justify-between mt-7">
                    <div v-for="(item, index) in scheduleDates" :key="index"
                        class="text-white bg-[rgba(74,117,141,0.25)] w-[35px] h-[35px] rounded-full"
                        :class="{ 'bg-primary-500': item.date == new Date().getDate() }">
                        <div class="h-full flex items-center justify-center">{{ item.date }}</div>
                        <div class="inter text-xs text-center mt-1 pb-2"
                            :class="{ 'border-b-2 border-primary-500': item.date == new Date().getDate() }">{{
                                weekDay(item.day) }}</div>
                    </div>
                </div>
                <div class="border border-[rgba(74,117,141,0.25)] mt-7"></div>
                <div class="inter-medium text-xl text-center mt-5 text-white">Upcoming meetings</div>
                <div class="bg-[rgba(74,117,141,0.25)] mt-5 rounded-full text-white py-3 px-5 flex  justify-between items-center"
                    v-for="(item, index) in orderSchdules" :key="index">
                    <div class="">
                        <div class="inter-medium">{{ item.participant.full_name }}</div>
                        <div class="text-neutral-300 text-xs">{{ item.date }} - {{ item.time }}</div>
                    </div>
                    <div class="w-[20px] h-[20px] rounded-full bg-neutral-500 opacity-40"></div>
                </div>
                <div class="mt-12" v-if="orderSchdules.length == 0">
                    <div class="mb-3 text-white inter-medium text-center">No Upcoming meeting</div>
                    <img src="../assets/images/calendarcuate.svg" class="mx-auto" />
                </div>
            </div>
        </div>
    </div>
    <!-- <div>
        <div>user id: {{ currentUserID }}</div>
        Dashboard
        <div> firstg name: {{ userdata.firstName }}</div>
        <div>lat nae: {{ userdata.firstName }}</div>
        <div>rle: {{ userdata.role }}</div>

    </div> -->
    <VueModalityV3 ref="enrolsuccess" success title="Success" :hide-cancel="true" centered @ok="$refs.enrolsuccess.hide()">
        <div>You have enrolled for the clinical trial successfully 🎉</div>
    </VueModalityV3>

    <!--Verically centered modal-->
    <div data-te-modal-init
        class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="exampleModalCenter" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
        <div data-te-modal-dialog-ref
            class="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]">
            <div
                class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                <div
                    class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                    <!--Modal title-->
                    <h5 class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                        id="exampleModalScrollableLabel">
                        Schedule an appointment
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
                    <p class="mb-2">Select participant</p>
                    <select data-te-select-init data-te-container="#exampleModalCenter" data-te-select-filter="true"
                        v-model="schedule.participant">
                        <option :value="item" v-for="item in applications" :key="item.id">{{ item.full_name }}</option>
                    </select>
                    <p class="mt-4 mb-2">Choose date</p>
                    <div class="relative mb-3" data-te-datepicker-init data-te-input-wrapper-init
                        data-te-format="mmm, dd, yyyy">
                        <input type="text" v-model="schedule.date"
                            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            placeholder="Select a date" />
                    </div>
                    <p class="mt-4 mb-2">Choose time</p>
                    <div class="relative" data-te-timepicker-init data-te-input-wrapper-init>
                        <input type="text" v-model="schedule.time"
                            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="form1" placeholder="Select a time" />
                    </div>
                    <p class="mt-4 mb-2">Enter meeting link</p>
                    <div class="relative mb-3" data-te-input-wrapper-init>
                        <input type="text" v-model="schedule.meeting_link"
                            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleFormControlInput1" placeholder="https://meet.google.com/gld-sms-glv" />
                    </div>
                    <p class="mt-4 mb-2">Meeting description (optional)</p>
                    <div class="relative mb-3" data-te-input-wrapper-init>
                        <textarea v-model="schedule.description"
                            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleFormControlTextarea1" rows="3" placeholder="Enter description"></textarea>
                    </div>
                </div>


                <!--Modal footer-->
                <div
                    class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                    <button type="button" ref="closeschedule"
                        class="inter-medium inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-sm font-medium leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                        data-te-modal-dismiss data-te-ripple-init data-te-ripple-color="light">
                        Close
                    </button>
                    <button type="button" data-te-ripple-init data-te-ripple-color="light" @click="createSchedule"
                        class="ml-1 inter-medium inline-block rounded bg-primary-500 px-6 pb-2 pt-2.5 text-sm font-medium leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primarydeep hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primarydeep focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                        Schedule
                    </button>
                </div>
            </div>
        </div>
    </div>

    <VueModalityV3 ref="submitsuccess" :hide-header="true" @ok="$refs.submitsuccess.hide()" width="600px"
        :hide-cancel="true" centered>
        <div class="relative p-4 pt-0">
            <div class="flex justify-center">
                <video width="320" height="240" autoPlay loop muted>
                    <source src="../assets/images/screenrecording.mp4">
                </video>
            </div>
            <div class="inter-semi-bold text-2xl text-center text-[#01b270] mt-5">Success</div>
            <div class="text-center work-sans-medium">Your meeting has been scheduled! 🎉</div>
            <div class="text-center mt-2 text-sm mb-5">
                The participant will receive a notification about this meeting which also include the meeting details.
            </div>
        </div>
    </VueModalityV3>
</template>

<script setup>
import { onMounted, ref, computed, reactive } from 'vue';
import db from '../init'
import ThemeSwitcher from '../components/ThemeSwither.vue'
import { useNotification } from "@kyvg/vue3-notification";
import VueModalityV3 from 'vue-modality-v3'
import {
    Ripple,
    Input,
    Select,
    Modal,
    Datepicker,
    Timepicker,
    initTE,
} from "tw-elements";
import emailservice from "../services/emailService";

onMounted(() => {
    initTE({ Ripple, Input, Modal, Select, Datepicker, Timepicker });
})

let schedule = reactive({})
const closeschedule = ref(null)
const submitsuccess = ref(null)
const scheduledMeetings = ref([])
const loading = ref(true)
const { notify } = useNotification()
const applications = ref([]);
const enrolments = ref([]);
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
    loading.value = true
    db.collection('users').doc(uid).collection('biodata')
        .get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                userdata.value = doc.data();
                userdata.value.id = doc.id;
                console.log(doc.data(), 'jjjjjjjj')
            })
            loading.value = false
        })
        .catch((error) => {
            loading.value = false
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
        categories: []
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    },
})

const seriesdata = ref([])
const seriesenrolmentdata = ref([])

const series = computed(() => {
    return [{
        name: 'Applications',
        data: seriesdata.value
    }, {
        name: 'Enrolments',
        data: seriesenrolmentdata.value
    }]
})

const scheduleDates = computed(() => {
    let abovedays = []
    let belowdays = []
    for (let i = 0; i < 3; i++) {
        let newDate = new Date(new Date());
        newDate.setDate(newDate.getDate() + i);
        abovedays.push({
            date: newDate.getDate(),
            day: newDate.getDay()
        });
    }
    for (let i = 0; i < 2; i++) {
        let newDate = new Date(new Date());
        newDate.setDate((newDate.getDate() - 1) - i);
        belowdays.unshift({
            date: newDate.getDate(),
            day: newDate.getDay()
        });
    }
    console.log(abovedays, belowdays)
    return belowdays.concat(abovedays)
})

const weekDay = (day) => {
    switch (day) {
        case 0:
            return "Sun";
        case 1:
            return "Mon";
        case 2:
            return "Tues";
        case 3:
            return "Wed";
        case 4:
            return "Thurs";
        case 5:
            return "Fri";
        case 6:
            return "Sat";
    }
}

const groupedValue = ref({})
const groupedEnrolmentValue = ref({})
const enrolsuccess = ref(null)
const groupDate = () => {
    const data = applications.value.map(i => ({ date: i.application_date }))
    console.log(data,)

    const groupedData = data.reduce((acc, curr) => {
        const dateStr = curr.date;
        acc[dateStr] = [...(acc[dateStr] || []), dateStr];
        return acc;
    }, {});

    groupedValue.value = groupedData
    seriesdata.value = new Array()
    for (const i in groupedValue.value) {
        const element = groupedValue.value[i];
        seriesdata.value.push(element.length)
    }
    console.log(seriesdata.value)
}

const groupEnrolmentDate = () => {
    console.log(enrolments.value, 'enrolling')
    const data = enrolments.value.map(i => ({ date: i.enrolment_date }))
    console.log(data, 'enrol,ment here')

    const groupedData = data.reduce((acc, curr) => {
        const dateStr = curr.date;
        acc[dateStr] = [...(acc[dateStr] || []), dateStr];
        return acc;
    }, {});

    groupedEnrolmentValue.value = groupedData
    console.log(groupedEnrolmentValue.value)
    seriesenrolmentdata.value = new Array()
    for (const i in groupedEnrolmentValue.value) {
        const element = groupedEnrolmentValue.value[i];
        seriesenrolmentdata.value.push(element.length)

    }
    console.log(seriesenrolmentdata.value)
}


const enrol = () => {
    // Update enrolled property in users collections for this user
    db.collection("users").doc(currentUserID.value).collection('biodata').doc(userdata.value.id)
        .update({
            enrolled: true
        })
        .then(() => {
            const userapplicationdata = applications.value.find(i => i.email == userdata.value.email)
            console.log(userapplicationdata)
            if (!userapplicationdata) {
                notify({
                    type: 'error',
                    title: "Enrolment failed",
                    text: "You have not submitted your application, kindly submit first before enroling",
                    duration: 5000
                });
            } else {
                userdata.value.enrolled = true
                // notify({
                //     type: 'success',
                //     title: "Enrolment successful 🎉",
                //     text: "You have enrolled for the clinical trial successfully, we will get to you for your medical assessment",
                //     duration: 5000
                // });
                enrolsuccess.value.open()
                // Set the enrolment date
                db.collection("applications").doc(userapplicationdata.id)
                    .update({
                        enrolment_date: new Date().toISOString().split('T')[0]
                    }).then((res) => {
                        console.log(res)

                        // Update user enrolment date to push to enrolments collection
                        userapplicationdata.enrolment_date = new Date().toISOString().split('T')[0];
                        // Push to enrolment list
                        db.collection('enrolments')
                            .add(userapplicationdata)
                            .then(res => console.log(res))
                            .catch(err => console.log(err))
                    })
                    .catch(err => console.log(err))
            }


        }).catch((err) => {
            console.log(err)
        })



    // Push this user to enrolments collection

}


const getAllApplications = () => {
    db.collection('applications')
        .get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                console.log(doc.id)

                let documents = {
                    ...doc.data(),
                    id: doc.id
                }
                applications.value.push(documents)
                groupDate();
                groupEnrolmentDate();
                options.value = {
                    ...options.value,
                    ...{
                        xaxis: {
                            categories: applications.value.map(i => i.application_date)
                        }
                    }
                }
                console.log(documents)
            })
        })
        .catch((error) => {
            console.log("Error getting document:", error);
        });

}
getAllApplications();

const getAllEnrolnments = () => {
    db.collection('enrolments')
        .get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                console.log(doc.id)

                let documents = {
                    ...doc.data(),
                    id: doc.id
                }
                enrolments.value.push(documents)
                groupEnrolmentDate();
                options.value = {
                    ...options.value,
                    ...{
                        xaxis: {
                            categories: enrolments.value.map(i => i.enrolment_date)
                        }
                    }
                }
                console.log(documents)
            })
        })
        .catch((error) => {
            console.log("Error getting document:", error);
        });

}
getAllEnrolnments();

const createSchedule = () => {
    console.log(schedule, 'fff')
    db.collection("schedules")
        .add(schedule)
        .then(() => {
            closeschedule.value.click();
            submitsuccess.value.open();
            scheduledMeetings.value = new Array();
            getschedules();
            // Send email to recipient
            const message = `'Hello ${schedule.participant.full_name},\n\nA meeting has been scheduled with you. Detail below.\n\nDate: ${schedule.date}.\nTime: ${schedule.time}.\nMeeting link: ${schedule.meeting_link}.\n\nEnsure that you join on time to avoid cancellation of the meeting.\nThanks.\n\nInquest Research Center.`
            emailservice.sendEMail(schedule.participant, message).then((response) => {
                console.log(response)
                schedule = new Object();
            })
        })
}

const getschedules = () => {
    db.collection('schedules')
        .get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                const item = {
                    ...doc.data(),
                    orderbydate: new Date(doc.data().date).toISOString()
                }
                scheduledMeetings.value.push(item)
            })
            console.log(scheduledMeetings.value, 'dddd')
        })
}

getschedules();

const orderSchdules = computed(() => {
    if (userdata.value.role !== 'user') {
        if (scheduledMeetings.value.length == 0) return scheduledMeetings.value
        return scheduledMeetings.value.sort((a, b) => new Date(a.orderbydate) - new Date(b.orderbydate))
    } else {
        if (scheduledMeetings.value.length == 0) return scheduledMeetings.value
        return scheduledMeetings.value.sort((a, b) => new Date(a.orderbydate) - new Date(b.orderbydate)).filter(i => i.participant.email == userdata.value.email)
    }
})

</script>