<template>
    <TheContainer>
        <AppH1>レシピアプリ</AppH1>
        <div class="text-right"> 
            <ButtonPrimary :on-click="goBack">アプリTOPに戻る</ButtonPrimary>
        </div>
       
        <AppH2>レシピを書く</AppH2>
        <RecipeMemoForm v-model="form" :id="v4()" redirect-on-success="/products/recipe_memo"></RecipeMemoForm>

    </TheContainer>
    
    

</template>

<script setup lang="ts">
import {v4} from "uuid";
import { type RecipeEntity } from "~~/types/entities";

//indexedDBのDB名とテーブル名
const dbName ="recipe-memo";
const tableName = "recipe";

//indexDBはブラウザ側なので、Mount時に初期化させる
onMounted(()=>{
    const openRequest = indexedDB.open(dbName)

    //indexxdDBの初回オープンでは、onupgradeneededイベントが発火する
    //このイベントの中なら、オブジェクトストアを作成したり、
    //DBの構造を変更することができる
    openRequest.onupgradeneeded = (event) =>{
    //コールバック関数からindexDBのインスタンスを作成
    const db = (event.target as IDBRequest).result

    //テーブル名とレコードの識別子となるキーの名前を指定して、
    //新たにテーブル（正確にはオブジェクトストア）を作成する
    db.createObjectStore(tableName,{keyPath:"id"});
    };
});

//レシピの実態であり、入力UIにv-modelで渡すフォームでもある。
//そのため新規登録用フォーム用の初期値を空にする

const form = reactive<RecipeEntity>({
    //レシピ名
    name:"",
    //材料グループ（初期状態は１つ。UI側から任意に増減可能）
    items:[
        {
        //材料名
        name:"",
        //量
        amount:"",
        //単位
        unit:""
        }
    ],
    howToCook:"",
});

//アプリのトップに戻る関数
const goBack = () => {
    navigateTo("/prodect/recipe_memo");
}

</script>