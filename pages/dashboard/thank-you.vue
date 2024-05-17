<template>
    <div class="w-full h-full flex flex-col items-center justify-center">
        <div class="animation-container">
            <vue3-lottie :scale="1.5" width="100%" height="100%" :loop="false" animationLink="/animations/success.json" />
        </div>
        <div class="thank-you-container">
            <h2 class="font-bold text-[1.3rem] text-center">Thank you for your interest.</h2>
            <h4 class="font-semibold text-[1rem] text-center mt-8">Our representative will contact you within 24 hours.</h4>
            <custom-button @click="$router.go(-1)" class="mt-8 mx-auto w-[80%] lg:max-w-fit lg:ml-auto py-2 px-8 !text-[0.8rem]" title="Okay" />
        </div>
    </div>
</template>

<script>
import { Vue3Lottie } from 'vue3-lottie'

definePageMeta({
  layout: 'dashboard'
})

export default{
    components: {Vue3Lottie},
}
</script>

<style scoped>
.animation-container{
    width: 25rem;
    height: 25rem;
    margin-top: -5rem;
}

.thank-you-container{
    display: flex;
    flex-direction: column;
    margin-top: -2rem;
}

@media screen and (max-width: 1023px) {
    .animation-container{
        margin-top: -10rem;
    }
}

</style>