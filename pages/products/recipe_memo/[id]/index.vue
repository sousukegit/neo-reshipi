<template>
    <TheContainer>
        <AppH1>{{ record ? `${record.name}のページ`: "読み込み中"}}</AppH1>
        <div class="text-right"> 
            <ButtonPrimary :on-click="goBack">アプリTOPに戻る</ButtonPrimary>
        </div> 
        <AppH2>材料</AppH2>
        
        <div v-for="(item,index) in record?.items">
            <div :key="index">
                {{ item.name }}{{ item.amount }}{{ item.unit }}
            </div>
        </div>
        <AppH2>作り方</AppH2>
        <div class="whitespace-pre-wrap">
            {{ record?.howToCook }}
        </div>

    </TheContainer>
</template>
<script setup lang="ts">
import { type RecipeEntity } from "~~/types/entities";

//パラメーターからidを取得
const route = useRoute()
const id = route.params.id 
console.log(id)

//DB名とテーブル名を宣言
const dbName = "recipe-memo"
const tableName = "recipe"

//レコードが入るrefオブジェクトを宣言
//onmountedの前なのでnullを型に入れる、初期値もnull
const record = ref<RecipeEntity|null>(null);

onMounted(()=>{
  const openRequest = indexedDB.open(dbName)

  openRequest.onerror= (event) =>{
     alert('しっぱい');
  }

  openRequest.onsuccess= (event) =>{
    
    //コールバック関数からindexDBのインスタンスを作成
    const db = (event.target as IDBRequest).result;
    //閲覧のみなのでreadonlyトランザクションを開始する
     const transaction = db.transaction(tableName,"readonly");    
     const table = transaction.objectStore(tableName) as IDBObjectStore;
     //キーに対してvalueを持ってくる
     const request = table.get(id);
    
    request.onerror = (event) => {
    // エラー処理!
    alert('しっぱい');
    };
    request.onsuccess = (event) => {
    // request.result に対して行う処理!
    record.value = (event.target as IDBRequest).result;

    //レコードがない場合
    if(!record.value){
        alert('レシピが見つかりません。アプリのぺージに戻ります');
        navigateTo('/products/recipe_memo');
    }
    };
　}
})
//アプリのトップに戻る関数
const goBack = () => {
navigateTo("/products/recipe_memo");
}

const deleteRechipe = () =>{
   //削除して元ページへ移動

    goBack()

}

const updateRechipe = () =>{
 //更新処理ページへ遷移
}

</script>