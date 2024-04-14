<template>
    <div class="w-full pt-10 lg:pt-20 pb-10 lg:pb-20">
        <div class="container flex flex-col lg:flex-row gap-10">
            <div class="lg:w-1/2 items-center bg-[#BFE0FF]">
                <vue3-lottie class="w-full" animationLink="./animations/how-it-works.json" />
            </div>
            <div class="lg:w-1/2 h-full flex flex-col justify-center my-auto">
                <h4 class="font-medium text-[1.5rem]">How it works?</h4>
                <h1 class="font-semibold text-[2.2rem] text-primary">Start Your Credit Approval</h1>

                <div class="mt-16 flex items-center gap-6">
                    <div class="h-[4rem] w-[4rem] shrink-0 rounded-full bg-primary flex justify-center items-center">
                        <icons-search class="max-w-[3rem]" />
                    </div>
                    <div class="flex flex-col gap-4">
                        <h6 class="text-primary font-medium text-[1.6rem]">Choose from our offers</h6>
                        <p class="font-light text-[1rem]">Select from our wide range of products and offerings that best suites your purpose.</p>
                    </div>
                </div>

                <div class="mt-10 flex items-center gap-6">
                    <div class="h-[4rem] w-[4rem] shrink-0 rounded-full bg-primary flex justify-center items-center">
                        <icons-application class="max-w-[2.5rem]" />
                    </div>
                    <div class="flex flex-col gap-4">
                        <h6 class="text-primary font-medium text-[1.6rem]">Quick Application</h6>
                        <p class="font-light text-[1rem]">Make your application for an offering and get verified by our team with a seamless experience.</p>
                    </div>
                </div>

                <div class="mt-10 flex items-center gap-6">
                    <div class="h-[4rem] w-[4rem] shrink-0 rounded-full bg-primary flex justify-center items-center">
                        <icons-funded class="max-w-[2.5rem]" />
                    </div>
                    <div class="flex flex-col gap-4">
                        <h6 class="text-primary font-medium text-[1.6rem]">Get Funded</h6>
                        <p class="font-light text-[1rem]">As soon as your application gets approved, you will receive the funds in no time.</p>
                    </div>
                </div>
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