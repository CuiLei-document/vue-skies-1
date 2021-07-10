<template>
    <nav>
        <router-link class="item" to="/money" active-class="selected">
            <svg class="icon">
                <use xlink:href="#icon-money"></use>
            </svg>
            记账
        </router-link>
        <router-link class="item" to="/labels"  active-class="selected">
            <svg class="icon">
                <use xlink:href="#icon-label"></use>
            </svg>
            标签
        </router-link>
        <router-link class="item" to="/statistics"  active-class="selected">
            <svg class="icon">
                <use xlink:href="#icon-statictics"></use>
            </svg>
            明细
        </router-link>
    </nav>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class Nav extends Vue {

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
    nav{
        @extend %outShadow;
        display:flex;
        font-size: 14px;
        > .item{
            padding: 2px 0;
            width: 33.3333%;
            display:flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            > svg{
                width:30px;
                height:30px;
            }
            &.selected{
                color:#01a75a;
            }
        }
    }
</style>