<template>
    <div class="p-4 sm:p-8">
        <h1 class="inter-semi-bold text-4xl dark:text-neutral-50">Applications</h1>
        <div class="mt-10">
            <div class="hidden lg:block">
                <div
                    class="grid lg:grid-cols-6 items-center bg-white dark:bg-neutral-600 h-[50px] px-5 rounded-[6px] shadow-[2px_4px_9px_rgba(2,16,23,0.05)]">
                    <div class="col-span-4 lg:col-span-1 inter-medium dark:text-neutral-50">
                        Name
                    </div>
                    <div class="col-span-4 lg:col-span-1 inter-medium dark:text-neutral-50">
                        Phone
                    </div>
                    <div class="col-span-4 lg:col-span-1 inter-medium dark:text-neutral-50">
                        Email
                    </div>
                    <div class="col-span-4 lg:col-span-1 inter-medium dark:text-neutral-50">
                        Status
                    </div>
                    <div class="col-span-4 lg:col-span-1 inter-medium dark:text-neutral-50">
                        Review
                    </div>
                    <div class="col-span-4 lg:col-span-1 inter-medium dark:text-neutral-50">
                        Action
                    </div>
                </div>
            </div>

            <div class="grid lg:grid-cols-6 items-center bg-white dark:bg-neutral-600 px-5 lg:h-[50px] rounded-[6px] shadow-[2px_4px_9px_rgba(2,16,23,0.05)] mt-5"
                v-for="(item, index) in applications" :keys="index">
                <div class="col-span-4 lg:col-span-1">
                    <div class="flex justify-between dark:text-neutral-50">
                        <div class="lg:hidden inter-medium">Name</div>
                        <div>{{ item.full_name }}</div>
                    </div>
                </div>
                <div class="col-span-4 lg:col-span-1">
                    <div class="flex justify-between dark:text-neutral-50">
                        <div class="lg:hidden inter-medium">Phone</div>
                        {{ item.phone_number }}
                    </div>
                </div>
                <div class="col-span-4 lg:col-span-1">
                    <div class="flex justify-between dark:text-neutral-50">
                        <div class="lg:hidden inter-medium">Email</div>
                        {{ item.email }}
                    </div>
                </div>
                <div class="col-span-4 lg:col-span-1">
                    <div class="flex justify-between dark:text-neutral-50">
                        <div class="lg:hidden inter-medium">Status</div>

                        <span
                            :class="{ 'bg-success-100 text-success-700 font-leading': item.status.includes('accepted'), 'bg-warning-100 text-warning-700 font-leading': item.status.includes('review'), 'bg-danger-100 text-danger-600 font-leading': item.status.includes('declined') }"
                            class="work-sans-medium inline-block whitespace-nowrap rounded-[0.27rem] px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-success-700">
                            {{ item.status }}
                        </span>
                    </div>
                </div>
                <div class="col-span-4 lg:col-span-1">
                    <div class="flex justify-between dark:text-neutral-50">
                        <!-- data-te-toggle="modal" data-te-target="#exampleModalLg" data-te-ripple-init -->
                        <div class="lg:hidden inter-medium">Review</div>
                        <button type="button" @click="openMyModal"
                            class="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200">
                            Review
                        </button>
                    </div>
                </div>
                <div class="col-span-4 lg:col-span-1">
                    <div class="flex justify-between dark:text-neutral-50">
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
                                <li v-if="item && item.status && item.status.toLowerCase().includes('review')"
                                    @click="acceptApplication(item)">
                                    <a class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                                        href="#" data-te-dropdown-item-ref>Accept</a>
                                </li>
                                <li v-if="item && item.status && item.status.toLowerCase().includes('review')"
                                    @click="declineApplication(item)">
                                    <a class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                                        href="#" data-te-dropdown-item-ref>Decline</a>
                                </li>
                                <!-- <li v-if="item && item.status && item.status.toLowerCase().includes('accept')" @click="setEligible(item)">
                                    <a class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                                        href="#" data-te-dropdown-item-ref>Eligible</a>
                                </li>
                                <li v-if="item && item.status && item.status.toLowerCase().includes('accept')" @click="setIneligible(item)">
                                    <a class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                                        href="#" data-te-dropdown-item-ref>Ineligible</a>
                                </li> -->
                                <li @click="deleteApplication(item)">
                                    <a class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                                        href="#" data-te-dropdown-item-ref>Delete</a>
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


            </div>
        </div>
    </div>

    <VueModalityV3 ref="myRef" title="Jessica Jones" title-class="inter-semi-bold text-2xl" width="700px" ok-title="Done" :hide-cancel="true" @ok="closeModal" centered>
        <div class="relative p-4">
            <div>
                <h2 class="inter-medium text-xl">Contact Information</h2>
                <div class="py-3 flex justify-between border-b">
                    <div class="inter-medium">Phone</div>
                    <div class="text-neutral-500 work-sans-medium">7857878678</div>
                </div>
                <div class="py-3 flex justify-between border-b">
                    <div class="inter-medium">Email</div>
                    <div class="text-neutral-500 work-sans-medium">oladapodaniel10@gmail.com</div>
                </div>
                <div class="py-3 flex justify-between border-b">
                    <div class="inter-medium">Address</div>
                    <div class="text-neutral-500 work-sans-medium">32, gng gngnglff</div>
                </div>
            </div>
            <div class="mt-3">
                <h2 class="inter-medium text-xl">General Information</h2>
                <div class="py-3 flex justify-between border-b">
                    <div class="inter-medium">Date of birth</div>
                    <div class="text-neutral-500 work-sans-medium">28th May</div>
                </div>
                <div class="py-3 flex justify-between border-b">
                    <div class="inter-medium">Email</div>
                    <div class="text-neutral-500 work-sans-medium">oladapodaniel10@gmail.com</div>
                </div>
                <div class="py-3 flex justify-between border-b">
                    <div class="inter-medium">Address</div>
                    <div class="text-neutral-500 work-sans-medium">32, gng gngnglff</div>
                </div>
                <div class="py-3 flex justify-between border-b">
                    <div class="inter-medium">City</div>
                    <div class="text-neutral-500 work-sans-medium">3sfbsfb</div>
                </div>
                <div class="py-3 flex justify-between border-b">
                    <div class="inter-medium">State/Province</div>
                    <div class="text-neutral-500 work-sans-medium">3sfbsfb</div>
                </div>
                <div class="py-3 flex justify-between border-b">
                    <div class="inter-medium">Zip/Postal code</div>
                    <div class="text-neutral-500 work-sans-medium">3sfbsfb</div>
                </div>
                <div class="py-3 flex justify-between border-b">
                    <div class="inter-medium">Country</div>
                    <div class="text-neutral-500 work-sans-medium">3sx xxfbsfb</div>
                </div>
            </div>
            <div class="mt-3">
                <h2 class="inter-medium text-xl">Medical Information</h2>
                <div class="py-3 flex justify-between border-b">
                    <div class="inter-medium">Do you have any medical condition?</div>
                    <div class="text-neutral-500 work-sans-medium">28tsdfvsf sfbsfb,s rbsfh May</div>
                </div>
                <div class="py-3 flex justify-between border-b">
                    <div class="inter-medium">Are you currently taking any medication?</div>
                    <div class="text-neutral-500 work-sans-medium">28tsdfvsf sfbsfb,s rb ,f ffs,f fsfsfh May</div>
                </div>
                <div class="py-3 flex justify-between border-b">
                    <div class="inter-medium">Have you participated in a clinical trial</div>
                    <div class="text-neutral-500 work-sans-medium">28ty</div>
                </div>
                <div class="py-3 flex justify-between border-b">
                    <div class="inter-medium">Please provide details</div>
                    <div class="text-neutral-500 work-sans-medium">28ty</div>
                </div>
                <div class="py-3 flex justify-between border-b">
                    <div class="inter-medium">Which clinical trial are you interested in participating in?</div>
                    <div class="text-neutral-500 work-sans-medium">28ty</div>
                </div>
                <div class="py-3 flex justify-between border-b">
                    <div class="inter-medium">How did you hear about our clinical trial?</div>
                    <div class="text-neutral-500 work-sans-medium">28ty</div>
                </div>
                <div class="py-3 flex justify-between border-b">
                    <div class="inter-medium">Why do you want to participate in this clinical trial?</div>
                    <div class="text-neutral-500 work-sans-medium">28ty</div>
                </div>
                <div class="py-3 flex justify-between border-b">
                    <div class="inter-medium">Do you understand the risks and benefits of participating in a clinical trial?
                    </div>
                    <div class="text-neutral-500 work-sans-medium">28ty</div>
                </div>
                <div class="py-3 flex justify-between border-b">
                    <div class="inter-medium">Are you willing to comply with all requirements of the clinical trial
                        protocol?</div>
                    <div class="text-neutral-500 work-sans-medium">28ty</div>
                </div>
                <div>
                    <img src="" alt="Signature" />
                </div>
            </div>
        </div>
    </VueModalityV3>
