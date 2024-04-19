<template>
     <div class="w-full mb-14 lg:mb-0">
        <div class="container lg:h-full flex flex-col-reverse lg:flex-row gap-10">
            <div class="flex flex-col h-full lg:w-1/2 justify-center">
                <h1 class="font-bold text-[2rem]">Calculate Your EMI</h1>
                <h1 class="font-bold text-[2rem]">With Our EMI Calculator</h1>
                <emi-calculator />
            </div>
            <div class="h-full lg:w-1/2 items-center">
                <vue3-lottie class="w-full" animationLink="./animations/calculator-animation.json" />
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