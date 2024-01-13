<template>
    <TheContainer >
      <AppH1>プロフィール</AppH1>

      <!-- 自己紹介セクション -->
      <AppH2>自己紹介</AppH2>
      <div class="container grid grid-cols-1 sm:grid-cols-2">
        <div class="mx-auto">
          <AppIcon pic-src="/img/icon.jpg"></AppIcon>
          <div class="flex justify-center gap-3 mt-4 mb-2">
            <BrandIconMini link="https://github.com/sousukegit"><font-awesome-icon :icon="['fab', 'github']" alt="GitHab"/></BrandIconMini>
            <BrandIconMini link="https://twitter.com/sousuke_tec"><font-awesome-icon :icon="['fab', 'twitter']" alt="Twitter"/></BrandIconMini>
            <BrandIconMini link="https://sousuke-neosoul.com/"><font-awesome-icon :icon="['far', 'pen-to-square']"  alt="個人ブログ"/></BrandIconMini>
          </div>
        </div>        
        <div>
          <AppH3>私について</AppH3>
          <div>愛媛県出身愛媛在住の30歳。<br><br>
            趣味の植物ブログ運営がきっかけで、28歳時に地元の開発チームに参加してWEB制作・システム開発を開始。<br><br>
            2023年より情報システム部へ社内転職し、業務系システム開発を行う。<br><br>
            今まで一番大きなプロジェクトは工場改善システムで、要件定義から設計・開発、リリースまでメインで担当した。          
          </div>
        </div>
      </div>  
        <!-- スキルスタックセクション -->
      <AppH2>スキルスタック</AppH2>  
      <p >メインで以下のプログラミング言語を取り扱ってきました。</p>

      <!-- フロントエンド -->
      <SkillArea>
        <BrandIcon> <font-awesome-icon :icon="['fab', 'js']" /></BrandIcon>
        <div>
          <div class="flex justify-center sm:block">
            <AppH3>Javascript・Typescript</AppH3>
          </div>                
                <div>
                  <div class="flex flex-wrap justify-center sm:justify-start gap-3 lg:w-auto lg:justify-start mt-6 mb-8">
                      <ProfileBadge>ウェブサイト製作</ProfileBadge>
                      <ProfileBadge>フロントエンド開発</ProfileBadge>
                  </div>
                  <p>モダンな技術のフロントエンド開発が可能です。</p>
                  <p>社内WEBアプリのフロントエンド開発をベンダーとGithabで共同開発を行いました。</p><br>
                  <p>フレームワークはVUE3・Nuxt3を用いた開発ができます。</p><br>
                </div>
        </div>
      </SkillArea>   
      <!-- バックエンド -->
      <SkillArea>
        <BrandIcon> <font-awesome-icon :icon="['fab', 'java']" /></BrandIcon>
        <div>
          <div class="flex justify-center sm:block">
            <AppH3>Java</AppH3>
          </div>                
                <div>
                  <div class="flex flex-wrap justify-center sm:justify-start gap-3 lg:w-auto lg:justify-start mt-6 mb-8">
                      <ProfileBadge>バックエンド開発</ProfileBadge>
                  </div>
                  <p>現職は主にJavaで業務系Webシステムを開発。</p><br>
                  <p>業務ロジックに合わせたクラス作成、入力制御や排他制御など開発できます。</p><br>
                </div>
        </div>
      </SkillArea>
      <!-- SQL -->
      <SkillArea>
        <BrandIcon> <font-awesome-icon :icon="['fas', 'database']" /></BrandIcon>
        <div>
          <div class="flex justify-center sm:block">
            <AppH3>データベース</AppH3>
          </div>                
                <div>
                  <div class="flex flex-wrap justify-center sm:justify-start gap-3 lg:w-auto lg:justify-start mt-6 mb-8">
                      <ProfileBadge>システム運用</ProfileBadge>
                  </div>
                  <p>基礎的なDB操作・設計が可能です。</p>
                  <p>DB設計・夜間バッチのストアド開発・マスタ管理・SQLチューニング等幅広く行ってきました。</p><br>
                  <p>MySQL・Oracle・Postgresの言語が扱えます。</p><br>
                </div>
        </div>
      </SkillArea>
      <div class="border my-10">
        <div class="flex justify-center">
          <AppH3>その他経験のあるスキル</AppH3>
        </div>
        <div class="grid ">
          <font-awesome-icon :icon="['fab', 'aws']" />
          <font-awesome-icon :icon="['fab', 'wordpress']" />
          <font-awesome-icon :icon="['fab', 'php']" />
          <!-- レイルズとかTailwindcssとかのロゴ -->
        </div>
      </div>
     
    </TheContainer>

</template>

<script setup lang="ts">




</script>