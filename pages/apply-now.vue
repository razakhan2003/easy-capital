<template>
    <div class="pt-14 pb-20">
        <div class="container">
            <div class="flex flex-col lg:flex-row gap-20">
                <div class="lg:w-1/2 flex flex-col justify-center items-center">
                    <div v-if="step === 0" class="w-full my-auto flex flex-col gap-6 p-10 rounded-xl border-2 border-[#E6E6E6] custom-shadow">
                        <h2 class="text-[1.2rem] font-semibold">Let’s start by filling in some basic details:</h2>
                        <text-input v-model="name" placeholder="Enter your name as per PAN Card" label="Full Name*" :required="true"/>
                        <text-input v-model="mobile" placeholder="Enter your mobile number" label="Mobile Number*" type="number" :required="true"/>
                        <div>
                            <label class="pl-1 mb-2">Gender*</label>
                            <div class="flex items-center gap-10 pl-2">
                                <label class="flex gap-2 items-center">
                                    <input v-model="gender" type="radio"  name="gender" value="Female">
                                    Female
                                </label>
                                <label class="flex gap-2 items-center">
                                    <input v-model="gender" type="radio"  name="gender" value="Male">
                                    Male
                                </label>
                                <label class="flex gap-2 items-center">
                                    <input v-model="gender" type="radio"  name="gender" value="Other">
                                    Other
                                </label>
                            </div>
                        </div>
                        <text-input v-model="email" placeholder="Enter your email id" label="Email Id*" type="email" :required="true"/>
                        <text-input v-model="amount" placeholder="Enter your loan amount" label="Loan Amount*" type="number" :required="true"/>
                        <custom-button @click="step++" class="max-w-fit text-[1rem] px-10 mx-auto" title="Next" :rounded="true" />
                    </div>
                    <div v-if="step === 1" class="w-full my-auto flex flex-col gap-6 p-10 rounded-xl border-2 border-[#E6E6E6] custom-shadow">
                        <h2 class="font-semibold text-[1.3rem] text-center">OTP Verification</h2>
                        <h2 class="font-medium text-[1rem] text-center">One Time Password (OTP) has been sent via SMS to <br>+91-{{ mobile }}</h2>
                        <h2 class="font-medium text-[1rem] text-center">Enter the OTP below to verify it.</h2>
                        <div class="flex flex-col max-w-fit gap-4 items-end mx-auto">
                            <v-otp-input
                                v-model:value="otp"
                                input-classes="otp-input"
                                separator=""
                                inputType="numeric"
                                :num-inputs="6"
                                :should-auto-focus="true"
                                :should-focus-order="true"
                                :placeholder="['', '', '', '', '', '']"
                            />
                            <span v-if="!resend" class="font-medium text-[0.9rem] mr-[0.4rem]">Resend OTP in {{ timeout }}s</span>
                            <span v-else @click="resendOTP" class="cursor-pointer font-light text-[0.9rem] italic underline text-primary mr-[0.4rem]">Resend OTP</span>
                        </div>
                        
                        <custom-button @click="step++" class="max-w-fit text-[1rem] px-10 mx-auto" title="Verify OTP" :rounded="true" />
                    </div>
                    <div v-if="step === 2" class="w-full my-auto flex flex-col gap-6 p-10 rounded-xl border-2 border-[#E6E6E6] custom-shadow">
                        <text-input v-model="pan" placeholder="Enter your PAN Card number" label="PAN Card"/>
                        <text-select v-model="business_type" label="Business Type" :options="[{name: 'Consumer', value: 'Consumer'}, {name: 'Business', value: 'Business'}]"/>
                        <text-input v-model="company_name" placeholder="Enter your company name" label="Company Name"/>
                        <text-select v-model="account_type" label="Account Type" :options="[{name: 'Savings Account', value: 'Savings Account'}, {name: 'Current Account', value: 'Current Account'}]"/>
                        <text-select v-model="gst" label="GST No." :options="[{name: 'Yes', value: 'Yes'}, {name: 'No', value: 'No'}]"/>
                        <text-select v-model="state" label="State" :options="country_states"/>
                        <div class="flex flex-col lg:flex-row gap-6">
                            <text-input class="lg:w-1/2" v-model="city" placeholder="Enter your city" label="City"/>
                            <text-input class="lg:w-1/2" v-model="pincode" placeholder="Enter your pincode" label="Pincode"/>
                        </div>
                        <custom-button class="max-w-fit text-[1rem] px-10 mx-auto" title="Submit" :rounded="true" />

                    </div>
                </div>
                <div class="lg:w-1/2 flex flex-col gap-10 items-center justify-center">
                    <h2 class="font-semibold text-[1.5rem]">Begin your journey with us!</h2>
                    <img class="w-[80%]" src="/images/apply-now.svg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VOtpInput from "vue3-otp-input";
import { states } from "~/data/states";

export default{
    components: {
        VOtpInput
    },
    data(){
        return{
            step: 0,
            name: "",
            mobile: null,
            gender: "",
            email: "",
            amount: null, 
            otp: "",
            pan: "",
            business_type: "",
            company_name: "",
            account_type: "",
            gst: "",
            state: "",
            city: "",
            pincode: null,
            timeout: 59,
            resend: false
        }
    },
    computed: {
        country_states(){
            return states.map(s => {
                return {
                    value: s.name,
                    name: s.name
                }
            })
        }
    },
    methods: {
        countdown(){
            let count = setInterval(() => {
                this.timeout = this.timeout - 1;
                if(this.timeout < 0){
                    clearInterval(count);
                    this.resend = true;
                    this.timeout = 59;
                }
            }, 1000)
        },
        resendOTP(){
            this.resend = false;
            this.countdown();
        }
    },
    watch: {
        step(){
            if(this.step === 1){
                this.countdown();
            }
        }
    }
}
</script>

<style scoped>
.custom-shadow{
    box-shadow: 10px 10px 0px 0px rgba(66,133,244,1);
}
</style>