import router from '@/router';
import createId from '@/lib/createId.ts'
const tagListModel: TagListModel = {
    data: [],

    fetch() {
        this.data = JSON.parse(window.localStorage.getItem('tagList') || '[]');
        return this.data;
    },
    createTag(name) {
        const names = this.data.map(item => item.name);
        if (names.indexOf(name) >= 0) {
            return 'duplicate';
        } else {
            const id = createId().toString();
            this.data.push({id, name});
            this.save();
            return 'success';
        }
    },
    update(id: string, name: string) {
        const idList = this.data.map(item => item.id);
        if (idList.indexOf(id) >= 0) {
            const names = this.data.map(item => item.name);
            if (names.indexOf(name) >= 0) {
                return 'duplicate';
            } else {
                const item = this.data.filter(item => item.id === id)[0];
                item.name = name;
                this.save();
                return 'success';
            }
        } else {
            return 'not found';
        }
    },
    remove(id: string) {
        let index = -1;
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].id === id) {
                index = i;
                break;
            }
        }
        this.data.splice(index, 1);
        this.save()
        router.replace('/labels')
        return true;
    },
    save() {
        window.localStorage.setItem('tagList', JSON.stringify(this.data));
    }
};

export default tagListModel;