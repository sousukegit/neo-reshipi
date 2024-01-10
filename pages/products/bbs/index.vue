<template>
    <TheContainer>
        <AppH1>インスタストーリー機能の掲示板</AppH1>
        <div 
        class="my-8 grid border-separate grid-cols-1 gap-4 divide-y border-2">
            <!-- <div v-if="pending">読み込み中・・・</div>
            <div v-else-if="error">エラーが発生しました。再度お試しください</div>
            <div v-else-if="!data?.posts||!data.posts.length">投稿がありません</div>
            <div v-else v-for="{post,createAt} in data?.posts"
            class="whitespace-pre-wrap break-words p-2">
                <div>{{ 
                // 日本時間に変換
                new Date(createAt).toLocaleString("ja-JP",
                {timeZone:"Asia/Tokyo"},)            
                    }}</div>
                <div>{{ post }}</div>
            </div> -->
        </div>
        <div class="fixed bottom-8">
            <ButtonAdd :on-click="showModal">+</ButtonAdd>
        </div>
    
        <Teleport v-if="doesShowModal" to="#the_container">
            <div  v-if="doesShowModal"
                @click="(event)=>{
                    //子要素以外をクリックしたらモーダルウィンドウを閉じる
                    if(event.target === event.currentTarget){
                        doesShowModal = false;
                    }
                }"
                class="fixed inset-0 h-screen w-screen items-center justify-center
                bg-coffee bg-opacity-50 py-8 px-2 dark:bg-cream dark:bg-opacity-30"
                > 
                
                 <button
                class="absolute top-0 right-0 m-6 text-5xl font-bold text-coffee hover:opacity-70 dark:text-cream"
                @click="doesShowModal = false"
                >×
                </button>
                <div
                    class="container mx-auto w-full overflow-auto rounded-md p-4 text-coffee bg-cream dark:bg-coffee dark:text-cream"
                >
                    <AppH2>投稿する</AppH2>
                    <InputTextarea v-model="newPost"></InputTextarea>
                    <ButtonPrimary :on-click="write">投稿する</ButtonPrimary>
                </div>       
            </div>
        </Teleport>
    </TheContainer>
    
    </template>
    <script setup lang="ts">
    //掲示板の内容を初期表示時に取得
    
    //useFetchはcloudfront経由の処理ではないため、リクエストヘッダにrefferがついていない
    //そのためAPIのリクエスト時は環境変数からrefferからuseRuntimeConfig関数でもってくる
    const config = useRuntimeConfig();
    const {data, pending, error ,refresh} = 
        useFetch("/api/listPost",{
            headers:{
                referer:config.referer ?? "",
            }
        });
    //書き込みモーダルウィンドウの表示状態を管理
    const doesShowModal = ref(false);
    const showModal = () => {
        doesShowModal.value = true;
    };
    
    //新しく書き込む内容を管理
    const newPost = ref("");
    const write = async () => {
     //書き込みがない場合は何もしない   
        if(!newPost.value){
            return;
        }
    
    //書き込み処理を行う
    //キャッシュや再取得は必要ないので$fetchを使う
    await $fetch("/api/writePost",{
        method:"POST",
        body:JSON.stringify(
            {newPost:newPost.value}
        )
    });
    //書き込みを終えたらフォームを空にする
    newPost.value = ""
    //投稿一覧を更新する
    refresh();
    //モーダルウィンドウを閉じる
    doesShowModal.value = false;
    };
    
    </script>