<template>
    <div class="flex flex-col text-base">
        <label class="pl-1">{{ label }}</label>
        <input
            ref="input"
            class="font-light rounded-full duration-200 bg-[#EDF2F7] appearance-none border-2 border-[#fff] w-full py-2 px-4 text-gray-700 leading-tight outline-none focus:border-primary"
            :type="type"
            :value="modelValue"
            :placeholder="placeholder"
            :required="required"
            @input="$emit('update:modelValue', $event.target.value)"
        >
    </div>
</template>

<script>
export default{
    name: 'TextInput',
    props: {
        modelValue: {
            type: String,
            default: ''
        },
        label:{
            type: String,
            default: ''
        },
        type:{
            type: String,
            default: 'text'
        },
        placeholder:{
            type: String,
            default: ''
        },
        required:{
            type: Boolean,
            default: false
        }
    },
    emits: ['update:modelValue']
}
</script>

<style scoped>
</style>