<template>
    <div>
        <div class="grid grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
            <div v-for="(product, index) in products">
                <product-card :title="product.title"
                    :description="product.description" 
                    :icon="product.icon"
                    :key="product.title"
                    :apply="true"
                    :disabled="product.status"
                    :btnText="product.status ? 'Applied' : 'Apply'"
                    @submit="apply(index)"
                    />
            </div>
        </div>
        <div v-if="show" class="p-10 w-[90%] lg:w-[25%] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
           border-2 border-[#ececec] rounded-lg bg-[#fff] z-[20] flex flex-col justify-center">
            <h2 class="font-bold text-[1.3rem] text-center">Thank you for your interest.</h2>
            <h4 class="font-semibold text-[1rem] text-center mt-8">Our representative will contact you within 24 hours.</h4>
            <custom-button @click="show = false" class="mt-8 mx-auto w-full lg:max-w-fit lg:ml-auto py-2 px-8 !text-[0.8rem]" title="Okay" />
        </div>
    </div>
</template>

<script>
import {products} from "~/data/product-cards";
import Cookies from "js-cookie";
import axios from "axios";
import { base_url } from "~/data/endpoints";

definePageMeta({
  layout: 'dashboard'
})

export default{
    data(){
        return{
            sending: -1,
            show: false,
            products: []
        }
    },
    computed: {
        login(){
            return loginState().value;
        }
    },
    methods: {
        mapProducts(){
            if(Cookies.get("products")){
                this.products = JSON.parse(Cookies.get("products"));
                return;
            }

            this.products = products.map(p => {
                return {
                    ...p,
                    status: false
                }
            })
        },
        parseData(){
            const products = JSON.stringify(this.products);
            Cookies.set("products", products, { expires: 15 });
        },
        formatDate(date){
            const year = date.getFullYear();
            const month = date.getMonth();
            const day = date.getDate();

            return `${day}-${month < 10 ? '0' + month : month}-${year}`
        },
        async apply(index){
            const applied_date = this.formatDate(new Date())
            await this.sendData(this.products[index].name, applied_date, index)
            this.products[index].status = true;
            this.parseData();
            this.mapProducts();
            this.show = true;
        },
        async sendData(product, date, index){
            this.sending = index;
            try{
            const token = Cookies.get("token");
            const res = await axios.put(`${base_url}/update-mis`, {
                userId: this.login.user_id,
                loan: {
                    product,
                    date
                }
            }, {headers: {
                "Authorization": "Bearer " + token, 
            }})

            if(res.status === 200){
                this.sending = -1;
            }
            }catch(e){
            console.log(e)
            this.sending = -1;
            }
        }
    },
    mounted(){
        this.mapProducts()
    }
}
</script>