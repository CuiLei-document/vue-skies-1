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
    createTag:(name:string) => 'success' | 'duplicate';
    update:(id:string,name:string) => 'success' | 'not found' | 'duplicate';
    remove:(id:string) => boolean
    save:()=>void;
}
type Tag = {
    id:string;
    name:string;
}