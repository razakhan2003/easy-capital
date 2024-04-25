<template>
    <div class="py-20">
        <div class="container">
            <div class="flex flex-col-reverse lg:flex-row gap-10 lg:gap-20">
                <div class="lg:w-2/3 flex flex-col justify-center">
                    <h1 class="font-bold text-[2rem]">{{ product.tagline }}</h1>
                    <h1 class="font-bold text-[2rem]">With Our <span class="text-primary">{{ product.name }}</span></h1>
                    <p class="font-light text-[1.1rem] mt-8">
                        {{ product.description }}
                    </p>
                </div>
                <div class="lg:w-1/3">
                    <img class="w-full" :src="product.image" alt="">
                </div>
            </div>
            <div class="mt-20 lg:mt-28 flex flex-col lg:flex-row gap-10 lg:gap-20">
                <div class="hidden lg:block lg:w-1/2">
                    <vue3-lottie class="w-full" animationLink="../animations/apply-animation.json" />
                </div>
                <div class="lg:w-1/2">
                    <h1 class="font-bold text-[2rem]">Kick Start Your Journey</h1>
                    <h1 class="font-bold text-[2rem]">With <span class="text-primary">Easy Capital</span></h1>
                    <div class="mt-8 flex flex-col gap-8">
                        <text-input type="number" placeholder="Enter Loan Amout" label="Loan Amount" />
                        <text-input  placeholder="Enter your PAN" label="PAN" />
                        <custom-button class="max-w-fit mx-auto lg:mx-0" title="Apply Now" />
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {products} from "~/data/products.js";
import { Vue3Lottie } from 'vue3-lottie'

export default{
    components: {Vue3Lottie},
    data(){
        return{
            products: products
        }
    },
    computed: {
        product(){
            return this.products.filter(p => p.slug === this.$route.params.slug).at(0)
        }
    }
}
</script>