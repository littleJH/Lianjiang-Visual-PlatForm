<template>
  <div
    class="container"
    ref="lines"
    v-loading="loading"
    element-loading-text="数据量较大，请耐心等待"
    :style="`width: ${containerWidth}px`"
  >
    <LineGraph
      v-for="(item, index) in lineData"
      :key="index"
      :id="labelList[index]"
      :lineData="item"
      :indexOfTime="indexOfTime"
      :labelList="labelList"
      :index="index"
      @drawed="loadingChange"
    ></LineGraph>
  </div>
</template>

<script>
import LineGraph from '@/components/graphs/line.vue'
import bus from '@/util/eventBus'
export default {
  data() {
    return {
      containerHeight: window.innerHeight - 57,
      lineData: [],
      indexOfTime: '',
      labelList: [],
      loading: true,
      containerWidth: window.innerWidth - 10
    }
  },
  components: {
    LineGraph
  },
  methods: {
    loadingChange(val) {
      this.loading = val
    }
  },
  created() {
    bus.$on('lineData', val => {
      this.lineData = val.data
      this.indexOfTime = val.indexOfTime
      this.labelList = val.labelList
    })
    bus.$on('reload', val => {
      this.loading = val
    })
    window.addEventListener('resize', () => {
      this.containerHeight = window.innerHeight - 57
    })
  }
}
</script>

<style lang="less" scoped>
.container {
  height: 300px;
  margin-top: 20px;
  z-index: 99;
}
</style>
