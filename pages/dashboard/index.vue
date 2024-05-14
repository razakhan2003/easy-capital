<template>
    <div class="border-2 border-[#ececec] rounded-xl">
        <div v-for="(lender, index) in lenders" :key="lender.name" 
            :class="index + 1 !== lenders.length ? 'border-b-[1px]' : ''" 
            class="pt-16 px-10 pb-8">
            <div class="grid grid-cols-2 lg:grid-cols-5 border-[1px]">
                <div class="col-span-1 p-6 flex items-center border-b-[1px] lg:border-b-0 border-r-[1px]">
                  <img class="max-h-[5rem] w-auto" :src="lender.image" alt="">
                </div>
                <div class="col-span-1 p-6 border-b-[1px] lg:border-b-0 border-r-[1px]">
                  <h4 class="font-semibold text-[1.1rem] text-[#808080]">Reference ID</h4>
                  <h3 class="font-semibold text-[0.9rem]">{{ login.user_id }}</h3>
                </div>
                <div class="col-span-1 p-6 border-r-[1px]">
                  <h4 class="font-semibold text-[1.1rem] text-[#808080]">Applied On</h4>
                  <h3 class="font-semibold text-[0.9rem]">{{ lender.date }}</h3>
                </div>
                <div class="col-span-1 lg:col-span-2 p-6 border-r-[1px]">
                  <h4 class="font-semibold text-[1.1rem] text-[#808080]">Current Status</h4>
                  <h3 class="font-semibold text-[0.9rem]">{{ lender.status }}</h3>
                </div>
            </div>
            <div class="grid grid-cols-3 md:grid-cols-4 gap-6 mt-6 items-center">
                <div class="col-span-1">
                  <h4 class="font-semibold text-[1.1rem] text-[#808080]">Processing Fee</h4>
                  <h4 class="font-semibold text-[0.8rem]">{{ lender.pf }}</h4>
                </div>
                <div class="col-span-1">
                  <h4 class="font-semibold text-[1.1rem] text-[#808080]">Rate Of Interest</h4>
                  <h4 class="font-semibold text-[0.8rem]">{{ lender.roi }}</h4>
                </div>
                <div class="col-span-1">
                  <h4 class="font-semibold text-[1.1rem] text-[#808080]">Loan Amount</h4>
                  <h4 class="font-semibold text-[0.8rem]">{{ lender.loan_amount }}</h4>
                </div>
                <div class="col-span-3 lg:col-span-1">
                  <custom-button @click="apply(index)" :disabled="(lender.status === 'Applied' || sending === index) ? true : false" 
                    class="w-full lg:max-w-fit lg:ml-auto py-2 px-8 !text-[0.8rem]" :title="lender.status === 'Applied' ? 'Applied' : 'Apply'" />
                </div>
            </div>
        </div>
        <div v-if="show" class="p-10 w-[90%] lg:w-[25%] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
           border-2 border-[#ececec] rounded-lg bg-[#fff] z-[20]">
            <h2 class="font-bold text-[1.3rem] text-center">Thank you for your interest.</h2>
            <h4 class="font-semibold text-[1rem] text-center mt-8">Our representative will contact you within 24 hours.</h4>
            <custom-button @click="show = false" class="mt-8 mx-auto w-full lg:max-w-fit lg:ml-auto py-2 px-8 !text-[0.8rem]" title="Okay" />
          </div>
    </div>
</template>

<script>
import Cookies from "js-cookie";
import axios from "axios";
import { base_url } from "~/data/endpoints";

definePageMeta({
  layout: 'dashboard'
})

export default{
  data(){
    return{
      lenders: [
        {name: 'Bajaj Finserv', status: 'Application Incomplete', roi: "18-22% PA", pf: "Upto 2%", loan_amount: "Upto 50 Lakh", date: "Not Applied", image: '/images/logos/bajaj-finserv.png'},
        {name: 'Lending Kart', status: 'Application Incomplete', roi: "20-27% PA", pf: "Upto 2-2.5%", loan_amount: "Upto 1 Crore", date: "Not Applied", image: '/images/logos/lending-kart.png'},
        {name: 'IIFL Finance', status: 'Application Incomplete', roi: "20-35% PA", pf: "Upto 2-6%", loan_amount: "Upto 30 Lakh", date: "Not Applied", image: '/images/logos/iifl-finance.png'},
        {name: 'Piramal Finance', status: 'Application Incomplete', roi: "17-20% PA", pf: "Upto 2%", loan_amount: "Upto 20 Lakh", date: "Not Applied", image: '/images/logos/piramal-finance.png'},
        {name: 'Chola Finance', status: 'Application Incomplete', roi: "20-22% PA", pf: "Upto 2%", loan_amount: "Upto 50 Lakh", date: "Not Applied", image: '/images/logos/chola-finance.png'},
        {name: 'Godrej Capital', status: 'Application Incomplete', roi: "20-22% PA", pf: "Upto 2-2.5%%", loan_amount: "Upto 30 Lakh", date: "Not Applied", image: '/images/logos/godrej-capital.png'},
      ],
      show: false,
      sending: -1
    }
  },
  methods: {
    parseData(){
      const lenders = JSON.stringify(this.lenders);
      Cookies.set("lenders", lenders);
    },
    unparseData(){
      if(Cookies.get("lenders")){
        this.lenders = JSON.parse(Cookies.get("lenders"));
      }
    },
    async apply(index){
      const applied_date = this.formatDate(new Date())
      await this.sendData(this.lenders[index].name, applied_date, index)
      this.lenders[index].status = 'Applied';
      this.lenders[index].date = applied_date;
      this.parseData();
      this.unparseData();
      this.show = true;
    },
    formatDate(date){
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDate();

      return `${day}-${month < 10 ? '0' + month : month}-${year}`
    },
    async sendData(lender, date, index){
        this.sending = index;
        try{
          const token = Cookies.get("token");
          const res = await axios.put(`${base_url}/update-mis`, {
            userId: this.login.user_id,
            loan: {
              lender,
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
  computed: {
    login(){
      return loginState().value;
    }
  },
  mounted(){
    this.unparseData();
  }
}
</script>