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
                  <h3 class="font-semibold text-[0.9rem]">EC45556677</h3>
                </div>
                <div class="col-span-1 p-6 border-r-[1px]">
                  <h4 class="font-semibold text-[1.1rem] text-[#808080]">Applied On</h4>
                  <h3 class="font-semibold text-[0.9rem]">Not Applied</h3>
                </div>
                <div class="col-span-1 lg:col-span-2 p-6 border-r-[1px]">
                  <h4 class="font-semibold text-[1.1rem] text-[#808080]">Current Status</h4>
                  <h3 class="font-semibold text-[0.9rem]">{{ lender.status }}</h3>
                </div>
            </div>
            <div class="grid grid-cols-3 md:grid-cols-4 gap-6 mt-6 items-center">
                <h4 class="font-semibold text-[0.8rem] text-[#808080]">Instant Money Transfer</h4>
                <h4 class="font-semibold text-[0.8rem] text-[#808080]">100% Online Process</h4>
                <h4 class="font-semibold text-[0.8rem] text-[#808080]">Low Interest Rates</h4>
                <custom-button class="max-w-fit lg:ml-auto py-2 px-8 !text-[0.8rem]" title="Continue" />
            </div>
        </div>
        
    </div>
</template>

<script>
definePageMeta({
  layout: 'dashboard'
})

export default{
  data(){
    return{
      lenders: [
        {name: 'Bajaj Finserv', status: 'Application Incomplete', image: '/images/logos/bajaj-finserv.png'},
        {name: 'Lending Kart', status: 'Application Incomplete', image: '/images/logos/lending-kart.png'},
        {name: 'IIFL Finance', status: 'Application Incomplete', image: '/images/logos/iifl-finance.png'},
        {name: 'Piramal Finance', status: 'Application Incomplete', image: '/images/logos/piramal-finance.png'},
        {name: 'Chola Finance', status: 'Application Incomplete', image: '/images/logos/chola-finance.png'},
      ]
    }
  }
}
</script>