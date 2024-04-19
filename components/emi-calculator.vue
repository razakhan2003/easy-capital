<template>
    <div class="flex flex-col gap-10 mt-10 mb-16">
        <div class="flex flex-col gap-6">
            <text-input type="number" v-model="amount" placeholder="Enter the loan amount" label="Amount(In ₹)" />
            <div>
                <input class="w-full cursor-pointer" type="range" v-model="amount" min="0" max="20000000" step="50000" />
                <div class="flex font-light text-[0.7rem] justify-between">
                    <span class="border-r-[1px] pr-1">0</span>
                    <span class="border-r-[1px] pr-1">25L</span>
                    <span class="border-r-[1px] pr-1">50L</span>
                    <span class="border-r-[1px] pr-1">75L</span>
                    <span class="border-r-[1px] pr-1">1CR</span>
                    <span class="border-r-[1px] pr-1">1.25CR</span>
                    <span class="border-r-[1px] pr-1">1.50CR</span>
                    <span class="border-r-[1px] pr-1">1.75CR</span>
                    <span class="border-r-[1px] pr-1">2CR</span>
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-6">
            <text-input type="number" v-model="rate" placeholder="Enter rate of interest" label="Rate(PA)" />
            <div>
                <input class="w-full cursor-pointer" type="range" v-model="rate" min="5" max="30" />
                <div class="flex font-light text-[0.7rem] justify-between">
                    <span class="border-r-[1px] pr-1">5%</span>
                    <span class="border-r-[1px] pr-1">10%</span>
                    <span class="border-r-[1px] pr-1">15%</span>
                    <span class="border-r-[1px] pr-1">20%</span>
                    <span class="border-r-[1px] pr-1">25%</span>
                    <span class="border-r-[1px] pr-1">30%</span>
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-6">
            <text-input type="number" v-model="tenure" placeholder="Enter Loan Tenure" label="Loan Tenure(In Months)" />
            <div>
                <input class="w-full cursor-pointer" type="range" v-model="tenure" min="6" max="42" />
                <div class="flex font-light text-[0.7rem] justify-between">
                    <span class="border-r-[1px] pr-1">6</span>
                    <span class="border-r-[1px] pr-1">12</span>
                    <span class="border-r-[1px] pr-1">18</span>
                    <span class="border-r-[1px] pr-1">24</span>
                    <span class="border-r-[1px] pr-1">30</span>
                    <span class="border-r-[1px] pr-1">36</span>
                    <span class="border-r-[1px] pr-1">>36</span>
                </div>
            </div>
        </div>
        <div class="flex flex-col md:flex-row gap-6">
            <div class="lg:w-1/3 border-[1px] border-[#DBDBDB] rounded-md p-4">
                <h2 class="text-[1.1rem] font-semibold">EMI :</h2>
                <h5 class="text-[1rem] font-light">₹{{ emi }}</h5>
            </div>
            <div class="lg:w-1/3 border-[1px] border-[#DBDBDB] rounded-md p-4">
                <h2 class="text-[1.1rem] font-semibold">Total Interest :</h2>
                <h5 class="text-[1rem] font-light">₹{{ total_interest }}</h5>
            </div>
            <div class="lg:w-1/3 border-[1px] border-[#DBDBDB] rounded-md p-4">
                <h2 class="text-[1.1rem] font-semibold">Total Amount Including Interest :</h2>
                <h5 class="text-[1rem] font-light">₹{{ total_amount_paid }}</h5>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            amount: 200000,
            rate: 5,
            tenure: 6
        }
    },
    computed:{
        interest(){
            return parseInt((this.amount * (this.rate * 0.01)) / this.tenure);
        },
        emi(){
            return parseInt((this.amount / this.tenure) + this.interest);
        },
        total_amount_paid(){
            return parseInt(this.emi * this.tenure);
        },
        total_interest(){
            return parseInt(this.total_amount_paid - this.amount)
        }
    }
}
</script>