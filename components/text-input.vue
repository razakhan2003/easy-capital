<template>
    <div class="flex flex-col text-base">
        <label>{{ label }}</label>
        <input
            ref="input"
            class="font-light rounded-sm duration-200 bg-gray-200 appearance-none border-2 border-gray-200 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-[#fff] focus:border-primary"
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