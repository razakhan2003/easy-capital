<template>
    <div class="sticky top-0 z-[100] bg-[#fff] flex flex-col justify-center h-[5rem] shadow-lg">
        <div  class="px-[16px] lg:px-[2rem] flex justify-between items-center relative">
            <nuxt-link class="flex items-center gap-[0.3rem] font-bold text-[1.7rem]" to="/">
                <img class="max-w-[4rem]" src="/images/easy-capital-logo.png" alt="">
                <span><span class="text-[#0001FD]">Easy</span>Capital</span>
            </nuxt-link>

            <div class="lg:hidden">
                <svg @click="openSidebar" v-if="!show" class="max-w-[2.5rem]" id="Layer_1" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>
                <svg @click="closeSidebar" v-else class="max-w-[2.4rem]" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z"/></svg>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    emits: ['close-sidebar', 'open-sidebar'],
    data(){
        return{
            show: false
        }
    },
    methods: {
        openSidebar(){
            this.show = true;
            this.$emit('open-sidebar')
        },
        closeSidebar(){
            this.show = false;
            this.$emit('close-sidebar')
        }
    }
}
</script>
