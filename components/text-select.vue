<template>
    <div class="relative flex flex-col text-base">
        <label class="pl-1">{{ label }}</label>
        <div class="relative">
            <select 
                ref="input"
                :value="modelValue"
                :required="required"
                @input="$emit('update:modelValue', $event.target.value)"
                class="font-light rounded-full duration-200 bg-[#EDF2F7] appearance-none border-2 border-[#fff] w-full py-2 px-4 text-gray-700 leading-tight outline-none focus:border-primary"
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
        }
    },
    emits: ['update:modelValue']
}
</script>

<style scoped>
</style>