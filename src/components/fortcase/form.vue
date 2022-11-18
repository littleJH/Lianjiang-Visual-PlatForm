<template>
  <el-card class="box-card" :style="`height: ${cardHeight}px`">
    <div class="btn-container">
      <el-button-group>
        <el-button :type="btnType" @click="btn1Click">程序 1</el-button>
        <el-button :type="btnType2" @click="btn2Click">程序 2</el-button>
      </el-button-group>
    </div>

    <component :is="program"></component>
  </el-card>
</template>

<script>
import Program1 from '@/components/fortcase/program1.vue'
import Program2 from '@/components/fortcase/program2.vue'
export default {
  data() {
    return {
      cardHeight: window.innerHeight - 95,
      program: 'Program1',
      btnType: 'primary',
      btnType2: ''
    }
  },
  created() {
    window.addEventListener('resize', () => {
      this.cardHeight = window.innerHeight - 95
    })
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
.el-card {
  width: 25%;
  float: right;
  margin: 18px;
  padding: 0 40px;
  overflow: auto;
}

.btn-container {
  width: 100%;
  display: flex;
}
</style>
