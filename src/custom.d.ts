type RecordItem = {
    tags: string[];
    notes:string;
    type:string;
    amount:number;
    createAt?:Date;
}
type TagListModel ={
    data:Tag[];
    fetch:()=>Tag[];
    createTag:(name:string) => 'success' | 'duplicate'
    save:()=>void
}
type Tag = {
    id:string;
    name:string;
}