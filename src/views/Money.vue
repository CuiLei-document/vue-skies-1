<template>
    <Layout class-prefix="layout">
        <NumberPad2 @update:value="onUpNumberPad" :value="record.amount"/>

        <Tags @update:value="onUpTag"/>
        <Types :type.sync="record.type"/>
        <div class="from-wrapper">
            <FromInput2 name="备注" :value.sync="record.notes" placeholder="请输入备注"/>
        </div>
        <div class="submit">
            <Button @click="submitRecord">完成</Button>
        </div>
    </Layout>
</template>

<script lang='ts'>

    import Vue from 'vue'
    import NumberPad2 from '@/components/Moneys/NumberPad2.vue';
    import FromInput2 from '@/components/Moneys/FromInput2.vue';
    import Tags from '@/components/Moneys/Tags.vue';
    import {Component, Watch} from 'vue-property-decorator';
    import Tabs from '@/components/Tabs.vue';
    import recordTypeList from '@/constants/recordTypeList';
    import Types from '@/components/Moneys/Types.vue';
    import Button from '@/components/Button.vue';

    @Component({components:{Types, Tabs, Tags, FromInput2, NumberPad2,Button}})
    export default class Money extends Vue {
        // eslint-disable-next-line no-undef
        get recordList(){
           return this.$store.state.recordList;
        }
        recordTypeList = recordTypeList
        created(){
            this.$store.commit('fetchRecords')
        }
        // eslint-disable-next-line no-undef
        record: RecordItem = {
            tags:[],notes:'',type:'-',amount: 0
        }
        onUpFromInput(value:string){
            this.record.notes = value
        }
        // eslint-disable-next-line no-undef
        onUpTag(value:Tag[]){
            this.record.tags = value
        }
        onUpNumberPad(value:string){
            this.record.amount = parseFloat(value)
        }
        submitRecord(){
            if(this.record.amount === 0 || this.record.tags.length === 0){
                return window.alert('请输入金额,和选择一个标签')
            }
            this.$store.commit('createRecord',this.record)
            if(this.$store.state.createRecordError === null){
                window.alert('创建成功')
                this.record.notes = ''
            }
        }
    }
</script>
<style lang="scss">
    /*.layout-content {*/
    /*    display: flex;*/
    /*    flex-direction: column-reverse;*/
    /*}*/
</style>
<style scoped lang="scss">
    .from-wrapper{
        /*background:white;*/
    }
    .submit{
        text-align:center;
        margin-top:20px;
        > button{
            padding: 8px 16px;
            border:none;
            background: #c2bfbf;
            border-radius: 4px;
            color:red;
        }
    }
</style>