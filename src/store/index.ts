import Vue from 'vue'
import Vuex from 'vuex'
import clone from '@/lib/clone';
import createId from '@/lib/createId';
import router from '@/router';

Vue.use(Vuex)

const store =  new Vuex.Store({
  state: {
    recordList: [],
    tagList: [],
    currentTag: undefined
  } as RootState,
  mutations: {
    // recordList
    fetchRecords(state){
      state.recordList =  JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[]
    },
    createRecord(state,record:RecordItem){
      const records:RecordItem = clone(record)
      records.createAt = new Date()
      state.recordList?.push(records)
      store.commit('saveRecords')
    },
    saveRecords(state){
      window.localStorage.setItem('recordList',JSON.stringify(state.recordList))
    },
    // tagList
    fetchTag(state) {
      state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]');
    },
    setCurrentTag(state,id:string){
      state.currentTag = state.tagList.filter(tag =>tag.id === id)[0]
    },
    createTag(state,name:string){
      const names = state.tagList.map(item => item.name);
      if (names.indexOf(name) >= 0) {
        alert('标签名重复了')
      } else {
        const id = createId().toString();
        state.tagList.push({id, name});
        store.commit('saveTag')
        alert('创建成功')
      }
    },
    updateTag(state,payload:{id:string,name:string}){
      const {id,name} = payload
      const idList = state.tagList.map(item => item.id);
      if (idList.indexOf(id) >= 0) {
        const names = state.tagList.map(item => item.name);
        if (names.indexOf(name) >= 0) {
          window.alert('标签名重复了')
        } else {
          const item = state.tagList.filter(item => item.id === id)[0];
          item.name = name;
          store.commit('saveTag')
        }
      }
    },
    removeTag(state,id:string){
      let index = -1;
      for (let i = 0; i < state.tagList.length; i++) {
        if (state.tagList[i].id === id) {
          index = i;
          break;
        }
      }
      if(index >=0){
        state.tagList.splice(index, 1);
        store.commit('saveTag')
        router.replace('/labels')
      }else{
        window.alert('删除失败')
      }
    },
    saveTag(state) {
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
    }
  },
  actions: {
  },
  modules: {
  }
})
export default store