<template>
    <div class="w-full lg:h-[80vh] mb-14 lg:mb-0">
        <div class="container lg:h-full flex flex-col-reverse lg:flex-row gap-10">
            <div class="flex flex-col h-full lg:w-1/2 justify-center">
                <h1 class="font-bold text-[3rem]">Choose From</h1>
                <h1 class="font-bold text-[3rem]">The Best Of Best</h1>
                <p class="font-light text-[1.1rem] mt-8">
                    We connect you to a variety of trusted lenders, making it easy to find the perfect loan for your needs. Whether you're seeking a personal, business, or home loan, our platform offers multiple options with competitive rates. Compare and choose from our diverse network to find the best fit for your financial goals. Let us help you take the next step with confidence                
                </p>
            </div>
            <div class="h-full lg:w-1/2 items-center">
                <vue3-lottie class="w-full" animationLink="./animations/partners.json" />
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