<template>
    <div class="w-full lg:h-[90vh]">
        <div class="container lg:h-full flex flex-col-reverse lg:flex-row gap-10">
            <div class="flex flex-col h-full lg:w-1/2 justify-center">
                <h1 class="font-bold text-[3rem]">Empower Your Dreams</h1>
                <h1 class="font-bold text-[3rem]">With Our Support</h1>
                <p class="font-light text-[1.1rem] mt-8">
                    Your trusted partner for hassle-free loans. With transparent processes and quick approvals, we empower your financial journey. Simplify borrowing with Easy Capital today.
                </p>
                <custom-button class="max-w-fit mt-10" title="Get Started" />
            </div>
            <div class="h-full lg:w-1/2 items-center">
                <vue3-lottie class="w-full" animationLink="./animations/homepage-animation.json" />
            </div>
        </div>
    </div>
</template>

<script>
import { Vue3Lottie } from 'vue3-lottie'
export default{
    components: {Vue3Lottie}
}
</script>