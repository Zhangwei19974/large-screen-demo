<template>
  <echart-container ref="echartRef"></echart-container>
</template>

<script setup lang="ts">
import * as echarts from 'echarts';
import EchartContainer from "../../components/EchartContainer.vue";
import 'echarts/extension-src/bmap/bmap';
import {onMounted, shallowRef} from "vue";

const echartRef = shallowRef()

onMounted( ()=>{

  let option = {
    title: {
      text: 'ECharts 入门示例'
    },
    tooltip: {},
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  }

  echartRef.value.setOptions(option)

})



</script>

<style scoped>

</style>