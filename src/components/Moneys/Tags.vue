<template>
    <div class="tags">
        <div class="new">
            <button>新建标签</button>
        </div>
        <ul class="current">
            <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
            <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
            <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
        </ul>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class Tags extends Vue {

    }
</script>

<style scoped lang="scss">
    .tags {
        padding: 16px;
        display:flex;
        flex-direction: column-reverse;
        > .current {
            display: flex;
            font-size: 14px;
            flex-wrap:wrap;
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