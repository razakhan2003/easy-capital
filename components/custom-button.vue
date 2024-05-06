<template>
    <button :type="type" ref="button" 
        class="px-4 py-2 text-[1.2rem] duration-500"
        :class="[type == 'primary' ? 'bg-primary border-[1px] border-primary text-[#fff] font-medium hover:bg-opacity-90' : 'bg-[#fff] border-[1px] border-primary text-primary hover:bg-primary hover:text-[#fff]', rounded ? 'rounded-full' : 'rounded-md']"
        v-html="title"
    >
    </button>
</template>

<script>
export default{
    name: "CustomButton",
    props:{
        title:{
            type: String,
            default: 'Button'
        },
        type:{
            type: String,
            default: 'primary'
        },
        rounded: {
            type: Boolean,
            default: false
        }    
    }
}
</script>