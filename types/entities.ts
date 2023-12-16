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