<template>
       
    <div class="field is-horizontal ">
        <div class="field-label  is-normal" style="margin: 0;" >
            <label class="label has-text-grey has-text-left" style="width:170px" > <span class="subtitle is-6">{{ props.labelInputText }}</span>   </label>
        </div>.....................
        <div class="field-body" >
            <div class="field">
                <p class="control is-expanded">
                    <input :disabled="props.is_disabled" :class="['input',props.inputTextColor,props.inputTextWeight]" type="text has-text-dark" :value="props.valueInputText" v-if="props.is_disabled==true">
                    <input class="input" type="text has-text-dark" v-model="model" v-else>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineModel, defineProps } from 'vue';
const model = defineModel()
const props = defineProps(['labelInputText','valueInputText','is_disabled','inputTextColor','inputTextWeight'])

</script>

