<template>
    <Layout class-prefix="layout">
        {{record}}
        <NumberPad @update:value="onUpNumberPad" @submit="submitRecord"/>
        <Types :type.sync="record.type"/>
        <div class="from-wrapper">
            <FromInput name="备注" placeholder="请输入备注" @update:value="onUpFromInput"/>
        </div>
        <Tags :data-source.sync="tags" @update:value="onUpTag"/>
    </Layout>
</template>

<script lang='ts'>

    import Vue from 'vue'
    import NumberPad from '@/components/Moneys/NumberPad.vue';
    import Types from '@/components/Moneys/Types.vue';
    import FromInput from '@/components/Moneys/FromInput.vue';
    import Tags from '@/components/Moneys/Tags.vue';
    import {Component, Watch} from 'vue-property-decorator';
    import recordListModel from '@/models/recordListModel'
    import tagListModel from '@/models/tagListModel';
    tagListModel.fetch()
    @Component({components:{Tags, FromInput, Types, NumberPad}})
    export default class Money extends Vue {
        tags = tagListModel.data
        // eslint-disable-next-line no-undef
        recordList:RecordItem[] = recordListModel.fetch()
        // eslint-disable-next-line no-undef
        record: RecordItem = {
            tags:[],notes:'',type:'-',amount: 0
        }
        onUpFromInput(value:string){
            this.record.notes = value
        }
        onUpTag(value:string[]){
            this.record.tags = value
        }
        onUpNumberPad(value:string){
            this.record.amount = parseFloat(value)
        }
        submitRecord(){
            // eslint-disable-next-line no-undef
            const records:RecordItem = recordListModel.clone(this.record)
            console.log(this.recordList)
            records.createAt = new Date()
            this.recordList.push(records)
        }
        @Watch('recordList')
        onRecordListChanged(){
            recordListModel.save(this.recordList)
        }
    }
</script>
<style lang="scss">
    .layout-content {
        display: flex;
        flex-direction: column-reverse;
    }
</style>
<style scoped lang="scss">
    .from-wrapper{
        background:white;
    }
</style>