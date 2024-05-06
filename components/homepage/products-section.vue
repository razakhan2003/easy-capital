<template>
    <div class="w-full py-20 lg:py-10">
        <div class="container">
            <div class="flex flex-col items-center gap-6">
                <h2 class="w-full font-bold text-center text-[2.5rem]">Our Offerings</h2>
                <p class="font-light lg:w-2/3 text-[1rem] text-center">
                    Choose from a wide range of financial solutions tailored to suit your needs. We understand that every individual has unique requirements, which is why we have curated an impressive selection of products designed to cater to various purposes and budgets. 
                </p>
            </div>
            <div class="flex flex-col items-center">
                <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
                    <div v-for="(product, index) in products">
                        <product-card v-if="index < count" :title="product.title"
                            :target="product.target"
                            :description="product.description" 
                            :icon="product.icon"
                            :key="product.title"/>
                    </div>
                </div>
                <custom-button v-if="count <= 4" @click="toggleCount" class="max-w-fit" title="View More" />
            </div>
        </div>
    </div>
</template>

<script>
import { products } from '~/data/product-cards';
export default{
    data(){
        return{
            products: products,
            count: 4
        }
    },
    methods: {
        toggleCount(){
            if(this.count <= 4){
                this.count = this.count + 4;
                return;
            } 

            this.count = this.count - 4;
        }
    }
}
</script>