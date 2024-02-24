<template>
    <TheContainer >
      <AppH1>レシピアプリ</AppH1>
      <div class="flex justify-between">
        <AppH2>作成したレシピ</AppH2>

      </div>
      
      <AppUI>
        <li v-for="link in links" :key="link.url">
          <AppLink :href="link.url">{{ link.text }}</AppLink>
        </li>
      </AppUI>
      <ButtonAdd :on-click="() => goWrite()">+</ButtonAdd>
    </TheContainer>
    

</template>

<script setup lang="ts">

//レシピ一覧リンク。初期値は空の配列
//mountedでIndexedDBからすべてのレシピ名・IDを操作
//下記変数にpushする
const links = ref<{
  url:string;
  text:string;
}[]
>([]);

//テーブル名とレシピ名
const dbName ="recipe-memo"
const tableName = "recipe"

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
   
    //DB内のレコードを一件ずつ巡回するためのカーソルをリクエスト
    const cursorRequest = table.openCursor();

    //カーソルの取得成功ごとに発火するイベント
    //カーソルをcontinue()で前進させた場合にも発火
    cursorRequest.onsuccess = (event) =>{
      const cursor = (event.target as IDBRequest).result;

      if(!cursor) return;

      //現在のカーソル位置のレコードを取得してレシピのリンク一覧に追加
      const record = cursor.value;
      links.value.push({
          //idからレシピ詳細ページのURLを作成
          //詳細ページはpages/products/recipe_memo/[id]/index.vueの動的ルート

          url:`/products/recipe_memo/${record.id}`,
          //url:'/products/recipe_memo/'+ record.id,
          //レシピ名
          text:record.name,
          
      })
      //次のカーソルに移動　（cursorRequest.onsuccessが呼ばれる）
      cursor.continue();

    }
  }
  //indecedDB初回
  openRequest.onupgradeneeded = (event) =>{
    const db =(event.target as IDBRequest).result;
    db.createObjectStore(tableName,{keyPath:"id"})
  }

})

const goWrite = () =>{
  navigateTo("/products/recipe_memo/write")
}

</script>