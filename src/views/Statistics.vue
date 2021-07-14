<template>
    <Layout>
        <Tabs :data-source="types" :value.sync="type" class-prefix="type"/>
        <ul v-if="groupList.length > 0">
            <li v-for="(group,index) in groupList" :key="index">
                <h3 class="title">{{beautify(group.title)}} <span>￥{{group.total}}</span></h3>
                <ul>
                    <li class="record" v-for="item in group.items" :key="item.id">
                        <span>{{tagString(item.tags)}}</span>
                        <span class="notes">{{item.notes}}</span>
                        <span>￥{{item.amount}}</span>
                    </li>
                </ul>
            </li>
        </ul>
        <div v-else class="noResult">
            目前没有相关的记录
        </div>
    </Layout>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Tabs from '@/components/Tabs.vue';
    import recordTypeList from '@/constants/recordTypeList';
    import dayjs from 'dayjs'
    import clone from '@/lib/clone';
    @Component({
        components: {Tabs,}
    })
    export default class statistics extends Vue {
        type = '-';
        types = recordTypeList;
        // eslint-disable-next-line no-undef
        tagString(tags:Tag[]){
            if(tags){
                return tags.length === 0 ? '无': tags.map(item=>item.name).join(',')
            }
        }
        beautify(string:string){
            const day = dayjs(string)
            const now = dayjs()

            if(day.isSame(now,'day')){
                return '今天'
            }else if(day.isSame(now.subtract(1,'day'),'day')){
                return '昨天'
            }else if(day.isSame(now.subtract(2,'day'),'day')){
                return '前天'
            }else if(day.isSame(now,'year')){
                return day.format('M月-D日')
            }else{
                return day.format('YYYY年-M月-D日')
            }
        }
        get recordList() {
            // eslint-disable-next-line no-undef
            return (this.$store.state as RootState).recordList;
        }

        get groupList() {
            const {recordList} = this;
            const newList = clone(recordList).filter(item=> item.type === this.type).sort((a,b)=> dayjs(b.createAt).valueOf() - dayjs(a.createAt).valueOf());
            if(newList.length === 0){return []}
            // eslint-disable-next-line no-undef
            type ResultType ={title:string,total?:number,items:RecordItem[]}[]
            const result:ResultType = [{title:dayjs(newList[0].createAt).format('YYYY-MM-DD'),items:[newList[0]]}]
            for(let i=1; i<newList.length;i++){
                let current = newList[i]
                let last = result[result.length -1]
                if(dayjs(last.title).isSame(dayjs(current.createAt),'day')){
                    last.items.push(current)
                }else{
                    result.push({title:dayjs(current.createAt).format('YYYY-MM-DD'),items:[current]})
                }
            }
            result.map(group => group.total = group.items.reduce((sum,item)=>sum + item.amount,0))
            return result
        }

        beforeCreate() {
            this.$store.commit('fetchRecords');
        }
    }
</script>

<style scoped lang="scss">
    ::v-deep .type-item {
        background: white;

        &.selected {
            background: #c4c4c4;

            &::after {
                display: none;
            }
        }
    }

    ::v-deep .interval-item {
        height: 44px;
    }
    %item{
        padding: 8px 16px;
        line-height: 1.8;
        display:flex;
        justify-content:space-between;
        align-items: center;
    }
    .title {
        @extend %item;
    }
    .record{
        @extend %item;
        background:white;
        box-shadow: 0 2px 3px rgba(0,0,0,0.15)
    }
    .notes{
        margin-right:auto;
        margin-left: 8px;
        color:#999;
    }
    .noResult{
        text-align: center;
        margin-top:20px;
        color:red;
    }
</style>