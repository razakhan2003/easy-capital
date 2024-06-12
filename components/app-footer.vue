<template>
    <footer class="bg-[#212529] py-14">
        <div class="container">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-4 lg:gap-20">
                <div class="col-span-2 md:col-span-1 flex flex-col gap-4">
                    <h2 class="text-[#fff] font-semibold text-[1.2rem]">About Us</h2>
                    <p class="font-light text-[0.9rem] pr-0 md:pr-6 lg:pr-0">
                        Your trusted partner for hassle-free loans. With transparent processes and quick approvals, we empower your financial journey. Simplify borrowing with Easy Capital today.
                    </p>
                    <div class="flex mt-4 items-center gap-4">
                        <nuxt-link target="_blank" to="https://www.facebook.com/profile.php?id=61559145197050" class="cursor-pointer bg-[#fff] bg-opacity-20 w-[3rem] h-[3rem] rounded-full flex justify-center items-center">
                            <icons-facebook class="max-w-[1.6rem]"/>
                        </nuxt-link>
                        <nuxt-link target="_blank" to="https://x.com/CapitaEasy" class="cursor-pointer bg-[#fff] bg-opacity-20 w-[3rem] h-[3rem] rounded-full flex justify-center items-center">
                            <icons-twitter class="max-w-[1.6rem]"/>
                        </nuxt-link>
                        <nuxt-link target="_blank" to="https://www.instagram.com/easycapital.official/" class="cursor-pointer bg-[#fff] bg-opacity-20 w-[3rem] h-[3rem] rounded-full flex justify-center items-center">
                            <icons-instagram class="max-w-[1.6rem]"/>
                        </nuxt-link>
                        <nuxt-link target="_blank" to="https://www.youtube.com/channel/UC-0Db-fBEk46ipnMIzxOAfw" class="cursor-pointer bg-[#fff] bg-opacity-20 w-[3rem] h-[3rem] rounded-full flex justify-center items-center">
                            <icons-youtube class="max-w-[1.6rem]"/>
                        </nuxt-link>
                    </div>
                </div>

                <div class="flex flex-col gap-4">
                    <h2 class="text-[#fff] font-semibold text-[1.2rem]">Our Products</h2>
                    <ul class="font-light text-[0.9rem] flex flex-col gap-2">
                        <li v-for="product in products" :key="product.name"><nuxt-link :to="product.route">{{ product.name }}</nuxt-link></li>
                    </ul>
                </div>

                <div class="flex flex-col gap-4">
                    <h2 class="text-[#fff] font-semibold text-[1.2rem]">Quick Links</h2>
                    <ul class="font-light text-[0.9rem] flex flex-col gap-2">
                        <li><nuxt-link to="/about-us">About Us</nuxt-link></li>
                        <li><nuxt-link to="/contact-us">Contact Us</nuxt-link></li>
                        <li><nuxt-link to="/our-partners">Our Partners</nuxt-link></li>
                    </ul>
                </div>

                <div class="col-span-2 md:col-span-1 flex flex-col gap-4">
                    <h2 class="text-[#fff] font-semibold text-[1.2rem]">Have any questions?</h2>
                    <div class="flex items-center gap-4">
                        <icons-location class="max-w-[1.6rem]"/>
                        <p class="font-light text-[0.9rem]">Maruti Industrial Development Area, Plot 23, Sector 18, Gurugram, Haryana 122015</p>
                    </div>

                    <nuxt-link to="tel:+918745945682" target="_blank" class="flex items-center gap-4 cursor-pointer">
                        <icons-phone class="max-w-[1.6rem]"/>
                        <p class="font-light text-[0.9rem]">+91 87459 45682</p>
                    </nuxt-link>

                    <nuxt-link to="mailto:support@easycapital.co.in" target="_blank" class="flex items-center gap-4 cursor-pointer">
                        <icons-email class="shrink-0 max-w-[1.6rem]"/>
                        <p class="font-light text-[0.9rem] break-words">support@easycapital.co.in</p>
                    </nuxt-link>
                    
                </div>

            </div>

            <div class="text-center mt-8">
                <p class="font-light text-[1rem]">
                    Copyright ©{{ year }} All rights reserved.
                </p>
            </div>
        </div>
    </footer>
</template>

<script>
export default{
    data(){
        return{
            year: null,
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
        }
    },
    mounted(){
        this.year = new Date().getFullYear();
    }
}
</script>

<style scoped>
footer p{
    color: rgba(255, 255, 255, 0.7);
}

footer li{
    color: rgba(255, 255, 255, 0.7);
}

footer li:hover{
    color: #fff;
}
</style>