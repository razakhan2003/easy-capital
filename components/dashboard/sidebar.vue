<template>
    <div class="flex flex-row h-[calc(100vh-5rem)]">
        <div :class="sidebar ? '-translate-x-0' : '-translate-x-[100%] lg:translate-x-0'" class="absolute lg:relative z-[20] left-0 top-[5rem] lg:top-0 w-2/5 lg:w-1/5 h-[calc(100vh-5rem)] duration-[300ms]">
            <div class="h-full flex flex-col gap-6 px-[16px] lg:px-[2rem] py-6 bg-primary font-medium text-[1.1rem] text-[#fff]">
                <nuxt-link to="/dashboard" @click="$emit('close')" class="cursor-pointer hover:text-[#ececec] duration-[300ms]">Home</nuxt-link>
                <nuxt-link @click="$emit('close')" class="cursor-pointer hover:text-[#ececec] duration-[300ms]">Offers</nuxt-link>
                <nuxt-link to="/dashboard/products" @click="$emit('close')" class="cursor-pointer hover:text-[#ececec] duration-[300ms]">Products</nuxt-link>
                <nuxt-link @click="$emit('close')" class="cursor-pointer hover:text-[#ececec] duration-[300ms]">Support</nuxt-link>
                <nuxt-link @click="logout" class="cursor-pointer hover:text-[#ececec] duration-[300ms]">Logout</nuxt-link>
            </div>
        </div>
       
        <div class="lg:w-4/5 px-[16px] lg:px-[2rem] py-6 overflow-auto">
            <slot />
        </div>
    </div>
</template>

<script>
import Cookies from "js-cookie";

export default{
    props: ['sidebar'],
    emits: ['close'],
    computed: {
        login(){
            return loginState().value;
        }
    },
    methods: {
        logout(){
            Cookies.remove("token");
            this.login.logged_in = false;
            this.login.user_initials = "";
            this.login.user_id = "";
            this.$router.push("/")
        }
    }
}
</script>