<template>
    <Layout>
        <div class="navBar">
                <svg class="icon" @click="goBack">
                    <use xlink:href="#icon-left"></use>
                </svg>
            <span class="title">编辑标签</span>
            <span></span>
        </div>
        <div class="wrapper">
            <FromInput @update:value="updateTag" :value="tag.name" name="标签名" placeholder="请输入标签名"/>
        </div>
        <div class="button-wrapper">
            <Button @click="removeTag">删除按钮</Button>
        </div>
    </Layout>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import tagListModel from '@/models/tagListModel';
    import Button from '@/components/Button.vue';
    import FromInput from '@/components/Moneys/FromInput.vue';
    import store from '@/store/index2';
    @Component({
        components: {FromInput, Button}
    })
    export default class EditLabel extends Vue {
        // eslint-disable-next-line no-undef
        tag!:Tag
        created(){
            console.log(this.$route.params);
            const id = this.$route.params.id;
            const tag = store.findTag(id)
            if(tag){
                    this.tag = tag
            }else{
                this.$router.replace('/404')
            }
        }
        updateTag(name:string){
            tagListModel.update(this.tag.id,name)
        }
        removeTag(){
            tagListModel.remove(this.tag.id)
        }
        goBack(){
            this.$router.back()
        }
    }
</script>

<style scoped lang="scss">
    @import "~@/assets/styles/hepler.scss";
    .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
    .navBar{
        display:flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 16px;
        background: white;
        > svg{
            width: 1.5em;
            height: 1.5em;
        }
        > .title{}
    }
    .wrapper{
       @extend %inputShadow;
        background:white;
        margin-top: 8px;
    }
    .button-wrapper{
        text-align: center;
        margin-top: 32px;
    }
</style>