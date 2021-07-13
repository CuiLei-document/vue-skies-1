import recordListModel from '@/models/recordListModel';
import clone from '@/lib/clone';


const recordStore =  {
    recordList: [] as RecordItem[],
    fetchRecords(){
        recordStore.recordList =  JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[]
        return recordStore.recordList
    },
    createRecord(record:RecordItem){
        const records:RecordItem = clone(record)
        records.createAt = new Date().toISOString()
        this.recordList?.push(records)
        this.saveRecords()
    },
    saveRecords(){
        window.localStorage.setItem('recordList',JSON.stringify(this.recordList))
    }
}
recordStore.fetchRecords()
export default recordStore