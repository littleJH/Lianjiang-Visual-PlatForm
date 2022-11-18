<template>
  <div class="container">
    <el-divider></el-divider>
    <div class="select-container">
      <span>根据过去</span>
      <el-select v-model="pastOption" placeholder="请选择">
        <el-option value="'aMonth" label="一个月"></el-option>
        <el-option value="threeMonth" label="三个月"></el-option>
        <el-option value="sixMonth" label="半年"></el-option>
      </el-select>
    </div>
    <div class="select-container">
      <span>预测未来</span>
      <el-select v-model="futureOption" placeholder="请选择">
        <el-option value="aMonth" label="一个月"></el-option>
        <el-option value="threeMonth" label="三个月"></el-option>
        <el-option value="sinMonth" label="半年"></el-option>
      </el-select>
    </div>
    <el-divider></el-divider>
    <el-button type="primary" @click="submit" :disabled="btnDisabled">{{
      btnMsg
    }}</el-button>
    <el-divider></el-divider>
    <h4>预测结果：</h4>
    <div v-loading="isloading">
      <el-form label-width="80px" label-position="left">
        <el-form-item label="COcr：">
          <el-input v-model="COcr" disabled></el-input>
        </el-form-item>
        <el-form-item label="电导率：">
          <el-input v-model="conductivity" disabled></el-input>
        </el-form-item>
        <el-form-item label="氨氮：">
          <el-input v-model="ammoniaNitrogen" disabled></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pastOption: '三个月',
      futureOption: '三个月',
      COcr: '',
      conductivity: '',
      ammoniaNitrogen: '',
      btnMsg: '点击预测',
      isloading: false,
      btnDisabled: false
    }
  },
  methods: {
    submit() {
      this.$message.warning('该功能尚在开发阶段，敬请期待')
    }
  }
}
</script>

<style lang="less" scoped>
.select-container {
  display: flex;
  span {
    display: inline-block;
    width: 60px;
    font-size: 14px;
    line-height: 32px;
  }
  .el-select {
    width: 200px;
    margin-left: 20px;
    margin-bottom: 10px;
  }
}
</style>
