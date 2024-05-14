<template>
    <div class="pt-14 pb-20">
        <div class="container">
            <div class="flex flex-col lg:flex-row gap-20">
                <div class="lg:w-1/2 flex flex-col justify-center items-center">
                    <div v-if="step === 0" class="w-full my-auto flex flex-col gap-6 p-10 rounded-xl border-2 border-[#E6E6E6] custom-shadow">
                        <h2 class="text-[1.2rem] font-semibold">Let’s start by filling in some basic details:</h2>
                        <text-input v-model="name" placeholder="Enter your name as per PAN Card" label="Full Name*" :required="true" :error="errors.name.error" :errorMessage="errors.name.message"/>
                        <text-input v-model="mobile" placeholder="Enter your mobile number" label="Mobile Number*" type="number" maxLength="10" :required="true" :error="errors.mobile.error" :errorMessage="errors.mobile.message"/>
                        <div>
                            <label class="pl-1 mb-2">Gender*</label>
                            <div v-if="errors.gender.error" class="pl-1 text-[0.8rem] text-[#EE4B2B]">{{ errors.gender.message }}</div>
                            <div class="flex items-center gap-10 pl-2">
                                <label class="flex gap-2 items-center">
                                    <input v-model="gender" type="radio"  name="gender" value="Male">
                                    Male
                                </label>
                                <label class="flex gap-2 items-center">
                                    <input v-model="gender" type="radio"  name="gender" value="Female">
                                    Female
                                </label>
                                <label class="flex gap-2 items-center">
                                    <input v-model="gender" type="radio"  name="gender" value="Other">
                                    Other
                                </label>
                            </div>
                        </div>
                        <text-input v-model="email" placeholder="Enter your email id" label="Email Id*" type="email" :required="true" :error="errors.email.error" :errorMessage="errors.email.message"/>
                        <text-select v-model="amount" label="Loan Amount*" :options="[{name: 'Select the loan amount', value: ''},{name: '50000-100000', value: '50000-100000'}, {name: '100000-500000', value: '100000-500000'}, {name: '500000-1000000', value: '500000-1000000'}, {name: 'Greater than 1000000', value: 'Greater than 1000000'} ]" :error="errors.amount.error" :errorMessage="errors.amount.message"/>

                        <!-- <text-input v-model="amount" placeholder="Enter your loan amount" label="Loan Amount*" type="number" :required="true" :error="errors.amount.error" :errorMessage="errors.amount.message"/> -->
                        <custom-button @click="sendOTP" class="max-w-fit text-[1rem] px-10 mx-auto" :title="sending ? 'Sending...' : 'Next'" :rounded="true"/>
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
                        
                        <span class="text-center italic text-[#EE4B2B] text-[0.9rem]">{{ api_error }}</span>
                        <custom-button :disabled="(sending || otp.length < 6)" @click="sending ? '' : verifyOTP()" class="max-w-fit text-[1rem] px-10 mx-auto" :title="sending ? 'Sending...' : 'Verify OTP'" :rounded="true" />
                    </div>
                    <div v-if="step === 2" class="w-full my-auto flex flex-col gap-6 p-10 rounded-xl border-2 border-[#E6E6E6] custom-shadow">
                        <text-input v-model="pan" maxLength="10" placeholder="Enter your PAN Card number" label="PAN Card*" :error="errors.pan.error" :errorMessage="errors.pan.message"/>
                        <text-select v-model="business_type" label="Business Type*" :options="[{name: 'Select a Business Type', value: ''}, {name: 'Proprietorship', value: 'Proprietorship'}, {name: 'Partnership', value: 'Partnership'}, {name: 'Limited Liability Company(LLC)', value: 'Limited Liability Company(LLC)'}, {name: 'Private Limited Company', value: 'Private Limited Company'}, {name: 'One Person Company', value: 'One Person Company'}]" 
                            :error="errors.business_type.error" :errorMessage="errors.business_type.message"/>
                        <text-input v-model="company_name" placeholder="Enter your company name" label="Company Name*" :error="errors.company_name.error" :errorMessage="errors.company_name.message"/>
                        <text-select v-model="account_type" label="Account Type*" :options="[{name: 'Select a Account Type', value: ''},{name: 'Savings Account', value: 'Savings Account'}, {name: 'Current Account', value: 'Current Account'}]" />
                        <text-select v-model="gst" label="GST No.*" :options="[{name: 'Select if you have GST or not', value: ''},{name: 'Yes', value: 'Yes'}, {name: 'No', value: 'No'}]" :error="errors.gst.error" :errorMessage="errors.gst.message"/>
                        <text-select v-model="state" label="State*" :options="country_states" :error="errors.state.error" :errorMessage="errors.state.message"/>
                        <div class="flex flex-col lg:flex-row gap-6">
                            <text-input class="lg:w-1/2" v-model="city" placeholder="Enter your city" label="City*" :error="errors.city.error" :errorMessage="errors.city.message"/>
                            <text-input type="number" maxLength="6" class="lg:w-1/2" v-model="pincode" placeholder="Enter your pincode" label="Pincode*" :error="errors.pincode.error" :errorMessage="errors.pincode.message"/>
                        </div>
                        <custom-button :disabled="sending" @click="sending ? '' : submit()" class="max-w-fit text-[1rem] px-10 mx-auto" :title="sending ? 'Sending...' : 'Submit'" :rounded="true" />
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
import axios from "axios";
import { base_url } from "~/data/endpoints";
import uuid4 from "uuid4"; 
import Cookies from "js-cookie"

