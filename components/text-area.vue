<template>
    <div class="flex flex-col text-base">
        <label class="pl-1">{{ label }}</label>
        <textarea
            ref="input"
            class="font-light rounded-3xl duration-200 bg-[#EDF2F7] appearance-none border-2 border-[#fff] w-full py-2 px-4 text-gray-700 leading-tight outline-none focus:border-primary"
            :value="modelValue"
            :placeholder="placeholder"
            :rows="rows"
            :cols="cols"
            :required="required"
            @input="$emit('update:modelValue', $event.target.value)"
        />
    </div>
</template>

<script>
export default{
    name: 'TextArea',
    props: {
        modelValue: {
            type: String,
            default: ''
        },
        label:{
            type: String,
            default: ''
        },
        placeholder:{
            type: String,
            default: ''
        },
        rows:{
            type: Number,
            default: 4
        },
        cols: {
            type: Number,
            default: 6
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