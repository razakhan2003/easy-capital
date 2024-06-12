<template>
    <div class="w-full py-20">
        <div class="container">
            <div class="flex flex-col lg:flex-row-reverse gap-10">
                <div class="lg:w-1/2">
                    <h4 class="font-medium text-[1.5rem]">Have a question in your mind?</h4>
                    <h1 class="font-semibold text-[2.8rem] text-primary">Get in touch with us</h1>
                    <div class="flex flex-col gap-6 mt-10">
                        <div class="flex flex-col text-base">
                            <span v-if="errors.name.error" class="pl-1 text-[0.8rem] text-[#EE4B2B]">{{ errors.name.message }}</span>
                            <input placeholder="Name"
                                :class="errors.name.error ? 'border-[#EE4B2B] focus:border-[#EE4B2B]' : 'border-[#fff] focus:border-primary'"
                                class="font-light rounded-full duration-200 bg-[#EDF2F7] appearance-none border-2 w-full py-2 px-4 text-gray-700 leading-tight outline-none"
                                v-model="name"
                            >
                        </div>
                        <div class="flex flex-col lg:flex-row gap-6 items-end">
                            <text-input v-model="email" class="w-full" placeholder="Email" type="email" :error="errors.email.error" :errorMessage="errors.email.message"/>
                            <text-input v-model="mobile" class="w-full" placeholder="Phone" type="number" maxLength="10" :error="errors.mobile.error" :errorMessage="errors.mobile.message"/>
                        </div>
                        <text-area v-model="message" :rows="7" placeholder="Your Message..." />
                        <custom-button class="max-w-fit ml-auto" :title="sending ? 'Sending...' : 'Send'" @click="sending ? '' : sendContact()" :disabled="sending"/>
                        <span v-if="success" class="-mt-2 text-[#50C878] font-medium italic text-[0.9rem] text-right">{{ success }}s</span>
                    </div>
                </div>
                <div class="lg:w-1/2 flex flex-col gap-6">
                    <div class="w-full h-full min-h-[30vh]">
                        <contact-us-map class="w-full h-full min-h-[30vh]"/>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="rounded-md bg-primary p-4 flex items-center">
                            <div class="flex items-center gap-4">
                                <icons-location class="max-w-[1.6rem]"/>
                                <p class="font-light text-[0.9rem] text-[#fff]">Maruti Industrial Development Area, Plot 23, Sector 18, Gurugram, Haryana 122015</p>
                            </div>
                        </div>
                        <div class="rounded-md bg-primary p-4 flex flex-col gap-4">
                            <nuxt-link to="tel:+918745945682" target="_blank" class="flex items-center gap-4 cursor-pointer">
                                <icons-phone class="max-w-[1.6rem]"/>
                                <p class="font-light text-[0.9rem] text-[#fff]">+91 87459 45682</p>
                            </nuxt-link>

                            <nuxt-link to="mailto:support@easycapital.co.in" target="_blank" class="flex items-center gap-4 cursor-pointer">
                                <icons-email class="shrink-0 max-w-[1.6rem]"/>
                                <p class="font-light text-[0.9rem] text-[#fff] break-words">support@easycapital.co.in</p>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import axios from "axios";
import { base_url } from "~/data/endpoints";

export default{
    data(){
        return{
            name: "",
            email: "",
            mobile: "",
            message: "",
            sending: false,
            success: "",
            errors: {
                name: {error: false, message: "Name is required"},
                mobile: {error: false, message: "Mobile number should be of 10 digits"},
                email: {error: false, message: "Email is required"}
            }
        }
    },
    watch: {
        name(){
            this.name = this.name.replace(/[^a-zA-Z ]/g, "");
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

            const email_pattern = /(.+)@(.+){2,}\.(.+){2,}/; 
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
    },
    methods: {
        validateData(){
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

            const email_pattern = /(.+)@(.+){2,}\.(.+){2,}/; 
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

            if(this.errors.name.error || this.errors.email.error || this.errors.mobile.error) return false;
            return true;
        },
        async sendContact(){
            if(this.validateData()){
                this.sending = true;
                try{
                    const res = await axios.post(`${base_url}/contact-us`, {
                        name: this.name,
                        email: this.email,
                        phone: this.mobile,
                        message: this.message
                    })

                    this.success = "Thank you for contacting us. Our team will reach out to you soon!"
                }catch(error){
                    console.log(error);
                    this.sending = false;
                }
                this.sending = false;
            }
        }
    }
}
</script>