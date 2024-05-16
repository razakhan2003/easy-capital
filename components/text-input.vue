<template>
    <div class="flex flex-col text-base">
        <label :class="enlarge ? 'text-[1.3rem] mb-2 font-semibold' : ''" class="pl-1">{{ label }}</label>
        <span v-if="error" class="pl-1 text-[0.8rem] text-[#EE4B2B]">{{ errorMessage }}</span>
        <input
            ref="input"
            :class="error ? 'border-[#EE4B2B] focus:border-[#EE4B2B]' : 'border-[#fff] focus:border-primary'"
            class="font-light rounded-full duration-200 bg-[#EDF2F7] appearance-none border-2 w-full py-2 px-4 text-gray-700 leading-tight outline-none"
            :type="type"
            :value="modelValue"
            :placeholder="placeholder"
            :required="required"
            :maxlength="maxLength"
            @input="$emit('update:modelValue', $event.target.value)"
            @keydown="checkDigit($event)"
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
        },
        maxLength: {
            type: String,
            default: ''
        },
        enlarge: {
            type: Boolean,
            default: false
        },
        onlyAlphabets: {
            type: Boolean,
            default: false
        }
    },
    emits: ['update:modelValue'],
    methods: {
        checkDigit(event){
            const key = event.keyCode;

            if(this.type === 'number'){
                if (!((key > 47 && key < 58) || (key > 7 && key < 47) || (key > 95 && key < 105))) {
                    event.preventDefault();
                }

                if(this.maxLength){
                    if(event.target.value.length > parseInt(this.maxLength) - 1 && !(key > 7 && key < 47)){
                        event.preventDefault();
                    }
                }
            }
            
            if(this.onlyAlphabets){
                if(!((key> 64 && key< 91) || (key > 7 && key < 47))){
                    event.preventDefault();
                }
            }
        }
    }
}
</script>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>