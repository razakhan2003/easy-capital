<template>
    <div @click="" class="group relative cursor-pointer">
        <div class="flex items-center gap-4 lg:gap-2">
            <slot/>
            <span v-if="arrow" class="text-[1.5rem] rotate-[-90deg] group-hover:rotate-[90deg] group-hover:text-primary duration-[200ms]">&#8249;</span>
        </div>
        <div :class="alignment === 'right' ? 'lg:right-0' : ''" class="bg-[#fff] font-medium z-[20] hidden group-hover:block lg:absolute whitespace-nowrap py-1 px-4 lg:border-2 border-[#dcdcdc] rounded-xl text-[0.9rem] text-slate-700">
            <li class="my-3" v-for="item in items" :key="item.name">
                <nuxt-link :to="item.route" @click="$emit('close')">{{ item.name }}</nuxt-link>
            </li>
            <slot name="additional"></slot>
        </div>
    </div>
</template>

<script>
export default{
    name: 'HoveringDropdown',
    emits: ['close'],
    props: {
        items:{
            type: Array,
            default: []
        },
        alignment: {
            type: String,
            default: ''
        },
        arrow: {
            type: Boolean,
            default: true
        }
    }
}
</script>

<style scoped>
li>a{
    transition: border 0.3s;
}

li>a:hover{
    color: #4285f4;
}
</style>