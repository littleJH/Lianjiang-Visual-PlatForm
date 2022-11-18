<template>
  <bm-overlay ref="customOverlay" class="overlay" pane="labelPane" @draw="draw">
    <el-popover placement="top-start" :title="name" trigger="hover">
      <el-divider></el-divider>

      <div class="text item">水质类别：{{ level }}</div>
      <div class="text item">pH: {{ pH }}</div>
      <div class="text item">化学含氧量：{{ oxygen }}</div>
      <div class="text item">氨氮：{{ ammonianitrogen }}</div>
      <div class="text item">总磷：{{ phosphorus }}</div>
      <div class="text item">溶解氧：{{ dissolvedOxygen }}</div>

      <div slot="reference">
        <div :class="{ sample: true, active: active }">
          {{ level }}
        </div>
        <div class="name">
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
    'site',
    'pH',
    'waterQuulity',
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
  computed: {
    name() {
      return this.site.slice(3)
    },

    level() {
      let level = ''
      switch (this.waterQuulity) {
        case 1:
          level = 'Ⅰ'
          break
        case 2:
          level = 'Ⅱ'
          break
        case 3:
          level = 'Ⅲ'
          break
        case 4:
          level = 'Ⅳ'
          break
        case 5:
          level = 'Ⅴ'
          break
        default:
          break
      }
      return level
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
      el.style.left = pixel.x - 50 + 'px'
      el.style.top = pixel.y - 40 + 'px'
    }
  }
}
</script>

<style>
.overlay {
  width: 100px;
  height: 80px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.sample {
  width: 40px;
  height: 40px;
  border-radius: 40px;
  box-shadow: 0 0 2px rgb(0, 0, 0);
  line-height: 40px;
  background: rgba(255, 0, 0, 0.75);
  color: #fff;
  text-align: center;
  margin-left: 30px;
}

.sample.active {
  background: rgba(0, 0, 0, 1);
  color: #fff;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 10px;
}

.name {
  width: 100%;
  text-align: center;
  line-height: 40px;
  font-size: 18px;
  font-weight: 700;
  color: rgb(255, 0, 0);
}
</style>
