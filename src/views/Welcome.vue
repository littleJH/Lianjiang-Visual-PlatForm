<template>
  <div class="container" :style="'height: ' + containerHeight + 'px;'">
    <div class="left">
      <div class="title">
        <h1>练江可视化平台</h1>
        <el-divider></el-divider>
      </div>
      <div class="content">
        <h5 align="right">上世纪90年代以来，</h5>
        <h5 align="right">
          随流域内污染问题不断加剧，练江成为广东省污染最严重的河流之一。
        </h5>
        <h4 align="right">在党中央及省委、省政府高度重视和支持下，</h4>
        <h4 align="right">
          汕头市深入践行习近平生态文明思想，坚持科学、依法、精准治污，
        </h4>
        <h3 align="right">练江综合整治取得阶段性成效。</h3>
        <el-divider></el-divider>
      </div>
      <el-button @click="enterInto">
        <span>进入</span>
      </el-button>
    </div>
    <div class="right">
      <img src="../assets/barImg.jpg" />
      <img src="../assets/lineImg.jpg" />
      <img src="../assets/pieImg.jpg" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      containerHeight: window.innerHeight - 57
    }
  },
  methods: {
    enterInto() {
      if (localStorage.getItem('token')) {
        this.$router.push('/Graph')
      } else {
        this.$router.push('/Login')
        console.log('enter into login')
      }
    }
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.containerHeight = window.innerHeight - 57
    })
  }
}
</script>

<style lang="less" scoped>
.container {
  display: flex;
  position: absolute;
  top: 56px;
  width: 100%;
  color: #f2f6fc;
  background-color: #f2f6fc;
  background-image: url('../assets/bgc2.jpg');
  background-size: 110%;
  background-position: 0 0;
  background-repeat: repeat;
  overflow: auto;
}
.content {
  * {
    margin: 40px 0;
  }
}

.left {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 20px;
}

.title {
  padding: 50px 0 0 80px;
  display: inline-block;
}

.el-button {
  width: 100px;
}

.right {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  img {
    height: 30%;
    width: 513px;
    border: 3px dotted;
    margin-left: 20px;
  }
}

.el-divider {
  margin: 40px 0;
}
</style>
