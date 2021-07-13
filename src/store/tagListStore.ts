
import createId from '@/lib/createId';
import router from '@/router';

const tagStore = {
    // taglist
    tagList: [] as Tag[],
    fetchTag() {
        this.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]');
        return  this.tagList;
    },
    findTag(id:string){
        return this.tagList.filter(tag =>tag.id === id)[0]
    },
    createTag:(name:string)=>{
        const names = tagStore.tagList.map(item => item.name);
        if (names.indexOf(name) >= 0) {
            alert('标签名重复了')
            return 'duplicate';
        } else {
            const id = createId().toString();
            tagStore.tagList.push({id, name});
            tagStore.saveTag();
            alert('创建成功')
            return 'success';
        }

    },
    updateTag(id:string,name:string){
        const idList = this.tagList.map(item => item.id);
        if (idList.indexOf(id) >= 0) {
            const names = this.tagList.map(item => item.name);
            if (names.indexOf(name) >= 0) {
                return 'duplicate';
            } else {
                const item = this.tagList.filter(item => item.id === id)[0];
                item.name = name;
                this.saveTag();
                return 'success';
            }
        } else {
            return 'not found';
        }
    },
    removeTag(id:string){
        let index = -1;
        for (let i = 0; i < this.tagList.length; i++) {
            if (this.tagList[i].id === id) {
                index = i;
                break;
            }
        }
        this.tagList.splice(index, 1);
        this.saveTag()
        router.replace('/labels')
        return true;

    },
    saveTag() {
        window.localStorage.setItem('tagList', JSON.stringify(this.tagList));
    }
}
tagStore.fetchTag()
export default tagStore