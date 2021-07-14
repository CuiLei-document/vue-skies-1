<template>
    <div class="wrapper-type">
        <div class="type">类型</div>
        <ul class="types">
            <li :class="{selected:type === '-'}" @click="selectType('-')">支出</li>
            <li :class="{selected:type === '+'}" @click="selectType('+')">收入</li>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';
    @Component
    export default class Types extends Vue{
        @Prop(String) readonly type!:string
        @Prop(String) classPrefix?:string
        selectType(type:string){
            if(type !== '-' && type !== '+'){
                throw new Error('type is unknown')
            }
            this.$emit('update:type',type)
        }
    }

</script>

<style scoped lang="scss">
    .wrapper-type{
        display:flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 16px;
        border-bottom:1px solid #dddada;
    }
    .type{
        font-size:16px;
        /*margin-left:16px;*/
        color:black;
    }
    .types {
        display: flex;
        text-align: center;
        font-size: 16px;
        > li {
            width: 50%;
            display: flex;
            margin-left:16px;
            justify-content: center;
            align-items: center;
            border: 1px solid #c4c4c4;
            padding: 4px 16px;
            border-radius: 10px;
            color:#9a9999;
            &.selected {
                border-color: pink;
                color:pink;
            }
        }
    }
</style>