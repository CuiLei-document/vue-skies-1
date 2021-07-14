<template>
    <Layout>
        <div class="tags">
            <router-link :to="`/labels/edit/${tag.id}`" class="tag" v-for="(tag,index) in tags" :key="index">
                <span>{{tag.name}}</span>
                <svg class="icon">
                    <use xlink:href="#icon-right"></use>
                </svg>
            </router-link>

        </div>
        <div class="createTag-wrapper">
            <Button class="createTag" @click="createTag">新建标签</Button>
        </div>
    </Layout>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Button from '@/components/Button.vue';
    import {mixins} from 'vue-class-component';
    import TagHelper from '@/mixins/TagHelper';
    @Component({
        components: {Button}
    })
    export default class Labels extends mixins(TagHelper) {
        get tags(){
            return this.$store.state.tagList
        }
        beforeCreate(){
            this.$store.commit('fetchTag')
        }

    }

</script>

<style scoped lang="scss">
    .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }

    .tags {
        background: white;
        font-size: 16px;
        padding-left: 16px;

        > .tag {
            min-height: 44px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #e6e6e6;

            > svg {
                color: #666;
                width: 1.5em;
                height: 1.5em;
                margin-right: 8px;
            }
        }
    }

    .createTag-wrapper {
        text-align: center;
        margin-top: 40px;

        > .createTag {
            background: #6e6e6e;
            border: none;
            border-radius: 4px;
            padding: 12px;
            color: white;
        }
    }
</style>