</template>

<script setup>
import { ref } from 'vue';
import db from "../init"
import VueModalityV3 from 'vue-modality-v3'
// import {
//     // Dropdown,
//     initTE,

//     Ripple
// } from "tw-elements";
import emailjs from 'emailjs-com';
import { useNotification } from "@kyvg/vue3-notification";

// onMounted(() => {
//     console.log('reaching')
//     initTE({   Ripple });
// })
// Dropdown
const myRef = ref(null)
const openMyModal = () => {
    console.log(myRef.value)
    myRef.value.open()
}
const { notify } = useNotification()
const applications = ref([])
const loading = ref(false)
// const reviewModal = ref(false)
// Status | == > Accepted, Declined, In review, Eligible, Ineligible

const getAllApplications = () => {
    loading.value = true
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
                console.log(documents)
            })
            loading.value = false
        })
        .catch((error) => {
            loading.value = false
            console.log("Error getting document:", error);
        });

}
getAllApplications();

const acceptApplication = (item) => {
    // Send the emial and update the status to accepted

    const serviceID = 'service_g6u3t95';
    const templateID = 'template_y7y3elt';
    const userID = '6nfjGI-Q5L8U97Jz6';
    const message = "Thank you for submitting your application, It is our delight to inform you that your application has been accepted, You will need to submit an enrolment form to take your medical assessment, to do that, sign up to the clinical trial portal for participant with this link https://inquest-research-center.vercel.app/signup. Goodluck"

    const params = {
        to_name: item.full_name,
        from_name: "Inquest Research Center",
        reply_to: item.email,
        message: message,
    };

    emailjs.send(serviceID, templateID, params, userID)
        .then(() => {
            updateStatus(item.id, 'accepted')
            notify({
                type: 'success',
                title: "Participant accepted",
                text: 'An email has been sent to the participant for further information on next steps',
                duration: 10000
            });
        }, (error) => {
            console.error('Email failed to send', error);
        });
}

