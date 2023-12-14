<template>
    <div>
        <input type="number" v-model="modelValue" class="border-2 ">
    </div>


</template>

<script setup lang="ts">

//親からうけとるPropsを用意
const props = defineProps<{
    modelValue:""|number

}>()
//親で実行するイベントとイベント引数をemitsで用意
const emits = defineEmits<{
    "update:modelValue":[value:""| number]
}>()

//inputタグのmodelValueに入力される値を監視
const modelValue = computed({
    get:()=>  props.modelValue,
    
    set:(value)=> emits('update:modelValue',value)
})

</script>