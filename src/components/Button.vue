<template>
    <button class="button" @click="$emit('click',$event)">
        <slot />
    </button>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class Button extends Vue {

    }
</script>

<style scoped lang="scss">
    .button {
        background: #6e6e6e;
        border: none;
        border-radius: 4px;
        padding: 12px;
        color: white;
    }
</style>