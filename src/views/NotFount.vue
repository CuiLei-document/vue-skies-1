<template>
    <div>
        <div>您好，您当前访问的页面不存在</div>
        <router-link to="/">返回首页</router-link>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class NotFount extends Vue {

    }
</script>

<style scoped lang="scss">

</style>