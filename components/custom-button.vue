<template>
    <button :type="type" ref="button" 
        class="px-4 py-2 text-[0.9rem] rounded-md duration-500"
        :class="type == 'primary' ? 'bg-primary border-[1px] border-primary text-[#fff] font-medium hover:bg-opacity-90' : 'bg-[#fff] border-[1px] border-primary text-primary hover:bg-primary hover:text-[#fff]'"
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
        }
    }
}
</script>