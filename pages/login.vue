<template>
    <div class="pt-14 pb-20">
        <div class="container">
            <div class="flex flex-col lg:flex-row gap-20">
                <div class="lg:w-1/2 flex flex-col justify-center items-center">
                    <div class="w-full my-auto p-10 rounded-xl border-2 border-[#E6E6E6] custom-shadow">
                        <h2 v-if="step < 2" class="text-[1.2rem] font-semibold mb-[2rem]">Log into your account:</h2>

                        <div v-if="step === 0" class="flex flex-col gap-6">
                            <text-input v-model="mobile" maxLength="10" placeholder="Enter your mobile number" label="Mobile Number*" type="number" :required="true" :error="errors.mobile.error" :errorMessage="errors.mobile.message"/>
                            <span v-if="api_error" class="text-center italic text-[#EE4B2B] text-[0.9rem]">{{ api_error }}</span>
                            <div class="flex flex-col gap-2">
                                <custom-button @click="sendOTP" class="max-w-fit text-[1rem] px-10 ml-auto" :title="sending ? 'Sending...' : 'Next'" :rounded="true" />
                                <nuxt-link to="/apply-now" class="text-[0.9rem] font-light text-primary text-right">Don't have an account? Register here.</nuxt-link>
                            </div>
                        </div>
                        
                        <div v-if="step === 1" class="flex flex-col gap-10">
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

                            <span v-if="api_error" class="text-center italic text-[#EE4B2B] text-[0.9rem]">{{ api_error }}</span>
                            <custom-button :disabled="(sending || otp.length < 6)" @click="sending ? '' : verifyOTP()" class="max-w-fit text-[1rem] px-10 mx-auto" :title="sending ? 'Sending...' : 'Verify OTP'" :rounded="true" />
                        </div>
                        </div>

                        <div v-if="step === 2" class="flex flex-col gap-6">
                            <h2 class="text-[1.2rem] font-semibold">Since you're a new user, we need a few more info:</h2>
                            <text-input v-model="name" placeholder="Enter your name as per PAN Card" label="Full Name*" :required="true" :error="errors.name.error" :errorMessage="errors.name.message"/>
                            <text-input v-model="email" placeholder="Enter your email id" label="Email Id*" type="email" :required="true" :error="errors.email.error" :errorMessage="errors.email.message"/>
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
                            <custom-button :disabled="sending" @click="sending ? '' : submit()" class="max-w-fit text-[1rem] px-10 ml-auto" :title="sending ? 'Sending...' : 'Submit'" :rounded="true" />
                        </div>
                    </div>
                </div>
                <div class="lg:w-1/2 flex flex-col gap-10 items-center justify-center">
                    <h2 class="font-semibold text-[1.5rem]">Welcome Back to EasyCapital!</h2>
                    <img class="w-[80%]" src="/images/apply-now.svg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VOtpInput from "vue3-otp-input";
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
            gender: "",
            mobile: null,
            email: "",
            otp: "",
            timeout: 59,
            resend: false,
            type: "",
            errors: {
                mobile: {error: false, message: "Mobile number should be of 10 digits"},
                gender: {error: false, message: "Gender is required"},
                email: {error: false, message: "Email is required"},
                name: {error: false, message: "Name is required"},
            },
            sending: false,
            api_error: "",
            total_errors: 0
        }
    },
    computed: {
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
        firstStepValidator(){
            if(!this.mobile || this.mobile.length !== 10){
                this.errors.mobile.error = true;
            }else{
                this.errors.mobile.error = false;
            }

            if(this.errors.mobile.error) return false;
            return true;
        },
        secondStepValidator(){
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

            if(!this.gender){
                this.errors.gender.error = true;
            }else{
                this.errors.gender.error = false;
            }

            if(this.errors.name.error || this.errors.email.error || this.errors.gender.error) return false;
            return true;
        },
        async sendOTP(){
            if(!this.errors.mobile.error && this.firstStepValidator()){
                this.sending = true;
                try{
                    const res = await axios.post(`${base_url}/login/send-otp`, {
                        phoneNumber: this.mobile,
                        orderId: this.order_id,
                        login: true
                    })

                    const { message, error, email, type } = res.data;

                    if(type === "new"){
                        this.type = type;
                    }

                    if(error){
                        this.api_error = message;
                    }else{
                        this.api_error = "";
                        this.email = email;
                        this.step++;
                    }

                    this.sending = false;
                }catch(e){
                    console.log(e)
                    this.sending = false;
                }              
            }

            this.sending = false;
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
                    await this.getLoginDetails();

                    if(this.type === "new"){
                        this.step++;
                    }else{
                        this.$router.push("/dashboard")
                    }
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
        async getLoginDetails(){
            try{
                const token = Cookies.get("token");
                const res = await axios.get(`${base_url}/me`, {headers: {
                    "Authorization": "Bearer " + token
                }});

                if(res.status === 200){
                    const {name} = res.data;
                    this.login.logged_in = true;

                    const splitted_name = name.split(" ");
                    this.login.user_initials = splitted_name?.at(0)?.charAt(0).toUpperCase() + splitted_name?.at(1)?.charAt(0).toUpperCase();
                }

            }catch(e){
                this.login.logged_in = false;
                console.log(e)
            }
        },
        async submit(){
            if((!this.errors.name.error && !this.errors.email.error && !this.errors.gender.error && this.secondStepValidator())){
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
        }
    },
    watch: {
        step(){
            if(this.sent){
                this.countdown();
            }
        },
        mobile(){
            if(!this.mobile || this.mobile.length !== 10){
                this.errors.mobile.error = true;
            }else{
                this.errors.mobile.error = false;
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
        gender(){
            if(!this.gender){
                this.errors.gender.error = true;
            }else{
                this.errors.gender.error = false;
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