<template>
  <el-card class="box-card" :style="`height: ${cardHeight}px`">
    <div
      ref="lineGraph"
      class="line-container"
      :style="`height: ${cardHeight - 80}px;`"
    ></div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      cardHeight: window.innerHeight - 95,
      legend: ['温度', 'pH', '溶解氧', '浊度', 'COcr', '电导率', '氨氮']
    }
  },
  methods: {
    draw() {
      const graph = this.$refs.lineGraph
      const myChart = this.$echarts.init(graph)
      const options = {
        dataset: {
          source: [
            ['product', '2015', '2016', '2017'],
            ['Matcha Latte', 43.3, 85.8, 93.7],
            ['Milk Tea', 83.1, 73.4, 55.1],
            ['Cheese Cocoa', 86.4, 65.2, 82.5],
            ['Walnut Brownie', 72.4, 53.9, 39.1]
          ]
        },
        title: {
          text: 'xxx',
          subtext: 'xxx',
          left: 'center'
        },
        // 提示框组件
        tooltip: {
          // 触发类型：坐标轴触发
          trigger: 'axis'
        },
        // 图例组件。通过点击图例组件控制某个系列的显示与否
        legend: {
          // 如果series 对象有name 值，则 legend可以不用写data
          // 修改图例组件 文字颜色
          textStyle: {
            color: '#4c9bfd',
            fontSize: 20
          },
          left: 'center',
          top: 'bottom'
        },
        grid: {
          top: '10%',
          left: '3%',
          right: '4%',
          bottom: '10%',
          show: false, // 显示边框
          borderColor: '#012f4a', // 边框颜色
          containLabel: true // 包含刻度文字在内
        },
        // 工具栏
        toolbox: {
          feature: {
            // 保存为图片
            saveAsImage: {}
          }
        },
        xAxis: {
          // 坐标轴类型
          type: 'category',
          // 坐标轴两边的留白策略
          boundaryGap: false,
          name: '时间'
        },
        yAxis: {
          type: 'value',
          name: '数值'
        },
        series: [{ type: 'line' }, { type: 'line' }, { type: 'line' }]
      }
      myChart.setOption(options)
      // 当浏览器窗口缩放时，图标同时缩放
      window.addEventListener('resize', () => {
        myChart.resize()
      })
    }
  },
  mounted() {
    this.draw()
  },
  created() {
    window.addEventListener('resize', () => {
      this.cardHeight = window.innerHeight - 95
    })
  }
}
</script>

<style lang="less" scoped>
.el-card {
  width: 70%;
  float: left;
  margin: 18px;
  overflow: auto;
}
</style>
