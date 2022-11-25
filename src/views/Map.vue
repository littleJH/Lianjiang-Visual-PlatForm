<template>
  <div class="container" :style="'height: ' + containerHeight + 'px;'">
    <!-- 切换地图类型 -->
    <div class="btns">
      <el-radio-group v-model="btnLabel" size="medium">
        <el-radio-button label="标准地图"></el-radio-button>
        <el-radio-button label="卫星地图"></el-radio-button>
      </el-radio-group>
    </div>
    <!-- 地图容器 -->
    <div class="map">
      <baidu-map
        class="bm-view"
        :center="{ lng: 116.45173120555876, lat: 23.260721350209432 }"
        :zoom="13"
        scroll-wheel-zoom
        inertial-dragging
        :mapType="mapType"
      >
        <!-- 比例尺 -->
        <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
        <!-- 地图导航 -->
        <bm-navigation anchor="BMAP_ANCHOR_BOTTOM_RIGHT"></bm-navigation>
        <!-- 地图概览 -->
        <bm-overview-map
          anchor="BMAP_ANCHOR_BOTTOM_LEFT"
          :isOpen="true"
          :size="overviewSize"
        ></bm-overview-map>
        <!-- 自定义覆盖物 -->
        <MyOVerlay
          v-for="item in pointData"
          :key="item.地点"
          :lng="item.经度"
          :lat="item.纬度"
          :text="item.地点"
          :active="item.active"
          :site="item.地点"
          :waterQuulity="item.水质等级"
          :pH="item.pH值"
          :oxygen="item.化学需氧量"
          :ammonianitrogen="item.氨氮"
          :phosphorus="item.总磷"
          :dissolvedOxygen="item.溶解氧"
          @mouseover.native="item.active = true"
          @mouseleave.native="item.active = false"
        >
        </MyOVerlay>
      </baidu-map>
    </div>
  </div>
</template>

<script>
import MyOVerlay from '@/components/mapOverlay/MyOverlay.vue'
import { pointData } from '@/assets/data'
export default {
  data() {
    return {
      pointData: pointData,
      activeOverlay: 0,
      btnLabel: '标准地图',
      mapType: 'BMAP_NORMAL_MAP',
      overviewSize: {
        width: 200,
        height: 150
      },
      containerHeight: window.innerHeight - 57
    }
  },
  watch: {
    btnLabel(newVal) {
      newVal === '标准地图'
        ? (this.mapType = 'BMAP_NORMAL_MAP')
        : (this.mapType = 'BMAP_SATELLITE_MAP')
    },
    'overlayList.active'(newVal) {}
  },
  components: {
    MyOVerlay
  },
  created() {
    window.addEventListener('resize', () => {
      this.containerHeight = window.innerHeight - 57
    })
  }
}
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  position: absolute;
  top: 56px;
  z-index: 0;
  .btns {
    position: absolute;
    z-index: 10;
    top: 20px;
    left: 20px;
  }

  .map {
    height: 100%;
    width: 100%;
    .bm-view {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
