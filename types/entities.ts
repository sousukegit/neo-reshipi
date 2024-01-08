export type RecipeEntity = {
    //料理名
    name:string;
    //材料名
    items:{
        name:string;
        amount:""|number;
        unit:string;        
    }[],
    //調理方法
    howToCook:string,
}
//掲示板入力の型
export type BbsEntity = {
    //Idは固定
    id:"bbs";
    //投稿日時
    createAt:number;
    //投稿内容
    post:string;
    //保持期間
    ttl:number;
}