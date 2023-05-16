<template>
    <div
        class="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div class="md:container">
            <h2 class="inter-medium text-2xl md:text-4xl text-primary-500 text-center">Clinical Trial Application
                Form
            </h2>
            <p class="mb-4 mt-9 text-base text-neutral-600 dark:text-neutral-200">
                Thank you for your interest in participating in our clinical trial. To help us determine
                your eligibility, please fill out the following information:
            </p>
            <p class="text-neutral-700 dark:text-neutral-50 inter-medium mb-2">Full Name</p>
            <div class="relative mb-4 " data-te-input-wrapper-init>
                <input type="text" v-model="form.full_name" @input="emitData"
                    class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput3" placeholder="Full Name" />
            </div>

            <p class="text-neutral-700 dark:text-neutral-50 inter-medium mb-2">Date of birth</p>
            <div class="relative mb-3" data-te-datepicker-init data-te-input-wrapper-init>
                <input type="text"  v-model="form.date_of_birth" @input="emitData"
                    class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    placeholder="Select a date" />
            </div>

            <div class="text-neutral-500 dark:text-neutral-50 text-sm inter-medium my-6">Contact information</div>

            <p class="text-neutral-700 dark:text-neutral-50 inter-medium mb-2">Email</p>
            <div class="relative mb-4 " data-te-input-wrapper-init>
                <input type="text" v-model="form.email" @input="emitData"
                    class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput3" placeholder="Email" />
            </div>

            <p class="text-neutral-700 dark:text-neutral-50 inter-medium mb-2">Phone number</p>
            <div class="relative mb-4 " data-te-input-wrapper-init>
                <input type="text" v-model="form.phone_number" @input="emitData"
                    class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput3" placeholder="Phone number" />
            </div>

            <p class="text-neutral-700 dark:text-neutral-50 inter-medium mb-2">Address</p>
            <div class="relative mb-4 " data-te-input-wrapper-init>
                <input type="text" v-model="form.address" @input="emitData"
                    class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput3" placeholder="Address" />
            </div>

            <div class="grid md:grid-cols-2 md:gap-7 items-center">
                <div class="col-span-2 md:col-span-1 text-neutral-500 dark:text-neutral-50">
                    <p class="text-neutral-700 dark:text-neutral-50 inter-medium mb-2">City</p>
                    <div class="relative mb-4" data-te-input-wrapper-init>
                        <input type="text" v-model="form.city" @input="emitData"
                            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleFormControlInput3" placeholder="City" />
                    </div>
                </div>
                <div class="col-span-2 md:col-span-1 text-neutral-500 dark:text-neutral-50">
                    <p class="text-neutral-700 dark:text-neutral-50 inter-medium mb-2">State/Province</p>
                    <div class="relative mb-4" data-te-input-wrapper-init>
                        <input type="text" v-model="form.province" @input="emitData"
                            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleFormControlInput3" placeholder="State/Province" />
                    </div>
                </div>
            </div>


            <div class="grid md:grid-cols-2 md:gap-7 items-center">
                <div class="col-span-2 md:col-span-1 text-neutral-500 dark:text-neutral-50">
                    <p class="text-neutral-700 dark:text-neutral-50 inter-medium mb-2">Zip/Postal Code</p>
                    <div class="relative mb-4" data-te-input-wrapper-init>
                        <input type="text" v-model="form.postal_code" @input="emitData"
                            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleFormControlInput3" placeholder="Zip/Postal Code" />
                    </div>
                </div>
                <div class="col-span-2 md:col-span-1 text-neutral-500 dark:text-neutral-50">
                    <p class="text-neutral-700 dark:text-neutral-50 inter-medium mb-2">Country</p>
                    <div class="relative mb-4" data-te-input-wrapper-init>
                        <input type="text" v-model="form.country" @input="emitData"
                            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleFormControlInput3" placeholder="Country" />
                    </div>
                </div>
            </div>

            <div class="text-neutral-500 dark:text-neutral-50 text-sm inter-medium my-6">Medical information</div>

            <p class="text-neutral-700 dark:text-neutral-50 inter-medium mb-2">Do you have any medical conditions?
                (Please list):</p>
            <div class="relative mb-6" data-te-input-wrapper-init>
                <textarea
                    class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlTextarea1" rows="3" placeholder="Please list" v-model="form.medical_condition"
                    @input="emitData"></textarea>
            </div>

            <p class="text-neutral-700 dark:text-neutral-50 inter-medium mb-2">Are you currently taking any
                medications? (Please list):</p>
            <div class="relative mb-6" data-te-input-wrapper-init>
                <textarea
                    class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlTextarea1" rows="3" placeholder="Please list" v-model="form.on_medication"
                    @input="emitData"></textarea>
            </div>


            <p class="text-neutral-700 dark:text-neutral-50 inter-medium mb-2">Have you participated in a clinical
                trial before? :</p>
            <div class="flex justify-start mb-6">
                <!--First radio-->
                <div class="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                        class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                        type="radio" name="inlineRadioOptions" id="inlineRadio1" value="yes"
                        @change="selectedParticipateTrial" />
                    <label
                        class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer text-neutral-600 dark:text-neutral-50"
                        for="inlineRadio1">Yes</label>
                </div>

                <!--Second radio-->
                <div class="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                        class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                        type="radio" name="inlineRadioOptions" id="inlineRadio2" value="no"
                        @change="selectedParticipateTrial" />
                    <label
                        class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer text-neutral-600 dark:text-neutral-50"
                        for="inlineRadio2">No</label>
                </div>
            </div>

            <p class="text-neutral-700 dark:text-neutral-50 inter-medium my-2">If yes, please provide details:</p>
            <div class="relative mb-6" data-te-input-wrapper-init>
                <textarea v-model="form.details_if_participated" @input="emitData"
                    class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlTextarea1" rows="3" placeholder="Please provide more details"></textarea>
            </div>



            <p class="text-neutral-700 dark:text-neutral-50 inter-medium mt-4 my-2">Which clinical trial are you
                interested in participating in?:</p>
            <select data-te-select-init data-te-select-size="lg" v-model="form.clinical_trial_type" @change="emitData">
                <option value="1">Covid vaccination</option>
                <option value="2">HIV vaccination</option>
                <option value="3">Weight loss & Obesity</option>
                <option value="4">Diabetes</option>
                <option value="5">Parkinson’s Disease</option>
                <option value="6">Prostate Cancer</option>
                <option value="7">Breast Cancer</option>
            </select>


            <p class="text-neutral-700 dark:text-neutral-50 inter-medium mt-4 my-2">How did you hear about our
                clinical trial?:</p>
            <select data-te-select-init data-te-select-size="lg" v-model="form.information_source" @change="emitData">
                <option value="1">Social media</option>
                <option value="2">Peer referral</option>
                <option value="3">Google/Search Engine</option>
                <option value="4">Television</option>
                <option value="4">Third-Party Review</option>
                <option value="5">Other</option>
            </select>



            <p class="text-neutral-700 dark:text-neutral-50 inter-medium mt-4 my-2">Why do you want to participate
                in this clinical trial?:</p>
            <div class="relative mb-6" data-te-input-wrapper-init>
                <textarea v-model="form.reason_for_joining_trial" @input="emitData"
                    class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlTextarea1" rows="3" placeholder="Enter answer here"></textarea>
            </div>

            <p class="text-neutral-700 dark:text-neutral-50 inter-medium mb-2">Do you understand the risks and
                benefits of participating in a clinical trial?:</p>
            <div class="flex justify-start mb-6">
                <!--First radio-->
                <div class="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                        class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                        type="radio" name="inlineRadioOptions1" id="inlineRadio1" value="yes" @change="understandBenefits" />
                    <label
                        class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer text-neutral-600 dark:text-neutral-50"
                        for="inlineRadio1">Yes</label>
                </div>

                <!--Second radio-->
                <div class="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                        class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                        type="radio" name="inlineRadioOptions1" id="inlineRadio2" value="no" />
                    <label
                        class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer text-neutral-600 dark:text-neutral-50"
                        for="inlineRadio2">No</label>
                </div>
            </div>


            <p class="text-neutral-700 dark:text-neutral-50 inter-medium mt-4 mb-2">Are you willing to comply with
                all requirements of the clinical trial protocol?:</p>
            <div class="flex justify-start">
                <!--First radio-->
                <div class="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                        class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                        type="radio" name="inlineRadioOptions2" id="inlineRadio11" value="yes" @change="willingToComply" />
                    <label
                        class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer text-neutral-600 dark:text-neutral-50"
                        for="inlineRadio1">Yes</label>
                </div>

                <!--Second radio-->
                <div class="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                        class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                        type="radio" name="inlineRadioOptions2" id="inlineRadio22" value="no" @change="willingToComply" />
                    <label
                        class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer text-neutral-600 dark:text-neutral-50"
                        for="inlineRadio2">No</label>
                </div>
            </div>

            <div class="flex justify-end">
                <button type="button" data-te-ripple-init data-te-ripple-color="light" @click="$emit('next')"
                    class="inter-medium inline-block rounded bg-primary-500 px-6 pb-2 pt-2.5 text-sm font-medium	 leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primarydeep hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primarydeep focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                    Next
                </button>
            </div>
        </div>
    </div>
</template>


<script setup>
import {
    Input,
    initTE,
    Datepicker,
    Select,
    Ripple,
} from "tw-elements";
import { onMounted, ref } from "vue";

onMounted(() => {
    initTE({ Input, Datepicker, Select, Ripple })
})

const emit = defineEmits(['formdata'])
const form = ref({})

const emitData = () => {
    emit('formdata', form.value)
}

const selectedParticipateTrial = (e) => {
    console.log(e.target.value)
    form.value.have_participated_clinical_trial = e.target.value;
    emitData();
}

const understandBenefits = (e) => {
    form.value.understand_benefits = e.target.value;
    emitData();
}

const willingToComply = (e) => {
    form.value.willing_to_comply = e.target.value;
    emitData();
}
</script>