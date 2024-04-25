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
export default{
    data(){
        return{
            products: [
                {title: 'Term Loan', description: '"Unlock your business potential with our tailored term loans - grow, thrive, succeed.""', icon: '/images/icons/term-loan.svg'},
                {title: 'Credit Line', description: '"Secure your financial freedom with our flexible Credit Line - Empowering your dreams, today!"', icon: '/images/icons/credit-line.svg'},
                {title: 'Invoice Loan', description: '"Effortlessly manage cash flow with our Invoice Loan - Your business growth accelerator today!"', icon: '/images/icons/invoice-loan.svg'},
                {title: 'Machinery Loan', description: '"Fuel your business engine with our machinery loan - Transforming dreams into reality!"', icon: '/images/icons/machinery-loan.svg'},
                {title: 'Business Loan Secure', description: '"Secure your business\'s future with our loan - Stability, growth, and peace of mind, guaranteed!"', icon: '/images/icons/business-loan.svg'},
                {title: 'Unsecure Loan', description: '"Unlock your potential with our unsecured loan - Freedom to grow without boundaries, today!"', icon: '/images/icons/unsecure-loan.svg'},
                {title: 'Women Loan', description: '"Empowering women, one loan at a time - Achieve your dreams with our supportive financial solutions!"', icon: '/images/icons/women-loan.svg'},
                {title: 'Ecommerce Loan', description: '"Grow your online empire with our ECommerce loan - Unleash your potential, one sale at a time!"', icon: '/images/icons/ecommerce-loan.svg'},
            ],
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