<template>
  <bm-overlay
    ref="customOverlay"
    :class="{ sample: true, active: active }"
    pane="labelPane"
    @draw="draw"
  >
    <el-popover placement="top-start" :title="name" trigger="hover">
      <el-divider></el-divider>

      <div class="text item">水质类别：{{ waterQuulity }}</div>
      <div class="text item">监测时间：{{ monitorTime }}</div>
      <div class="text item">化学含氧量：{{ oxygen }}</div>
      <div class="text item">氨氮：{{ ammonianitrogen }}</div>
      <div class="text item">总磷：{{ phosphorus }}</div>
      <div class="text item">溶解氧：{{ dissolvedOxygen }}</div>
      <el-divider></el-divider>

      <a href="#/detail">断面详情数据</a>
      <div slot="reference">
        <div
          style="
            width: 40px;
            height: 40px;
            border-radius: 40px;
            font-size: 30px;
          "
        >
          支
        </div>
        <div style="line-height: 40px; font-size: 12px; color: black">
          {{ name }}
        </div>
      </div>
    </el-popover>
  </bm-overlay>
</template>

<script>
export default {
  props: [
    'text',
    'lng',
    'lat',
    'active',
    'name',
    'waterQuulity',
    'monitorTime',
    'oxygen',
    'ammonianitrogen',
    'phosphorus',
    'dissolvedOxygen'
  ],
  data() {
    return {
      id: 0
    }
  },
  watch: {
    position: {
      handler() {
        this.$refs.customOverlay.reload()
      },
      deep: true
    }
  },
  methods: {
    draw({ el, BMap, map }) {
      const lng = this.lng
      const lat = this.lat
      const pixel = map.pointToOverlayPixel(new BMap.Point(lng, lat))
      el.style.left = pixel.x - 60 + 'px'
      el.style.top = pixel.y - 20 + 'px'
    }
  }
}
</script>

<style>
.sample {
  width: 40px;
  height: 40px;
  border-radius: 40px;
  line-height: 40px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  text-align: center;
  padding: 10px;
  position: absolute;
}

.sample.active {
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 10px;
}
</style>
