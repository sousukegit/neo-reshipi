import {DynamoDBClient} from "@aws-sdk/client-dynamodb";
import {DynamoDBDocumentClient,QueryCommand} from "@aws-sdk/lib-dynamodb";
import { BbsEntity } from "~~/types/entities";

export default defineEventHandler(async(event)=> {
    //Dynamodeを操作するクライアントを生成
    const client = DynamoDBDocumentClient.from(
    new DynamoDBClient({})
    );

    //QueryCommandを執行して、結果を取得
    const result = await client.send(
        new QueryCommand({
            TableName:"portfolioTable",

            //パーティションキーの条件式を指定
            KeyConditionExpression:"id = :id",

            //上記の式に渡すパラメーターを指定
            ExpressionAttributeValues:{
                ":id":"bbs",
            },

            //念のため取得できる上限件数を100件に制限
            Limit:100,

            //新しい投稿順に取得したいので、
            //ソートキーの降順で取得する（昇順ならtrue）
            ScanIndexForward:false,
        })
    );

    //result.Itemsに書きこんだ投稿が保存されているので
    //asでBbsEntity型を明示的に記載
        const posts = (result.Items as BbsEntity[]).map((item) =>{
            //フロンドエンドに必要な属性だけ抽出して返す
            return{
                post:item.post,
                createAt:item.createAt,
            };
        });
    //投稿の内容と日時の配列を変えす
    return {posts};

})

