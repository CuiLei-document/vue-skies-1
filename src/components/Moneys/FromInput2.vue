<template>
    <div class="wrapper">
        <div class="name">{{name}}</div>
            <label class="from-input">
                <template v-if="type === 'date'">
                    <input class="timer" :type="type || 'text'" :value="x(value)" @input="onValueChange($event.target.value)" :placeholder="placeholder">
                </template>
                <template v-else>
                    <input :type="type || 'text'" :value="value" @input="onValueChange($event.target.value)" :placeholder="placeholder">
                </template>
            </label>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component, Watch, Prop} from 'vue-property-decorator';
    import dayjs from 'dayjs';

    @Component
    export default class FromInput extends Vue {
        @Prop({default: ''}) readonly value!: string;
        @Prop() name!: string;
        @Prop() placeholder!: string;
        @Prop() type?:string
        x(isoString:string){
            return dayjs(isoString).format('YYYY-MM-DD')
        }
        onValueChange(value:string) {
            this.$emit('update:value',value);
        }
    }
</script>

<style scoped lang="scss">
    @import '~@/assets/styles/hepler.scss';
    .wrapper{
        display:flex;
        flex-direction: column;
        /*align-items: center;*/
    }
    .name {
        padding-left: 16px;
        padding-top:8px;
        /*border:1px solid red;*/
    }
    .from-input {
        @extend %clearFix;
        font-size: 14px;
        /*background: #f5f4f6;*/
        /*display: flex;*/
        /*align-items: center;*/
        /*padding-left: 16px;*/
        position: relative;
        > input {
            width:343px;
            height: 64px;
            flex-grow: 1;
            background-color: #e2e1e1;
            border: none;
            margin-top:16px;
            margin-left:16px;
            padding-left: 16px;
            border-radius: 6px;
        }
        .timer{
            /*border:1px solid red;*/
            background:transparent;
            width:150px;
            position: absolute;
            top:-30px;
            right:0;
            padding-right:16px;
        }
    }

</style>