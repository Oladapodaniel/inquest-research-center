<template>
    <div>
        <div class="grid md:grid-cols-2 items-center">
            <div
                class="col-span-2 md:col-span-1 bg-bluetintdeep dark:bg-neutral-800 text-neutral-500 dark:text-neutral-50 h-screen hidden md:block">
                <div class="flex items-center h-screen">
                    <img src="../../assets/images/Mobileloginpana1.svg" class="m-auto w-[70%]" />
                </div>
            </div>
            <div class="col-span-2 md:col-span-1 dark:bg-neutral-700 dark:text-neutral-50 h-screen">
                <div class="flex items-center h-screen w-full dark:bg-neutral-700">
                    <div class="md:container px-5 w-full">
                        <h2 class="inter-semi-bold text-3xl text-center mb-5">Sign In</h2>
                        <form>
                            <!-- Email input -->
                            <p class="text-neutral-700 dark:text-neutral-50 inter-medium mb-2">Email</p>
                            <div class="relative mb-6" data-te-input-wrapper-init>
                                <input type="text" v-model="user.email"
                                    class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="exampleFormControlInput1" placeholder="Email address" />
                                <!-- <label for="exampleFormControlInput3"
                                    class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Email
                                    address
                                </label> -->
                            </div>

                            <!-- Password input -->
                            <p class="text-neutral-700 dark:text-neutral-50 inter-medium mb-2">Password</p>
                            <div class="relative mb-6" data-te-input-wrapper-init>
                                <input type="password" v-model="user.password"
                                    class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="exampleFormControlInput2" placeholder="Password" />
                                <!-- <label for="exampleFormControlInput33"
                                    class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Password
                                </label> -->
                            </div>

                            <!-- Button -->
                            <button type="button" data-te-ripple-init data-te-ripple-color="light" @click="login"
                                class="inter-medium w-full inline-block rounded bg-primary-500 px-6 pb-2 pt-2.5 text-sm font-medium	 leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primarydeep hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primarydeep focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                                Sign in
                            </button>
                        </form>
                        <div class="mt-3 text-center">
                            Dont have an account? <span class="text-primary-500">submit your application</span>, you will
                            receive a notification to create an account if eligible.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import { useNotification } from "@kyvg/vue3-notification";
import { useRouter } from "vue-router";
import {
    Input,
    initTE,
    Select,
    Ripple
} from "tw-elements";

const user = reactive({})
const { notify } = useNotification()
const router = useRouter()

onMounted(() => {
    initTE({ Input, Select, Ripple });
})


const login = () => {
    firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
            localStorage.setItem('token', JSON.stringify(res.user._lat))
                router.push('/tenant');
            notify({
                type: 'success',
                title: "Welcome back 🎉",
                text: "You have been logged in!",
                duration: 5000
            });
        })
        .catch(error => {
            notify({
                type: 'error',
                title: "Error logging in",
                text: error.message,
                duration: 5000
            });
        });


}
</script>