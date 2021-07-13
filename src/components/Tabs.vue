<template>
    <ul class="tabs">
        <li :class="liClass(item)" v-for="item in dataSource"
            :key="item.value"
            @click="select(item)"
        >
            {{item.text}}
        </li>
    </ul>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';

    type  TabDataSource = {
        text: string;
        value: string;
    }
    @Component
    export default class Tabs extends Vue {
        @Prop({required: true, type: Array}) dataSource!: TabDataSource[]
        @Prop(String) readonly value!: string;
        @Prop(String) classPrefix?: string;

        select(item: TabDataSource) {
            this.$emit('update:value', item.value);
        }
        liClass(item:TabDataSource){
            return {selected:item.value === this.value,[`${this.classPrefix}-item`]:this.classPrefix}
        }
    }
</script>

<style scoped lang="scss">
    .tabs {
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
</style>