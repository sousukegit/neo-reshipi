<template>
    <div class="grid gap-8">
        <label>
            レシピ名
            <InputText v-model="form.name" ></InputText>
        </label>
        <div v-for="(item,index) in form.items">
            <div>
                <button @click="removeItem(index)">材料削除</button>
            </div>
            <label>材料{{ index +1 }}の名前
            <InputText v-model="item.name"></InputText>
            </label>
            <label>材料{{ index +1 }}の個数
            <InputNum v-model="item.amount"></InputNum>
            </label>
            <label>材料{{ index +1 }}の単位
            <InputText v-model="item.unit"></InputText>
            </label>
            <div>
                <button @click="addItem">材料追加</button>
            </div>


        </div>
        <label>
            調理方法
            <InputTextarea v-model="form.howToCook" ></InputTextarea>
        </label>
    </div>
  


</template>
<script setup lang="ts">

//入力フォームをまとめたコンポーネント
//親-自身-子で受け渡せるコンポーネントを作成

//レシピオブジェクト
interface RecipeModel {
    //料理名
    name:string;
    //材料名
    items:{
        name:string;
        amount:""|number;
        unit:string;        
    }[],
    //調理方法
    howToCook:string,
}
//propsの作成
const props = defineProps<{
    //v-modelで渡せるようmodelvalueを設定
    modelValue:RecipeModel;
    //レシピid
    id:number;
    //レシピの書き込み時にリダイレクト関数
    redirectOnSuccess:string;
}>()

//Emitsの作成
const emits = defineEmits<{
    "update:modelValue":[value:RecipeModel]
}>()
//get,setで親とリアクティブにやりとり
const form = computed({
    get:()=>props.modelValue,
    set:(value)=>emits('update:modelValue',value)
})

//材料を削除する処理
const removeItem = (index:number) => {
 form.value.items.splice(index,1);
}
//追加処理
const addItem =() =>{
 form.value.items.push({
    name:"",
    amount:"",
    unit:"",
 })
}
//登録処理
const submit = () =>{
    console.log(props.modelValue)
}

</script>