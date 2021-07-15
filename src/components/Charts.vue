<template>
    <div class="wrapper" ref="wrapper">
        asdasd
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component, Prop, Watch} from 'vue-property-decorator';
    import * as echarts from 'echarts';
    import {EChartsOption, ECharts} from 'echarts';

    @Component
    export default class Charts extends Vue {
        @Prop() options?: EChartsOption;
        chart?: ECharts;

        mounted() {
            if (this.options === undefined) {
                return console.warn('出错啦');
            }
            this.chart = echarts.init(this.$refs.wrapper as HTMLDivElement);
            this.chart.setOption(this.options);
        }

        @Watch('options')
        onOptionsChange(newValue: EChartsOption) {
            this.chart!.setOption(newValue);
        }
    }
</script>

<style scoped lang="scss">
    .wrapper {
        width: 100%;
        height: 400px;
    }
</style>