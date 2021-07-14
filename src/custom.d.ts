type RecordItem = {
    tags: Tag[];
    notes:string;
    type:string;
    amount:number;
    createAt?:string;
}
type RootState = {
    recordList:RecordItem[];
    tagList: Tag[];
    createRecordError:Error | null
    createTagError:Error | null
    currentTag?:Tag
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