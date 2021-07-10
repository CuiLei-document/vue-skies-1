<template>
    <div>
        <label class="notes">
            <span class="name">备注</span>
            <input type="text" placeholder="请输入备注">
        </label>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class FromInput extends Vue {

    }
</script>

<style scoped lang="scss">
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
</style>