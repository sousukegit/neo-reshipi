<template>
    <TheContainer>
        <AppH1>レシピアプリ</AppH1>
        <div class="text-right"> 
            <ButtonPrimary :on-click="goBack">アプリTOPに戻る</ButtonPrimary>
        </div>       
        <AppH2>レシピ更新</AppH2>
        <RecipeMemoForm v-model="form" :id="id" redirect-on-success="`/products/recipe_memo/${id}`"></RecipeMemoForm>
    </TheContainer>
</template>

<script setup lang="ts">
import { type RecipeEntity } from "~~/types/entities";

//子要素に送る初期時を定義
//データ取得後書き換える
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



//パラメーターからidを取得
const route = useRoute()
const id = <string>route.params.id 

//indexedDBのDB名とテーブル名
const dbName ="recipe-memo";
const tableName = "recipe";

//レコードが入るrefオブジェクトを宣言
//onmountedの前なのでnullを型に入れる、初期値もnull
//const record = ref<RecipeEntity|null>(null);

onMounted(()=>{
  const openRequest = indexedDB.open(dbName)

  openRequest.onerror= (event) =>{
     alert('しっぱい');
  }

  openRequest.onsuccess= (event) =>{
    
    //コールバック関数からindexDBのインスタンスを作成
    const db = (event.target as IDBRequest).result;
    //閲覧のみなのでreadonlyトランザクションを開始する
     const transaction = db.transaction(tableName,"readwrite");    
     const table = transaction.objectStore(tableName) as IDBObjectStore;
     //キーに対してvalueを持ってくる
     const request = table.get(id);
    
    request.onerror = (event) => {
    // エラー処理!
    alert('しっぱい');
    };
    request.onsuccess = (event) => {
    //キー取得に取得すると、対応するvalueがかえってくる    
    // value要素にIndexdbのvalueを代入
    const r = (event.target as IDBRequest).result;
    //戻り値を代入
    form.name = r.name
    form.items = r.items
    form.howToCook = r.howToCook

    };
　}
})




//アプリのトップに戻る関数
const goBack = () => {
    navigateTo("/products/recipe_memo");
}

</script>