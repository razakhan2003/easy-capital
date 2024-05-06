<template>
    <nuxt-link :to="target" class="group cursor-pointer w-full rounded-md py-6 flex flex-col items-between h-full gap-6">
        <div class="h-[5rem] w-[5rem] bg-primary rounded-full flex justify-center items-center">
            <img class="max-w-[3rem] invert-[100%] duration-[500ms]" :src="icon" alt="">
        </div>
        <h2 class="text-[1.2rem] font-semibold">{{ title }}</h2>
        <p class="text-[1rem] font-light">{{  description }}</p>
        <custom-button class="mt-auto mr-auto text-[1rem]" v-if="apply" title="Apply Now" />
    </nuxt-link>
</template>

<script>
export default{
    props: ['title', 'description', 'icon', 'target', 'apply'],
    emits: ['submit']
}
</script>