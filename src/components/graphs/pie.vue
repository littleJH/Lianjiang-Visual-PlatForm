<template>
  <div class="container">
    <div class="left">
      <div class="select">
        <span>监测范围内</span>
        <el-select v-model="selectValue" @change="optionChange">
          <el-option
            v-for="item in options"
            :key="item"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
        <span>的各水质等级所占时间的比例</span>
      </div>
      <div
        class="pieGraph"
        ref="pieGraph"
        :style="`height: ${graphHeight}px;`"
      ></div>
    </div>
    <div class="right markdown-body" :style="`height: ${cardHeight}px`">
      <mdfile></mdfile>
    </div>
  </div>
</template>

<script>
import { arr } from '@/assets/level'
import mdfile from '@/assets/mdfile.md'
export default {
  data() {
    return {
      graphHeight: (window.innerHeight - 57) * 0.9,
      cardHeight: window.innerHeight - 93 - 20,
      data: arr,
      selectValue: '浊度',
      options: [
        '溶解氧',
        '电导率',
        '浊度',
        '氨氮',
        '总磷',
        'CODcr',
        '挥发酚',
        '六价铬',
        '铅',
        '镉',
        '阴离子表面活性剂',
        '硫化物',
        '时段累积流量',
        '水位',
        '断面平均流速',
        '当前瞬时流速',
        '瞬时流量',
        '断面面积',
        '水流量',
        '总累积流量'
      ]
    }
  },
  methods: {
    draw() {
      const graph = this.$refs.pieGraph
      const myChart = this.$echarts.init(graph)
      const options = {
        dataset: {
          dimensions: ['水质等级', ...this.options],
          source: this.data
        },
        // 图例组件。通过点击图例组件控制某个系列的显示与否
        legend: {
          left: 'center',
          bottom: '10%',
          // 如果series 对象有name 值，则 legend可以不用写data
          // 修改图例组件 文字颜色
          textStyle: {
            color: '#4c9bfd',
            fontSize: 14
          }
        },
        grid: {
          left: '10%',
          right: '3%',
          bottom: '15%',
          show: false, // 显示边框
          borderColor: '#012f4a', // 边框颜色
          containLabel: true // 包含刻度文字在内
        },
        // 工具栏
        toolbox: {
          right: '5%',
          feature: {
            // 保存为图片
            saveAsImage: {},
            dataView: {
              show: true
            }
          }
        },
        series: [
          {
            type: 'pie',
            radius: [20, 140],
            center: ['50%', '40%'],
            itemStyle: {
              borderRadius: 5
            },
            label: {
              show: true,
              formatter: params => {
                const str =
                  ' {b|' +
                  params.name +
                  '：\n}' +
                  '{hr|}\n\n   天数：' +
                  params.value[this.selectValue] +
                  '    {per|' +
                  params.percent +
                  '%}    \n'
                return str
              },
              backgroundColor: '#F6F8FC',
              borderColor: '#8C8D8E',
              borderWidth: 1,
              borderRadius: 4,
              rich: {
                b: {
                  color: '#4C5058',
                  fontSize: 14,
                  fontWeight: 'bold',
                  lineHeight: 33,
                  align: 'center'
                },
                hr: {
                  borderColor: '#8C8D8E',
                  width: '100%',
                  borderWidth: 1,
                  height: 0
                },
                per: {
                  color: '#fff',
                  backgroundColor: '#4C5058',
                  padding: [3, 4],
                  borderRadius: 4
                }
              }
            },
            labelLine: {
              show: true,
              showAbove: true,
              length: 40,
              length2: 40,
              smooth: true
            },
            emphasis: {
              label: {
                show: true
              }
            },
            encode: {
              itemName: '水质等级',
              value: this.selectValue
            }
          }
        ]
      }
      myChart.setOption(options)
      // 当浏览器窗口缩放时，图标同时缩放
      window.addEventListener('resize', () => {
        myChart.resize()
      })
    },
    optionChange() {
      this.draw()
    }
  },
  mounted() {
    this.draw()
  },
  components: {
    mdfile
  },
  created() {
    window.addEventListener('resize', () => {
      this.graphHeight = (window.innerHeight - 57) * 0.9
      this.cardHeight = window.innerHeight - 93 - 20
    })
  }
}
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  display: flex;
}
.left {
  width: 60%;
}
.right {
  width: 40%;
  margin: 18px;
  overflow: auto;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 0 10px 0 #888888;
}
.select {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  span {
    display: inline-block;
    height: 40px;
    line-height: 40px;
    font-weight: 700;
    margin: 0 12px;
  }
}
.pieGraph {
  width: 100%;
}
</style>