const updateStatus = (id, status) => {
    db.collection("applications").doc(id)
        .update({
            status: status
        }).then((res) => {
            applications.value = new Array();
            getAllApplications();
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
}

const declineApplication = (item) => {
    const serviceID = 'service_g6u3t95';
    const templateID = 'template_y7y3elt';
    const userID = '6nfjGI-Q5L8U97Jz6';
    const message = "Thank you for showing your interest, We are sorry to inform you that we will not be moving forward with your application."

    const params = {
        to_name: item.full_name,
        from_name: "Inquest Research Center",
        reply_to: item.email,
        message: message,
    };

    emailjs.send(serviceID, templateID, params, userID)
        .then(() => {
            updateStatus(item.id, 'declined')
            notify({
                type: 'warning',
                title: "Application declined",
                text: 'An email has been sent to the participant informing about the application status',
                duration: 10000
            });
        }, (error) => {
            console.error('Email failed to send', error);
        });
}

const deleteApplication = (item) => {
    db.collection("applications").doc(item.id).delete().then(() => {
        console.log("Document successfully deleted!");
        applications.value = applications.value.filter(i => i.id !== item.id);
        notify({
            type: 'success',
            title: "Application deleted",
            text: 'You have successfully deleted the application',
            duration: 5000
        });
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
}

const setIneligible = (item) => {
    updateStatus(item.id, 'ineligible')
}

const setEligible = (item) => {
    // db.collection("applications").doc(item.id).delete().then(() => {
    //     console.log("Document successfully deleted!");
    //     applications.value = applications.value.filter(i => i.id !== item.id);
    //     notify({
    //         type: 'success',
    //         title: "Application deleted",
    //         text: 'You have successfully deleted the application',
    //         duration: 5000
    //     });
    // }).catch((error) => {
    //     console.error("Error removing document: ", error);
    // });

    // db.collection("enrolments").add(item)
    //     .then(res => {
    //         console.log(res)
    //     })
    //     .catch (err => console.log(err))
}

const closeModal = () => {
    myRef.value.hide()
}
</script>

<style scoped></style>