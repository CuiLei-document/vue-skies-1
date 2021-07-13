<template>
    <div class="tags">
        <div class="new">
            <button @click="create">新建标签</button>
        </div>
        <ul class="current">
            <li v-for="tag in tagList" :key="tag.id" @click="toggle(tag)"
                :class="{selected:selectedTag.indexOf(tag)>=0}">{{tag.name}}
            </li>
        </ul>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component, Prop, Watch} from 'vue-property-decorator';
    import tagStore from '@/store/tagListStore';

    @Component
    export default class Tags extends Vue {
        get tagList() {
            return this.$store.state.tagList;
        }

        created() {
            this.$store.commit('fetchTag');
        }

        selectedTag: string[] = [];

        toggle(tag: string) {
            const index = this.selectedTag.indexOf(tag);
            if (index >= 0) {
                this.selectedTag.splice(index, 1);
            } else {
                this.selectedTag.push(tag);
            }
        }

        create() {
            const name = window.prompt('请输入标签名');
            if (!name || name === '') {
                return alert('标签名不能为空');
            }
            this.$store.commit('createTag',name)
        }

        @Watch('selectedTag')
        onSelectedTagChange(tag: string) {
            this.$emit('update:value', tag);
        }
    }
</script>

<style scoped lang="scss">
    .tags {
        padding: 16px;
        display: flex;
        flex-direction: column-reverse;

        > .current {
            display: flex;
            font-size: 14px;
            flex-wrap: wrap;

            > li {
                $bg: #d9d9d9;
                margin-top: 8px;
                background: $bg;
                $h: 24px;
                height: $h;
                border-radius: $h /2;
                padding: 0 16px;
                margin-right: 16px;
                line-height: $h;

                &.selected {
                    background: darken($bg, 50%);
                    color: white;
                }
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