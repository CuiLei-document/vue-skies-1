import recordListModel from '@/models/recordListModel';
import tagListModel from '@/models/tagListModel';

const store = {
    recordList:()=> recordListModel.fetch(),
    create:(record:RecordItem)=>{
        recordListModel.create(record)
    },
    // taglist
    tagList:tagListModel.fetch(),
    findTag(id:string){
        return this.tagList.filter(tag =>tag.id === id)[0]
    },
    createTag:(name:string)=>{
        const message = tagListModel.createTag(name)
        if(message === 'duplicate'){
            alert('标签名重复了')
        }else  if(message === 'success'){
            alert('创建成功')
        }
    }

}

export default store