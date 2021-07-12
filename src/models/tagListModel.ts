
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
const tagListModel:TagListModel = {
    data: [],
    fetch(){
        this.data = JSON.parse(window.localStorage.getItem('tagList') || '[]')
        return this.data
    },
    createTag(name){
        const names = this.data.map(item => item.name)
        if(names.indexOf(name)>=0){
            return 'duplicate'
        }else{
            this.data.push({id:name,name:name})
            this.save()
            return 'success'
        }
    },
    save(){
        window.localStorage.setItem('tagList',JSON.stringify(this.data))
    }
}

export default tagListModel