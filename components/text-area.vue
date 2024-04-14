<template>
    <div class="flex flex-col text-base">
        <label>{{ label }}</label>
        <textarea
            ref="input"
            class="font-light rounded-sm duration-200 bg-gray-200 appearance-none border-2 border-gray-200 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-[#fff] focus:border-primary"
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