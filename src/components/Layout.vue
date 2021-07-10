<template>
    <div class="layout-wrapper">
        <div class="content" :class="{[`${classPrefix}-content`]:classPrefix}">
            <slot/>
        </div>
        <Nav/>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    export default {
        props:{
            classPrefix:String
        }
    }
</script>

<style scoped lang="scss">
.layout-wrapper{
    display:flex;
    flex-direction: column;
    height:100vh;
    >.content{
        flex-grow:1;
        overflow: auto;
    }
}
</style>