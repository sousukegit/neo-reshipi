<template>
  
    
    <TheContainer >
      <div :class="mode">
  
    <div class="dark:bg-coffee">

    
  

  <div class="bg-emerald-200 dark:bg-emerald-900 dark:text-white" >sousuek</div>

  <div class="bg-blue-400 dark:bg-blue-700 dark:text-white" >hogehogehgoe</div>
    <form action="">

      <InputText v-model="text" ></InputText>
      <InputNum v-model="num" ></InputNum>
      <InputTextarea v-model="text" ></InputTextarea>
      <div>tekiduto{{ text }}</div>
    </form>

    </div>
    </div>
    </TheContainer>

</template>

<script setup lang="ts">
//ダークかライトか切り替え用のrefを用意
const mode = useCookie("mode",{maxAge:60*60*24*365,})
const switchMode = () =>{
mode.value =mode.value? "" :"dark";

}



</script>