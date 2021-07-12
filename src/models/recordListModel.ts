import clone from '@/lib/clone';

const recordListModel = {
    data:[] as RecordItem[],
    fetch(){
        this.data =  JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[]
        return this.data
    },
    create(record:RecordItem){
        const records:RecordItem = clone(record)
        records.createAt = new Date()
        this.data.push(records)
        this.save()
    },
    save(){
        window.localStorage.setItem('recordList',JSON.stringify(this.data))
    }
}

export default recordListModel