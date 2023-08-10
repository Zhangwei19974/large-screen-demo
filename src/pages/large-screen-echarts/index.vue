<template>
  <div class="large-screen">
    <div class="large-screen_title">大屏展示demo</div>

    <!-- 大屏展示demo -->
    <div class="large-screen_container">
      <echart-line/>
      <echart-map class="large-screen_container_map"/>
      <echart-line/>
      <echart-line/>
      <echart-line/>
      <echart-line/>
      <echart-line/>
      <echart-line/>
      <echart-line/>
    </div>
  </div>
</template>

<script setup lang="ts">

import EchartMap from "./EchartMap.vue";
import EchartLine from "./EchartLine.vue";
</script>

<style scoped>
.large-screen{
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #000102;
  flex-direction: column;
  overflow: hidden;
}
.large-screen_title{
  color: white;
  width: 100%;
  text-align: center;
  padding: 10px;
  font-size: 30px;
  font-family: "楷体";
}

.large-screen_container{

  display: grid;
  flex: 1;
  gap: 10px;
  grid-template-rows: repeat(3,1fr);
  grid-template-columns: repeat(4,1fr);
  overflow: hidden;

}
.large-screen_container .large-screen_container_map{
  background-color: #fff;
  grid-column-start: span 2;
  grid-row-start: span 2;
}
</style>