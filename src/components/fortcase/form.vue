<template>
  <el-card class="box-card" :style="`height: ${cardHeight}px`">
    <div class="select-container">
      <span>根据过去</span>
      <el-select v-model="pastOption" placeholder="请选择" size="small">
        <el-option value="'aMonth" label="一个月"></el-option>
        <el-option value="threeMonth" label="三个月"></el-option>
        <el-option value="sixMonth" label="半年"></el-option>
      </el-select>
    </div>
    <div class="select-container">
      <span>预测未来</span>
      <el-select v-model="futureOption" placeholder="请选择" size="small">
        <el-option value="aMonth" label="一个月"></el-option>
        <el-option value="threeMonth" label="三个月"></el-option>
        <el-option value="sinMonth" label="半年"></el-option>
      </el-select>
    </div>
    <div>
      <h4>输入数据：</h4>
      <el-input v-model.trim="temp" placeholder="温度" size="small"></el-input>
      <el-input v-model.trim="pH" placeholder="pH" size="small"></el-input>
      <el-input v-model.trim="DO" placeholder="溶解氧" size="small"></el-input>
      <el-input v-model="turbidity" placeholder="浊度" size="small"></el-input>
      <el-divider></el-divider>
      <el-button type="primary" @click="forecase">点击预测</el-button>
      <el-input
        v-model="COcr"
        placeholder="COcr"
        disabled
        size="small"
      ></el-input>
      <el-input
        v-model="conductivity"
        placeholder="电导率"
        disabled
        size="small"
      ></el-input>
      <el-input
        v-model="ammoniaNitrogen"
        placeholder="氨氮"
        disabled
        size="small"
      ></el-input>
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      pastOption: '',
      futureOption: '',
      cardHeight: window.innerHeight - 95,
      temp: '',
      pH: '',
      DO: '',
      turbidity: '',
      COcr: '',
      conductivity: '',
      ammoniaNitrogen: ''
    }
  },
  methods: {
    forecase() {}
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
  width: 30%;
  float: right;
  margin: 18px;
  overflow: auto;
}
.select-container {
  display: flex;
  span {
    font-size: 14px;
    line-height: 32px;
  }
  .el-select {
    width: 200px;
    margin-left: 20px;
    margin-bottom: 10px;
  }
}
.el-input {
  margin: 5px 0;
}
.el-button {
  margin-bottom: 21px;
}
</style>
