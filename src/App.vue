<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style lang="scss">
    @import '~@/assets/styles/reset.scss';
    @import "~@/assets/styles/hepler.scss";

    #app {
        font-family: $font-hei;
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #333;
        font-size:16px;
        background:#f5f4f6;
    }
</style>
