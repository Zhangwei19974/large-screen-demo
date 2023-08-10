<template>
  <div class="echart-container" ref="containerRef" ></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts';
import {markRaw, onMounted, shallowRef} from 'vue';
import {useDebounceFn, useResizeObserver} from "@vueuse/core";
import {EChartsOption} from "echarts";

const containerRef = shallowRef()
const echart = shallowRef()
const resize = useDebounceFn(()=>{
  echart.value.resize()
},500)


onMounted(()=>{
  // fetch('https://echarts.apache.org/examples/data/asset/data/lines-bus.json').then(res=>{
  //   console.log(res)
  // })

  // 基于准备好的dom，初始化echarts实例
  echart.value = markRaw(echarts.init(containerRef.value));
  // 绘制图表

  useResizeObserver(containerRef.value,()=>{
    resize()
  })
})

function setOptions(option:EChartsOption){
  echart.value.setOption(option)
}

defineExpose({
  setOptions
})


</script>

<style scoped>
.echart-container{
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>