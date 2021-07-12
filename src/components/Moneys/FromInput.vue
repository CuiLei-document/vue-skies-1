<template>
    <div>
        <label class="from-input">
            <span class="name">{{name}}</span>
            <input type="text" :value="value" @input="onValueChange($event.target.value)" :placeholder="placeholder">
        </label>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component, Watch,Prop} from 'vue-property-decorator';

    @Component
    export default class FromInput extends Vue {
        @Prop({default:''})readonly  value!:string;
        @Prop({required: true}) name!:string
        @Prop() placeholder!:string
        @Watch('value')
            onValueChange(value:string){
            this.$emit('update:value', value);
        }
    }
</script>

<style scoped lang="scss">
    .from-input {
        font-size: 14px;
        /*background: #f5f4f6;*/
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
</style>