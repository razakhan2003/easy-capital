<template>
    <div class="sticky top-0 z-[100] bg-[#fff] py-6">
        <div  class="container flex justify-between items-center relative">
            <nuxt-link class="flex items-center gap-[0.3rem] font-bold text-[1.7rem]" to="/">
                <img class="max-w-[4rem]" src="/images/easy-capital-logo.png" alt="">
                <span><span class="text-[#0001FD]">Easy</span>Capital</span>
            </nuxt-link>
            <div class="lg:hidden">
                <svg @click="show = !show" v-if="!show" class="max-w-[2.5rem]" id="Layer_1" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>
                <svg @click="show = !show" v-else class="max-w-[2.4rem]" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z"/></svg>
            </div>
            <ul :class="show ? 'flex lg:flex' : 'hidden lg:flex'" class="bg-[#fff] w-full lg:w-auto px-[16px] lg:px-0 py-6 lg:py-0 absolute left-0 top-full lg:relative flex-col lg:flex-row lg:items-center gap-[2rem]">
                <li>
                    <nuxt-link @click="show = false" class="font-medium hover:text-primary duration-[200ms] text-[1.1rem]" to="/">
                        Home
                    </nuxt-link>
                </li>
                <hovering-dropdown @close="show = false" :items="products">
                    <li class="font-medium hover:text-primary duration-[200ms] text-[1.1rem]">
                        Products
                    </li>
                </hovering-dropdown>
                <!-- <li>
                    <nuxt-link @click="show = false" class="font-medium hover:text-primary duration-[200ms] text-[1.1rem]" to="/emi-calculator">
                        EMI Calculator
                    </nuxt-link>
                </li> -->
                <li>
                    <nuxt-link @click="show = false" class="font-medium hover:text-primary duration-[200ms] text-[1.1rem]" to="/about-us">
                        About Us
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link @click="show = false" class="font-medium hover:text-primary duration-[200ms] text-[1.1rem]" to="/our-partners">
                        Our Partners
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link @click="show = false" class="font-medium hover:text-primary duration-[200ms] text-[1.1rem]" to="/contact-us">
                        Contact Us
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link class="bg-primary p-2 border-[1px] border-primary rounded-md text-[#fff] font-medium" target="_blank" to="tel:+918745945682">Call Us: +91-87459-45682</nuxt-link>
                </li>
                
                <li v-if="!login.logged_in">
                    <nuxt-link class="cursor-pointer bg-[#fff] border-[1px] border-primary p-2 rounded-md text-primary font-medium">Login</nuxt-link>
                </li>

                <hovering-dropdown @close="show = false" :items="dashboard" :arrow="false" alignment="right" v-else>
                    <div class="cursor-pointer w-[2.5rem] h-[2.5rem] flex items-center justify-center 
                                rounded-full border-2 border-primary
                                text-primary font-medium">
                        {{ login.user_initials }}
                    </div>
                    <template v-slot:additional>
                        <li @click="logout" class="text-[0.9rem] font-medium text-[#EE4B2B] my-3 hover:opacity-75">Logout</li>
                    </template>
                </hovering-dropdown>

            </ul>
        </div>
    </div>
</template>

<script>
import Cookies from "js-cookie";

export default{
    data(){
        return{
            show: false,
            scrolled: false,
            products: [
                {name: "Business Loan", route: "/products/business-loan"},
                {name: "Line of Credit", route: "/products/line-of-credit"},
                {name: "MSME Loan", route: "/products/msme-loan"},
                {name: "Secured Business Loan", route: "/products/secured-business-loan"},
                {name: "Machinery Loan", route: "/products/machinery-loan"},
                {name: "Business Loan for Women", route: "/products/business-loan-for-women"},
                {name: "Business Ecommerce Loan", route: "/products/business-ecommerce-loan"},
                {name: "Loan Against Propert for Business", route: "/products/loan-against-property"},
            ],
            dashboard: [
                {name: "Dashboard", route: "/dashboard"}
            ]
        }
    },
    computed: {
        login(){
            return loginState().value;
        }
    },
    methods: {
        logout(){
            Cookies.remove("token");
            this.login.logged_in = false;
            this.login.user_initials = "";
        }
    }
}
</script>