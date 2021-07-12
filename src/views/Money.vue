<template>
    <Layout class-prefix="layout">
        <NumberPad @update:value="onUpNumberPad" @submit="submitRecord"/>
        <Types :type.sync="record.type"/>
        <FromInput @update:value="onUpFromInput"/>
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

    type Record = {
        tags: string[];
        notes:string;
        type:string;
        amount:number;
        createAt?:Date
    }

    @Component({components:{Tags, FromInput, Types, NumberPad}})
    export default class Money extends Vue {
        tags = ['衣', '食', '住', '行']
        recordList:Record[] = JSON.parse(window.localStorage.getItem('recordList') || '[]')
        record: Record = {
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
            const records:Record = JSON.parse(JSON.stringify(this.record))
            records.createAt = new Date()
            this.recordList.push(records)
        }
        @Watch('recordList')
        onRecordListChanged(){
            window.localStorage.setItem('recordList',JSON.stringify(this.recordList))
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
    @import '~@/assets/styles/hepler.scss';

    .numberPad {
        > .output {
            @extend %innerShadow;
            font-size: 36px;
            padding: 8px 16px;
            font-family: Consolas, monosplas, serif;
            text-align: right;
        }

        > .buttons {
            $h: 64px;
            flex-wrap: wrap;

            > button {
                @extend %clearFix;
                width: 25%;
                height: $h;
                float: left;
                background-color: transparent;
                border: none;

                &.ok {
                    height: $h * 2;
                    float: right;
                }

                &.zero {
                    width: 25% * 2;
                }

                $bg: #f2f2f2;

                &:nth-child(1) {
                    background: $bg;
                }

                &:nth-child(2), &:nth-child(5) {
                    background: darken($bg, 4%);
                }

                &:nth-child(3), &:nth-child(6), &:nth-child(9) {
                    background: darken($bg, 4%*2);
                }

                &:nth-child(4), &:nth-child(7), &:nth-child(10), &:nth-child(13) {
                    background: darken($bg, 4%*3);
                }

                &:nth-child(8), &:nth-child(11) {
                    background: darken($bg, 4%*4);
                }

                &:nth-child(12) {
                    background: darken($bg, 4%*6);
                }

                &:nth-child(14) {
                    background: darken($bg, 4%*5);
                }
            }
        }
    }

    .types {
        background-color: #c4c4c4;
        display: flex;
        text-align: center;
        font-size: 24px;

        > li {
            width: 50%;
            height: 64px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;

            &.selected::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 3px;
                background-color: #333;
            }
        }
    }

    .notes {
        font-size: 14px;
        background: #f5f4f6;
        display: flex;
        align-items: center;
        padding-left: 16px;

        > .name {
            padding-right: 16px;
        }

        > input {
            height: 64px;
            flex-grow: 1;
            background: transparent;
            border: none;
            padding-left: 16px;
        }
    }

    .tags {
        padding: 16px;
        display: flex;
        flex-direction: column-reverse;

        > .current {
            display: flex;
            font-size: 14px;
            flex-wrap: wrap;

            > li {
                margin-top: 8px;
                background: #d9d9d9;
                $h: 24px;
                height: $h;
                border-radius: $h /2;
                padding: 0 16px;
                margin-right: 16px;
                line-height: $h;
            }
        }

        > .new {
            padding-top: 16px;

            > button {
                background: transparent;
                border: none;
                color: #999;
                border-bottom: 1px solid;
                padding: 0 4px;
            }
        }
    }
</style>