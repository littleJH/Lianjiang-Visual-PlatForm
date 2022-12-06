<template>
  <div class="form-container">
    <div class="btn-container">
      <el-button-group>
        <el-button :type="btnType" @click="btn1Click">程序 1</el-button>
        <el-button :type="btnType2" @click="btn2Click">程序 2</el-button>
      </el-button-group>
    </div>

    <div class="program">
      <component :is="program"></component>
    </div>
  </div>
</template>

<script>
import Program1 from '@/components/fortcase/program1.vue'
import Program2 from '@/components/fortcase/program2.vue'
export default {
  data() {
    return {
      program: 'Program1',
      btnType: 'primary',
      btnType2: ''
    }
  },
  methods: {
    btn1Click() {
      this.program = 'Program1'
      this.btnType = 'primary'
      this.btnType2 = ''
    },
    btn2Click() {
      this.program = 'Program2'
      this.btnType = ''
      this.btnType2 = 'primary'
    }
  },
  components: {
    Program1,
    Program2
  }
}
</script>

<style lang="less" scoped>
.form-container {
  width: 40%;
  height: 100%;
  overflow: auto;
  border: 1px solid #ccc;
  .btn-container {
    width: 90%;
    display: flex;
    padding: 30px 0 0 30px;
  }
  .program {
    width: 80%;
    height: 100%;
    padding: 30px;
  }
}
</style>
