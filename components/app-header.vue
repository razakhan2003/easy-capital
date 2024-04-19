<template>
    <div class="sticky top-0 z-[100] bg-[#fff] py-6">
        <div  class="container flex justify-between items-center relative">
            <nuxt-link class="font-bold text-[1.7rem]" to="/">
                <span class="text-primary">Easy</span>Capital<span class="text-primary">.</span>
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
                <hovering-dropdown :items="products">
                    <li class="font-medium hover:text-primary duration-[200ms] text-[1.1rem]">
                        Products
                    </li>
                </hovering-dropdown>
                <li>
                    <nuxt-link class="font-medium hover:text-primary duration-[200ms] text-[1.1rem]" to="/emi-calculator">
                        EMI Calculator
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link class="font-medium hover:text-primary duration-[200ms] text-[1.1rem]" to="/">
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
                    <custom-button title="Call Us: +91-87459-45682" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            show: false,
            scrolled: false,
            products: [
                {name: "Term Loan", route: "/products/term-loan"},
                {name: "Credit Line", route: "/products/credit-line"},
                {name: "Invoice Loan", route: "/products/invoice-loan"},
                {name: "Machinery Loan", route: "/products/machinery-loan"},
                {name: "Business Loan Secure", route: "/products/business-loan"},
                {name: "Unsecure Loan", route: "/products/unsecure-loan"},
                {name: "Women Loan", route: "/products/women-loan"},
                {name: "Ecommerce Loan", route: "/products/ecommerce-loan"},
            ]
        }
    }
}
</script>