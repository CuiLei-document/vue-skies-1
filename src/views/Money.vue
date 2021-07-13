<template>
    <Layout class-prefix="layout">
        <NumberPad @update:value="onUpNumberPad" @submit="submitRecord"/>
        <Tabs :data-source="recordTypeList" :value.sync="record.type"/>
        <div class="from-wrapper">
            <FromInput name="备注" placeholder="请输入备注" @update:value="onUpFromInput"/>
        </div>
        <Tags/>
    </Layout>
</template>

<script lang='ts'>

    import Vue from 'vue'
    import NumberPad from '@/components/Moneys/NumberPad.vue';
    import Types from '@/components/Moneys/Types.vue';
    import FromInput from '@/components/Moneys/FromInput.vue';
    import Tags from '@/components/Moneys/Tags.vue';
    import {Component, Watch} from 'vue-property-decorator';
    import Tabs from '@/components/Tabs.vue';
    import recordTypeList from '@/constants/recordTypeList';


    @Component({components:{Tabs, Tags, FromInput, Types, NumberPad}})
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
        onUpTag(value:string[]){
            this.record.tags = value
        }
        onUpNumberPad(value:string){
            this.record.amount = parseFloat(value)
        }
        submitRecord(){
            this.$store.commit('createRecord',this.record)
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