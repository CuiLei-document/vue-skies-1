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
            <FromInput @update:value="updateTag" :value="currentTag.name" name="标签名" placeholder="请输入标签名"/>
        </div>
        <div class="button-wrapper">
            <Button @click="removeTag">删除按钮</Button>
        </div>
    </Layout>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Button from '@/components/Button.vue';
    import FromInput from '@/components/Moneys/FromInput.vue';
    @Component({
        components: {FromInput, Button}
    })
    export default class EditLabel extends Vue {
        get currentTag(){
            return this.$store.state.currentTag;
        }
        created(){
            const id = this.$route.params.id;
            this.$store.commit('fetchTag')
            this.$store.commit('setCurrentTag',id)
            if(!this.currentTag){
                this.$router.replace('/404')
            }
        }
        updateTag(name:string){
            if(this.currentTag){
                this.$store.commit('updateTag',{id:this.currentTag.id,name:name})
            }
        }
        removeTag(){
            this.$store.commit('removeTag',this.currentTag.id)
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