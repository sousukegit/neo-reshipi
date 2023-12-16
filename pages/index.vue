<template>
      <TheContainer >
        <AppJumbotron><h1>私のポートフォリオ</h1></AppJumbotron>
        <div class="grid grid-cols-1 sm:grid-cols-2">
          <div>
            <AppH2>このサイトについて</AppH2>
            <p>このサイトは私のポートフォリオです。</p>
            <p>NuxtとTailwindで作成しています。</p>
          </div>
          <div class="">
            <AppH2>メニュー</AppH2>
            <AppLink href="/profile">プロフィール</AppLink>
            <AppLink href="/products">作品</AppLink>
          </div>

        </div>

    
      </TheContainer>
  
</template>

<script setup lang="ts">




</script>