<template>
    <TheContainer >
      <AppH1>レシピアプリ</AppH1>

      
      
  
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
const dbName ="recipe-name"
const tableName = "recipe"

onMounted(()=>{

})

</script>