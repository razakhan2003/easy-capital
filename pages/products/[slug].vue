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
                    <div class="flex flex-row gap-6 mt-8">
                        <text-select class="w-[70%] lg:w-1/3" v-model="amount" label="Loan Amount" :options="[{name: 'Select the loan amount', value: ''},{name: '50000-100000', value: '50000-100000'}, {name: '100000-500000', value: '100000-500000'}, {name: '500000-1000000', value: '500000-1000000'}, {name: 'Greater than 1000000', value: 'Greater than 1000000'}]" :enlarge="true" />
                        <div class="flex items-end">
                            <custom-button @click="apply" :rounded="true" class="text-[1rem]" title="Apply Now" />
                        </div>
                    </div>
                </div>
                <div class="mx-auto w-[60%] lg:w-1/3">
                    <img class="w-full" :src="product.image" alt="">
                </div>
            </div>
            <!-- <div class="mt-20 lg:mt-28 flex flex-col lg:flex-row gap-10 lg:gap-20">
                <div class="hidden lg:block lg:w-1/2">
                    <vue3-lottie class="w-full" animationLink="../animations/apply-animation.json" />
                </div>
                <div class="lg:w-1/2">
                    <h1 class="font-bold text-[2rem]">Kick Start Your Journey</h1>
                    <h1 class="font-bold text-[2rem]">With <span class="text-primary">Easy Capital</span></h1>
                    <div class="mt-8 flex flex-col gap-8">
                        <text-input  placeholder="Enter your PAN" label="PAN" />
                    </div>

                </div>
            </div> -->
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
            products: products,
            amount: null
        }
    },
    computed: {
        product(){
            return this.products.filter(p => p.slug === this.$route.params.slug).at(0)
        }
    },
    methods: {
        apply(){
            if(this.amount){
                this.$router.push({path: '/apply-now', query: {amount: this.amount}})
            }
        }
    }
}
</script>