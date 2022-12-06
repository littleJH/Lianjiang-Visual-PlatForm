<template>
  <div ref="lineGraph" class="line-container"></div>
</template>

<script>
import { arr } from '@/assets/data'
export default {
  data() {
    return {
      cardHeight: window.innerHeight - 95,
      data: arr,
      legend: ['水温', 'pH', '溶解氧', '浊度', '电导率', '氨氮', 'CODcr']
    }
  },
  methods: {
    processData() {
      this.data = this.data.map(item => {
        Object.keys(item).forEach(key => {
          if (item[key] === '0') {
            item[key] = ''
          }
        })
        return item
      })
    },
    draw() {
      const graph = this.$refs.lineGraph
      const myChart = this.$echarts.init(graph)
      const options = {
        dataset: {
          source: this.data
        },
        // 提示框组件
        tooltip: {
          // 触发类型：坐标轴触发
          trigger: 'axis'
        },
        legend: {
          left: 'center',
          top: '2%',
          // 如果series 对象有name 值，则 legend可以不用写data
          // 修改图例组件 文字颜色
          textStyle: {
            color: '#4c9bfd',
            fontSize: 14
          }
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
          type: 'time',
          // 坐标轴两边的留白策略
          boundaryGap: false
        },
        yAxis: {
          type: 'value',
          min: 'dataMin'
        },
        dataZoom: [
          {
            type: 'inside',
            start: 0,
            end: 100
          },
          {
            height: '20',
            start: 0,
            end: 100
          }
        ],
        series: [
          {
            type: 'line',
            symbol: 'none',
            smooth: true,
            sampling: 'lttb',
            lineStyle: {
              width: 1
            },
            name: this.legend[0],
            encode: {
              x: 0,
              y: 1
            }
          },
          {
            type: 'line',
            symbol: 'none',
            smooth: true,

            sampling: 'lttb',
            lineStyle: {
              width: 1
            },
            name: this.legend[1],
            encode: {
              x: 0,
              y: 2
            }
          },
          {
            type: 'line',
            symbol: 'none',
            smooth: true,

            sampling: 'lttb',
            lineStyle: {
              width: 1
            },
            name: this.legend[2],
            encode: {
              x: 0,
              y: 3
            }
          },
          {
            type: 'line',
            symbol: 'none',
            smooth: true,

            sampling: 'lttb',
            lineStyle: {
              width: 1
            },
            name: this.legend[3],
            encode: {
              x: 0,
              y: 4
            }
          },
          {
            type: 'line',
            symbol: 'none',
            smooth: true,

            sampling: 'lttb',
            lineStyle: {
              width: 1
            },
            name: this.legend[4],
            encode: {
              x: 0,
              y: 5
            }
          },
          {
            type: 'line',
            symbol: 'none',
            smooth: true,

            sampling: 'lttb',
            lineStyle: {
              width: 1
            },
            name: this.legend[5],
            encode: {
              x: 0,
              y: 6
            }
          }
        ]
      }
      myChart.setOption(options)
      // 当浏览器窗口缩放时，图标同时缩放
      window.addEventListener('resize', () => {
        myChart.resize()
      })
    }
  },
  mounted() {
    this.processData()
    this.draw()
  }
}
</script>

<style lang="less" scoped>
.line-container {
  width: 60%;
  height: 100%;
}
</style>
