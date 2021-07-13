<template>
    <Layout>
        <Tabs :data-source="types" :value.sync="type" class-prefix="type"/>
        <Tabs :data-source="intervals" :value.sync="interval" class-prefix="interval"/>
        <ul>
            <li v-for="(group,index) in result" :key="index">
                <h3 class="title">{{beautify(group.title)}}</h3>
                <ul>
                    <li class="record" v-for="item in group.item" :key="item.id">
                        <span>{{tagString(item.tags)}}</span>
                        <span class="notes">{{item.notes}}</span>
                        <span>￥{{item.amount}}</span>
                    </li>
                </ul>
            </li>
        </ul>
    </Layout>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Tabs from '@/components/Tabs.vue';
    import intervalList from '@/constants/intervalList';
    import recordTypeList from '@/constants/recordTypeList';
    import dayjs from 'dayjs'
    import clone from '@/lib/clone';
    @Component({
        components: {Tabs,}
    })
    export default class statistics extends Vue {
        type = '-';
        interval = 'day';
        intervals = intervalList;
        types = recordTypeList;
        // eslint-disable-next-line no-undef
        tagString(tags:Tag[]){
            if(tags){
                return tags.length === 0 ? '无': tags.join(',')
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
            }else{
                return day.format('YYYY年-M月-D日')
            }
        }
        get recordList() {
            // eslint-disable-next-line no-undef
            return (this.$store.state as RootState).recordList;
        }

        get result() {
            const {recordList} = this;
            // eslint-disable-next-line no-undef
            // const hashTableValue:{title:string,item:RecordItem[]}[]
            const n = clone(recordList).sort((a,b)=> dayjs(b.createAt).valueOf() - dayjs(a.createAt).valueOf());
            console.log(n)
            return []
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
</style>