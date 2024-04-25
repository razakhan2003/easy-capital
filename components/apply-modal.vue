<template>
    <div v-if="popup.show" class="fixed z-[40] w-[90%] lg:w-1/3 flex flex-col bg-[#fff] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-[1px] border-[#DBDBDB] rounded-lg p-10">
        <div class="flex justify-between items-center mb-4">
            <!-- <custom-button @click="doNotDisturb" v-if="!dnd" title="&#128683; Do Not Disturb" /> -->
            <span @click="popup.show = false" class="ml-auto font-bold text-primary text-[1rem] cursor-pointer">&#x2715;</span>
        </div>
        <h3 class="text-primary text-[2rem] font-semibold mb-6">Apply Today!</h3>
        <div v-if="step === 0" class="flex flex-col gap-6">
            <text-input v-model="name" placeholder="Enter your Name" label="Name" />
            <text-input v-model="phone" type="number" placeholder="Enter your Phone Number" label="Phone" />
            <custom-button @click="step = 1" class="max-w-fit ml-auto" title="NEXT" />
        </div>
        <div v-if="step === 1" class="flex flex-col gap-6">
            <text-input v-model="purpose" placeholder="Enter your purpose" label="Purpose of Loan" />
            <text-input v-model="amount" type="number" placeholder="Enter your amount" label="Loan Amount" />
            <text-input v-model="pan" placeholder="Enter your PAN" label="PAN" />
            <div class="flex gap-4 justify-end">
                <custom-button @click="step = 0" type="secondary" class="max-w-fit" title="BACK" />
                <custom-button class="max-w-fit" title="SUBMIT" />
            </div>
            
        </div>
    </div>
</template>

<script>
import Cookies from "js-cookie";

export default{
    data(){
        return{
            step: 0,
            name: '',
            phone: null,
            purpose: '',
            amount: null,
            pan: '',
            dnd: false
        }
    },
    computed: {
        popup(){
            return popupState().value;
        }
    },
    methods: {
        showPopup(){
            this.popup.show = true;

            // if(Cookies.get("dnd")){
            //     this.popup.show = false;
            //     setTimeout(this.showPopup, 30000);
            //     return;
            // }

            // if(!this.popup.show){
            //     this.popup.show = true;
            //     setTimeout(this.showPopup, 30000);
            //     return;
            // }
            
            
        },
        doNotDisturb(){
            this.dnd = true;
            Cookies.set("dnd", 1)
        },
        close(){
            this.step = 0;
            this.name = "";
            this.phone = null;
            this.purpose = "";
            this.amount = null;
            this.pan = "";
            this.popup.show = false;
        }
    },
    mounted(){
       // setTimeout(this.showPopup, 30000);
    }
}
</script>