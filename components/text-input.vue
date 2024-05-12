<template>
    <div class="flex flex-col text-base">
        <label class="pl-1">{{ label }}</label>
        <span v-if="error" class="pl-1 text-[0.8rem] text-[#EE4B2B]">{{ errorMessage }}</span>
        <input
            ref="input"
            :class="error ? 'border-[#EE4B2B] focus:border-[#EE4B2B]' : 'border-[#fff] focus:border-primary'"
            class="font-light rounded-full duration-200 bg-[#EDF2F7] appearance-none border-2 w-full py-2 px-4 text-gray-700 leading-tight outline-none"
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
        },
        error: {
            type: Boolean,
            default: false
        },
        errorMessage: {
            type: String,
            default: ''
        }
    },
    emits: ['update:modelValue']
}
</script>

<style scoped>
</style>