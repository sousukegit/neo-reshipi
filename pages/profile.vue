<template>
    <TheContainer >
      <AppH1>プロフィール</AppH1>

      <!-- 自己紹介セクション -->
      <AppH2>自己紹介</AppH2>
      <div class="container grid grid-cols-1 sm:grid-cols-2">
        <div class="mx-auto">
          <AppIcon pic-src="/img/icon.jpg"></AppIcon>
        </div>        
        <div>
          <AppH3>私について</AppH3>
          <div>愛媛県出身愛媛在住の30歳。<br><br>
            趣味の植物ブログがきっかけで、28歳時に地元の開発チームに参加してWEB制作・システム開発を開始。<br><br>
            2023年より情報システム部へ社内転職し、業務系システム開発を行う。<br><br>
            今まで一番大きなプロジェクトは工場改善システムで、要件定義から設計・開発、リリースまでメインで担当した。          
          </div>
        </div>
      </div>  
        <!-- スキルスタックセクション -->
      <AppH2>スキルスタック</AppH2>    
        <p class="section-paragraph">私は以下のプログラミング言語を取り扱ってきました。
        </p>
      <div class="my-16">
          <div class="w-full border p-16 lg:px-20 lg:py-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">
              <!-- 言語のロゴ -->
              <div class="mb-6 lg:mb-0 self-center">
                <font-awesome-icon :icon="['fas', 'house']" />
                <i class="fa-brands fa-js"></i>
                <i class="fa-brands fa-js"></i>
                <font-awesome-icon :icon="['fab', 'js']" />
                <font-awesome-icon icon="js" />
                <font-awesome-icon :icon="['fab', 'js']" class="text-9xl text-yellow-300"/>
              </div>
              <!-- スキルの説明 -->
              <div class="text-center flex flex-wrap justify-center lg:text-left max-w-3xl">
                  <h3 class="text-3xl  font-semibold self-center mr-2">Javascript</h3>
                  <div class="flex  flex-wrap justify-center gap-3 lg:w-auto lg:justify-start mt-6 mb-8">
                      <div class="badge">ウェブサイト製作</div>
                      <div class="badge">フロントエンド開発</div>
                  </div>                
                  <p class="text-secondary">Javascriptエンジニア。普段はVueを使って開発現場で働いています</p>
              </div>
          </div>
      </div>
            
     

  
    </TheContainer>

</template>

<script setup lang="ts">




</script>