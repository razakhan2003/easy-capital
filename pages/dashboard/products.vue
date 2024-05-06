<template>
    <div>
        <div class="grid grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
            <div v-for="(product, index) in products">
                <product-card :title="product.title"
                    :description="product.description" 
                    :icon="product.icon"
                    :key="product.title"
                    :apply="true"
                    />
            </div>
        </div>
    </div>
</template>

<script>
import {products} from "~/data/product-cards";

definePageMeta({
  layout: 'dashboard'
})


export default{
    data(){
        return{
            products: products
        }
    }
}
</script>