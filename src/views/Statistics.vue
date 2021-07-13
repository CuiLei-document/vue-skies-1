<template>
        <Layout>
            <Tabs :data-source="types" :value.sync="type" class-prefix="type"/>
            <Tabs :data-source="intervals" :value.sync="interval"/>
        </Layout>
</template>

<script lang='ts'>
    import Vue from 'vue'
    import Types from '@/components/Moneys/Types.vue';
    import {Component} from 'vue-property-decorator';
    import Tabs from '@/components/Tabs.vue';
    import intervalList from '@/constants/intervalList';
    import recordTypeList from '@/constants/recordTypeList';
    @Component({
        components:{Tabs, Types}
    })
    export default class statistics extends Vue {
        type = '-'
        interval = 'day'
        intervals = intervalList
        types = recordTypeList
    }
</script>

<style scoped lang="scss">
     ::v-deep .type-item{
        background:white;
         &.selected{
             background:#c4c4c4;
             &::after{
                 display:none;
             }
         }
    }
</style>