import {DynamoDBClient} from "@aws-sdk/client-dynamodb";
import {DynamoDBDocumentClient,PutCommand} from "@aws-sdk/lib-dynamodb"

export default defineEventHandler(async(event)=> {
    //リクエストからボディを取得
 const body =await readBody<{newPost?:string}>(event);
 
 //DynamoDBを操作するクライアントを生成
 const client = DynamoDBDocumentClient.from(
    new DynamoDBClient({})
 );

 //クライアントに書き込み処理を依頼
 //PutCommandクラスのインスタンスとして生成
 await client.send(
    new PutCommand({
        //CDKで生成したDynamoDBのテーブル名を指定
        TableName:"portfolioTable",

        //CDKで作成した通りのカラムを指定
        Item:{
            //パーテーションキーは固定
            id:"bbs",
            //ソートキーには投稿日時のUnixTimeのミリ秒を指定
            createAt:Date.now(),
            //投稿内容はpostカラムに格納
            post:body.newPost,
            //有効期限をUnixタイムで二日後に病態で指定
            ttl:Math.floor(Date.now()/1000)+60 * 60 * 24 *2,            
        },
    })
 );
 return {result:"success"}

})