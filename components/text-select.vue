<template>
    <div class="relative flex flex-col text-base">
        <label :class="enlarge ? 'text-[1.3rem] mb-2 font-semibold' : ''" class="pl-1">{{ label }}</label>
        <span v-if="error" class="pl-1 text-[0.8rem] text-[#EE4B2B]">{{ errorMessage }}</span>
        <div class="relative">
            <select 
                ref="input"
                :value="modelValue"
                :required="required"
                @input="$emit('update:modelValue', $event.target.value)"
                :class="error ? 'border-[#EE4B2B] focus:border-[#EE4B2B]' : 'border-[#fff] focus:border-primary'"
                class="border-2 font-light rounded-full duration-200 bg-[#EDF2F7] appearance-none w-full py-2 px-4 text-gray-700 leading-tight outline-none"
            >
                <option v-for="option in options" :key="option.value" :value="option.value">{{ option.name }}</option>
            </select>
            <span class="pointer-events-none absolute text-[1.5rem] -rotate-[90deg] top-1/2 -translate-y-1/2 right-4">&#8249;</span>
        </div>
        
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
        required:{
            type: Boolean,
            default: false
        },
        options: {
            type: Array,
            default: []
        },
        error: {
            type: Boolean,
            default: false
        },
        errorMessage: {
            type: String,
            default: ''
        },
        enlarge: {
            type: Boolean,
            default: false
        }
    },
    emits: ['update:modelValue']
}
</script>

<style scoped>
</style>