export default{
    components: {
        VOtpInput
    },
    data(){
        return{
            step: 0,
            order_id: "",
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
            resend: false,
            errors: {
                name: {error: false, message: "Name is required"},
                mobile: {error: false, message: "Mobile number should be of 10 digits"},
                gender: {error: false, message: "Gender is required"},
                email: {error: false, message: "Email is required"},
                amount: {error: false, message: "Amount is required"},
                pan: {error: false, message: "Pan is required"},
                business_type: {error: false, message: "Business Type is required"},
                company_name: {error: false, message: "Company Name is required"},
                gst: {error: false, message: "GST Number is required"},
                state: {error: false, message: "State is required"},
                city: {error: false, message: "City is required"},
                pincode: {error: false, message: "Pincode must be of 6 digits"}
            },
            total_errors: 0,
            sending: false,
            api_error: ""
        }
    },
    computed: {
        country_states(){
            return [{name: "Select a State", value: ""}, ...states.map(s => {
                return {
                    value: s.name,
                    name: s.name
                }
            })]
        },
        login(){
            return loginState().value;
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
        validateFirst(){
            if(!this.name){
                this.errors.name.error = true;
            }else{
                this.errors.name.error = false;
            }

            if(!this.email){
                this.errors.email.error = true;
            }else{
                this.errors.email.error = false;
            }

            const email_pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
            if(!this.email.match(email_pattern)){
                this.errors.email.error = true;
                this.errors.email.message = "Plese enter a valid email address";
            }else{
                this.errors.email.error = false;
                this.errors.email.message = "Email is required";
            }

            if(!this.mobile || this.mobile.length !== 10){
                this.errors.mobile.error = true;
            }else{
                this.errors.mobile.error = false;
            }

            if(!this.gender){
                this.errors.gender.error = true;
            }else{
                this.errors.gender.error = false;
            }

            if(!this.amount){
                this.errors.amount.error = true;
            }else{
                this.errors.amount.error = false;
            }
            
            if(this.errors.name.error || this.errors.email.error || this.errors.mobile.error ||
                this.errors.gender.error || this.errors.amount.error ) return false;
            return true;
        },
        validateRemaining(){
            const pan_pattern = new RegExp(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/);
            if(!this.pan){
                this.errors.pan.error = true;
            }
            else if(!pan_pattern.test(this.pan) || this.pan.length > 10){
                this.errors.pan.error = true;
                this.errors.pan.message = "Plese enter a valid Pan Card Number";
            }else{
                this.errors.pan.error = false;
                this.errors.pan.message = "Pan is required";
            }

            if(!this.business_type){
                this.errors.business_type.error = true;
            }else{
                this.errors.business_type.error = false;
            }

            if(!this.gst){
                this.errors.gst.error = true;
            }else{
                this.errors.gst.error = false;
            }

            if(!this.state){
                this.errors.state.error = true;
            }else{
                this.errors.state.error = false;
            }

            if(!this.company_name){
                this.errors.company_name.error = true;
            }else{
                this.errors.company_name.error = false;
            }

            if(!this.city){
                this.errors.city.error = true;
            }else{
                this.errors.city.error = false;
            }

            if(!this.pincode || this.pincode.length < 6){
                this.errors.pincode.error = true;
            }else{
                this.errors.pincode.error = false;
            }
            
            if(this.errors.pan.error || this.errors.business_type.error || this.errors.company_name.error || this.errors.gst.error ||
             this.errors.state.error || this.errors.city.error || this.errors.pincode.error ) return false;
            return true;
        },
        async sendOTP(){
            if((!this.errors.name.error && !this.errors.email.error && !this.errors.mobile.error &&
                !this.errors.gender.error && !this.errors.amount.error ) && this.validateFirst()){
                this.sending = true;
                try{
                    const res = await axios.post(`${base_url}/login/send-otp`, {
                        name: this.name,
                        email: this.email,
                        phoneNumber: this.mobile,
                        gender: this.gender,
                        orderId: this.order_id
                    })

                    const { message, error } = res.data;

                    if(error){
                        this.api_error = message;
                    }else{
                        this.api_error = "";
                        this.step++;
                    }

                    this.sending = false;
                }catch(e){
                    console.log(e)
                    this.sending = false;
                }      
                
                this.sending = false;
            }
        },
        async verifyOTP(){
            this.sending = true;
            try{
                const res = await axios.post(`${base_url}/login/verify-otp`, {
                    email: this.email,
                    orderId: this.order_id,
                    phoneNumber: this.mobile,
                    otp: this.otp
                })

                const { success, message, token } = res.data;

                if(!success){
                    this.api_error = message;
                }else{
                    this.api_error = "";
                    Cookies.set("token", token);
                    await this.getLoginDetails()
                    this.step++;
                }

                this.sending = false;
            }catch(e){
                console.log(e)
                this.sending = false;
            }

            this.sending =  false;
        },
        async resendOTP(){
            this.resend = false;
            this.countdown();

            try{
                await axios.post(`${base_url}/login/resend-otp`, {
                    orderId: this.order_id
                })
            }catch(e){
                console.log(e);
            }
        },
        async submit(){
            if((!this.errors.pan.error && !this.errors.business_type.error && !this.errors.company_name.error && !this.errors.gst.error &&
             !this.errors.state.error && !this.errors.city.error && !this.errors.pincode.error ) && this.validateRemaining()){
                this.sending = true;
                const token = Cookies.get("token");
                try{
                    const res = await axios.put(`${base_url}/update-details`, {
                        details: {
                            pan: this.pan,
                            business_type: this.business_type,
                            company_name: this.company_name,
                            account_type: this.account_type,
                            gst: this.gst,
                            state: this.state,
                            city: this.city,
                            pincode: this.pincode,
                        }
                    }, {headers: {
                        "Authorization": "Bearer " + token                    
                    }})

                    if(res.status === 200){
                        this.sending = false;
                        this.$router.push("/dashboard")
                    }

                }catch(e){
                    console.log(e)
                    this.sending = false;
                }   
            }
        },
        async getLoginDetails(){
            try{
                const token = Cookies.get("token");
                const res = await axios.get(`${base_url}/me`, {headers: {
                    "Authorization": "Bearer " + token
                }});

                if(res.status === 200){
                    const {name, userId} = res.data;
                    this.login.logged_in = true;
                    this.login.user_id = userId;
                    const splitted_name = name.split(" ");
                    this.login.user_initials = splitted_name?.at(0)?.charAt(0).toUpperCase() + splitted_name?.at(1)?.charAt(0).toUpperCase();
                }

            }catch(e){
                this.login.logged_in = false;
                console.log(e)
            }
        }
    },
    watch: {
        step(){
            if(this.step === 1){
                this.countdown();
            }
        },
        name(){
            if(!this.name){
                this.errors.name.error = true;
            }else{
                this.errors.name.error = false;
            }
        },
        email(){
            if(!this.email){
                this.errors.email.error = true;
            }else{
                this.errors.email.error = false;
            }

            const email_pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
            if(!this.email.match(email_pattern)){
                this.errors.email.error = true;
                this.errors.email.message = "Plese enter a valid email address";
            }else{
                this.errors.email.error = false;
                this.errors.email.message = "Email is required";
            }
        },
        mobile(){
            if(!this.mobile || this.mobile.length !== 10){
                this.errors.mobile.error = true;
            }else{
                this.errors.mobile.error = false;
            }
        },
        gender(){
            if(!this.gender){
                this.errors.gender.error = true;
            }else{
                this.errors.gender.error = false;
            }
        },
        amount(){
            if(!this.amount){
                this.errors.amount.error = true;
            }else{
                this.errors.amount.error = false;
            }
        },
        pan(){
            const pan_pattern = new RegExp(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/);
            if(!this.pan){
                this.errors.pan.error = true;
            }
            else if(!pan_pattern.test(this.pan) || this.pan.length > 10){
                this.errors.pan.error = true;
                this.errors.pan.message = "Plese enter a valid Pan Card Number";
            }else{
                this.errors.pan.error = false;
                this.errors.pan.message = "Pan is required";
            }
        },
        business_type(){
            if(!this.business_type){
                this.errors.business_type.error = true;
            }else{
                this.errors.business_type.error = false;
            }
        },
        company_name(){
            if(!this.company_name){
                this.errors.company_name.error = true;
            }else{
                this.errors.company_name.error = false;
            }
        },
        gst(){
            if(!this.gst){
                this.errors.gst.error = true;
            }else{
                this.errors.gst.error = false;
            }
        },
        state(){
            if(!this.state){
                this.errors.state.error = true;
            }else{
                this.errors.state.error = false;
            }
        },
        city(){
            if(!this.city){
                this.errors.city.error = true;
            }else{
                this.errors.city.error = false;
            }
        },
        pincode(){
            if(!this.pincode || this.pincode.length < 6){
                this.errors.pincode.error = true;
            }else{
                this.errors.pincode.error = false;
            }
        }
    },
    mounted(){
        this.order_id = uuid4();
    }
}
</script>

<style scoped>
.custom-shadow{
    box-shadow: 10px 10px 0px 0px rgba(66,133,244,1);
}
</style>