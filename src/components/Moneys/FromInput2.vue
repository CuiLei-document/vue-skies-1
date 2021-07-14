<template>
    <div>
        <div class="name">{{name}}</div>
        <label class="from-input">
            <input type="text" :value="value" @input="onValueChange($event.target.value)" :placeholder="placeholder">
        </label>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component, Watch, Prop} from 'vue-property-decorator';

    @Component
    export default class FromInput extends Vue {
        @Prop({default: ''}) readonly value!: string;
        @Prop({required: true}) name!: string;
        @Prop() placeholder!: string;

        onValueChange(value:string) {
            this.$emit('update:value',value);
        }
    }
</script>

<style scoped lang="scss">
    .name {
        padding-left: 16px;
        padding-top:8px;
        /*border:1px solid red;*/
    }
    .from-input {
        font-size: 14px;
        /*background: #f5f4f6;*/
        /*display: flex;*/
        /*align-items: center;*/
        /*padding-left: 16px;*/

        > input {
            width:50vh;
            height: 64px;
            flex-grow: 1;
            background-color: #e2e1e1;
            border: none;
            margin-top:16px;
            margin-left:16px;
            padding-left: 16px;
            border-radius: 6px;

        }
    }
</style>