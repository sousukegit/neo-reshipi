// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro:{
    //nuxt3のサーバーサイドをLambdaとしてビルド
    preset:"aws-lambda",
  },
  devtools: { enabled: true },
  typescript:{
    strict:true,
  },
  runtimeConfig:{
    //cloudfront経由のRefereと照合するための環境変数
    referer:process.env.REFERER,
    //開発環境かどうかの判定で開発モードの時は照合をとばす
    //NODE_ENVはNUXT3自信の環境変数
    //npm rub devのときはdevelopment
    isDev:process.env.NODE_ENV === "development"
  },
  css: ["~/assets/css/tailwind.css",'@fortawesome/fontawesome-svg-core/styles.css'],
  plugins: [
    '@/plugins/fontawesome.ts'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

})
