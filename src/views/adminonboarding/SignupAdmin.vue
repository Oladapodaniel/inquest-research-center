<template>
    <div>
        <div class="grid md:grid-cols-2 items-center">
            <div
                class="col-span-2 md:col-span-1 bg-bluetintdeep dark:bg-neutral-700 text-neutral-500 dark:text-neutral-50 h-screen hidden md:block">
                <div class="flex items-center h-screen">
                    <img src="../../assets/images/Sign-up-pana.svg" class="m-auto w-[70%]" />
                </div>
            </div>
            <div class="col-span-2 md:col-span-1 dark:bg-neutral-700 dark:text-neutral-50 h-screen">
                <div class="flex items-center h-screen w-full">
                    <div class="md:container px-5 w-full">
                        <h2 class="inter-semi-bold text-3xl text-center mb-5">Admin Portal For Clinical Trial</h2>
                        <form>
                            <div class="grid md:grid-cols-2 md:gap-7 items-center">
                                <div class="col-span-2 md:col-span-1 text-neutral-500 dark:text-neutral-50">
                                    <!-- First Name input -->
                                    <p class="text-neutral-700 dark:text-neutral-50 inter-medium mb-2">First Name</p>
                                    <div class="relative mb-6" data-te-input-wrapper-init>
                                        <input type="text" v-model="admin.firstName"
                                            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                            id="exampleFormControlInput1" placeholder="First Name" />
                                        <!-- <label for="exampleFormControlInput3"
                                            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">First
                                            Name
                                        </label> -->
                                    </div>
                                </div>
                                <div class="col-span-2 md:col-span-1 text-neutral-500 dark:text-neutral-50">
                                    <!-- Last name input -->
                                    <p class="text-neutral-700 dark:text-neutral-50 inter-medium mb-2">Last Name</p>
                                    <div class="relative mb-6" data-te-input-wrapper-init>
                                        <input type="text" v-model="admin.lastName"
                                            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                            id="exampleFormControlInput2" placeholder="Last Name" />
                                        <!-- <label for="exampleFormControlInput3"
                                            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Last
                                            Name
                                        </label> -->
                                    </div>
                                </div>
                            </div>
                            <!-- Email input -->
                            <p class="text-neutral-700 dark:text-neutral-50 inter-medium mb-2">Email address</p>
                            <div class="relative mb-6" data-te-input-wrapper-init>
                                <input type="text" v-model="admin.email"
                                    class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="exampleFormControlInput5" placeholder="Email address" />
                                <!-- <label for="exampleFormControlInput3"
                                    class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Email
                                    address
                                </label> -->
                            </div>

                            <!-- Gender select -->
                            <p class="text-neutral-700 dark:text-neutral-50 inter-medium mb-2">Gender</p>
                            <div class="mb-6">
                                <select data-te-select-init data-te-select-size="lg" v-model="admin.gender">
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                                <!-- <label data-te-select-label-ref>Gender</label> -->
                            </div>

                            <!-- Role select -->
                            <p class="text-neutral-700 dark:text-neutral-50 inter-medium mb-2">Role</p>
                            <div class="mb-6">
                                <select data-te-select-init data-te-select-size="lg" v-model="admin.role">
                                    <option value="coordinator">Clinical Research Coordinator</option>
                                    <option value="nurse">Nurse</option>
                                </select>
                                <!-- <label data-te-select-label-ref>Gender</label> -->
                            </div>

                            <!-- Password input -->
                            <p class="text-neutral-700 dark:text-neutral-50 inter-medium mb-2">Password</p>
                            <div class="relative mb-6" data-te-input-wrapper-init>
                                <input type="password" v-model="admin.password" autocomplete="current-password"
                                    class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="exampleFormControlInput6" placeholder="Password" />
                                <!-- <label for="exampleFormControlInput33"
                                    class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Password
                                </label> -->
                            </div>

                            <!-- Button -->
                            <button type="button" data-te-ripple-init data-te-ripple-color="light" @click="signupUser"
                                class="inter-medium w-full inline-block rounded bg-primary-500 px-6 pb-2 pt-2.5 text-sm font-medium	 leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primarydeep hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primarydeep focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                                Create account
                            </button>
                        </form>
                        <div class="mt-3 text-center">
                            Already have an account? <router-link to="/signin"><span
                                    class="inter-medium text-primary-500">Sign in</span></router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import { useRouter } from "vue-router"
import db from '../../init'
import { useNotification } from "@kyvg/vue3-notification";
import {
    Input,
    initTE,
    Select,
    Ripple
} from "tw-elements";

const { notify } = useNotification()
const router = useRouter()
const admin = reactive({
    role: "coordinator",
    gender: "male"
})

onMounted(() => {
    initTE({ Input, Select, Ripple });
})

const signupUser = () => {
    firebase
        .auth()
        .createUserWithEmailAndPassword(admin.email, admin.password)
        .then((res) => {
            console.log(res, 'success')
            notify({
                type: 'success',
                title: "Account created successfully 🎉",
                text: "You have been logged in!",
                duration: 5000
            });
            localStorage.setItem('token', res.user._lat)
            saveUserDetails(res.user.uid)

        })
        .catch(error => {
            notify({
                type: 'error',
                title: "Error creating account",
                text: error.message,
                duration: 5000
            });
        });
}

const saveUserDetails = (uid) => {
    // Remove password property
    delete admin.password

    db.collection("users").doc(uid).collection('biodata')
        .add(admin)
        .then(response => {
            console.log(response, 'here')
            router.push('/tenant')
        })
}
</script>