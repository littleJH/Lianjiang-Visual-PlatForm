<template>
  <div class="header-container">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo menu-container"
      mode="horizontal"
      background-color="#375577"
      text-color="#C0C4CC"
      active-text-color="#fff"
      router
    >
      <div class="welcome-page-mark">
        <component :is="logStatus"></component>
      </div>
      <div class="items-container">
        <el-menu-item index="/BackStage">后台管理</el-menu-item>
        <el-menu-item index="/Forecast">预测</el-menu-item>
        <el-menu-item index="/File">文件</el-menu-item>
        <el-menu-item index="/Map">地图</el-menu-item>
        <el-menu-item index="/Graph">图表</el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<script>
import bus from '../../util/eventBus'
import logoutTag from '@/components/header/LogoutTag'
import welcomeTag from '@/components/header/WelcomeTag'
import loginTag from '@/components/header/LoginTag.vue'
export default {
  data() {
    return {
      activeIndex: '/Welcome',
      logStatus: 'welcomeTag'
    }
  },
  watch: {
    $route: {
      handler(newVal) {
        const path = newVal.path
        if (
          path === '/Graph' ||
          path === '/Map' ||
          path === '/File' ||
          path === '/Forecast'
        ) {
          this.logStatus = 'logoutTag'
        }
        if (path === '/Welcome') {
          this.logStatus = 'welcomeTag'
          this.activeIndex = '/Welcome'
        }
        if (path === '/Graph') {
          this.activeIndex = '/Graph'
        }
        if (path === '/Login') {
          this.logStatus = 'loginTag'
          this.activeIndex = '/Login'
        }
        if (path === '/Logout') {
          this.$router.push('/Welcome')
        }
      }
    }
  },
  created() {
    bus.$on('activeIndexChange', val => {
      this.activeIndex = val.item
      if (val.isLogin) {
        this.logStatus = 'logoutTag'
      }
    })
    bus.$on('logOut', () => {
      localStorage.removeItem('token')
      this.logStatus = 'welcomeTag'
      this.$router.push('/Welcome')
      this.activeIndex = '/Welcome'
    })
    this.activeIndex = location.hash.slice(1)
    if (this.activeIndex !== '/Welcome' && '/Login') {
      this.logStatus = 'logoutTag'
    }
    console.log(this.activeIndex)
  },
  components: {
    logoutTag,
    welcomeTag,
    loginTag
  }
}
</script>

<style lang="less" scoped>
.header-container {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
  .el-menu,
  .el-menu-item,
  .welcome-page-mark {
    border: 0;
  }
  .menu-container {
    display: flex;
    .welcome-page-mark {
      width: 20%;
    }
    .items-container {
      width: 80%;
      position: relative;
      display: flex;
      flex-direction: row-reverse;
    }
    .el-menu-item {
      height: 56px;
      display: flex;
      justify-content: center;
      width: 120px;
    }
    .is-active {
      height: 56px;
    }
  }
}
</style>
