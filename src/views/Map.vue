<template>
  <div class="container" :style="'height: ' + containerHeight + 'px;'">
    <!-- 切换地图类型 -->
    <div class="btns">
      <el-radio-group v-model="btnLabel" size="medium">
        <el-radio-button label="标准地图"></el-radio-button>
        <el-radio-button label="卫星地图"></el-radio-button>
      </el-radio-group>
    </div>
    <!-- 地图容器 -->
    <div class="map">
      <baidu-map
        class="bm-view"
        :center="{ lng: 116.45173120555876, lat: 23.260721350209432 }"
        :zoom="13"
        scroll-wheel-zoom
        inertial-dragging
        :mapType="mapType"
      >
        <!-- 比例尺 -->
        <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
        <!-- 地图导航 -->
        <bm-navigation anchor="BMAP_ANCHOR_BOTTOM_RIGHT"></bm-navigation>
        <!-- 地图概览 -->
        <bm-overview-map
          anchor="BMAP_ANCHOR_BOTTOM_LEFT"
          :isOpen="true"
          :size="overviewSize"
        ></bm-overview-map>
        <!-- 自定义覆盖物 -->
        <MyOVerlay
          v-for="item in coordinate"
          :key="item.name"
          :lng="item.lng"
          :lat="item.lat"
          :text="item.name"
          :active="item.active"
          :name="item.name"
          :waterQuulity="item.waterQuulity"
          :monitorTime="item.monitorTime"
          :oxygen="item.oxygen"
          :ammonianitrogen="item.ammonianitrogen"
          :phosphorus="item.phosphorus"
          :dissolvedOxygen="item.dissolvedOxygen"
          @mouseover.native="handlerMouseover(item)"
          @mouseleave.native="item.active = false"
        >
        </MyOVerlay>
      </baidu-map>
    </div>
  </div>
</template>

<script>
import MyOVerlay from '@/components/mapOverlay/MyOverlay.vue'
export default {
  data() {
    return {
      coordinate: [
        {
          name: '青洋山桥',
          lng: '116.32000134328248',
          lat: '23.303793637902505'
        },
        {
          name: '新溪西村',
          lng: '116.307448668539',
          lat: '23.264368956126617'
        },
        {
          name: '万兴桥',
          lng: '116.3328114412058',
          lat: '23.247270741627563'
        },
        {
          name: '流仙学校',
          lng: '116.34593545021862',
          lat: '23.291831657267117'
        },
        {
          name: '仙马闸',
          lng: '116.36149430407302',
          lat: '23.30443282189668'
        },
        {
          name: '华侨学校',
          lng: '116.43190383911134',
          lat: '23.273685461850604'
        },
        {
          name: '港洲桥',
          lng: '116.3803722297136',
          lat: '23.27359648710231'
        },
        {
          name: '云陇',
          lng: '116.34378921711287',
          lat: '23.339181691960693'
        },
        {
          name: '北港水',
          lng: '116.8492953478606',
          lat: '23.44850945130801'
        },
        {
          name: '官田水',
          lng: '116.42922845040792',
          lat: '23.36114703987144'
        },
        {
          name: '北港河闸'
        },
        {
          name: '峡山大溪',
          lng: '116.43310546875001',
          lat: '23.250502583420957'
        },
        {
          name: '井仔湾闸',
          lng: '116.48048400878908',
          lat: '23.262653058970116'
        },
        {
          name: '东北支流',
          lng: '116.39465332031251',
          lat: '23.2063546007227'
        },
        {
          name: '西埔桥闸',
          lng: '116.4298439025879',
          lat: '23.221321123931737'
        },
        {
          name: '五福桥',
          lng: '116.46314620971681',
          lat: '23.219449079603343'
        },
        {
          name: '成田大寮',
          lng: '116.49971008300783',
          lat: '23.20004355025036'
        },
        {
          name: '新坛港',
          lng: '116.53541564941406',
          lat: '23.180456366974873'
        },
        {
          name: '瑶池港',
          lng: '116.5584182739258',
          lat: '23.190082009524147'
        },
        {
          name: '护城河闸',
          lng: '116.60356521606447',
          lat: '23.276523904502344'
        },
        {
          name: '和平桥',
          lng: '116.48786544799806',
          lat: '23.260123178896336'
        },
        {
          name: '海门湾桥闸',
          lng: '116.62193298339844',
          lat: '23.2156418281386'
        }
      ],
      activeOverlay: 0,
      overlayList: [
        {
          id: 0,
          position: { lng: 116.59173120555876, lat: 23.230721350209432 },
          active: false,
          name: '井仔湾闸站',
          waterQuulity: '1',
          monitorTime: '2',
          oxygen: '3',
          ammonianitrogen: '4',
          phosphorus: '5',
          dissolvedOxygen: '6'
        }
      ],
      btnLabel: '标准地图',
      mapType: 'BMAP_NORMAL_MAP',
      overviewSize: {
        width: 200,
        height: 150
      },
      containerHeight: window.innerHeight - 57
    }
  },
  methods: {
    handlerMouseover(item) {
      item.active = true
      this.activeOverlay = item.id
    }
  },
  watch: {
    btnLabel(newVal) {
      newVal === '标准地图'
        ? (this.mapType = 'BMAP_NORMAL_MAP')
        : (this.mapType = 'BMAP_SATELLITE_MAP')
    },
    'overlayList.active'(newVal) {}
  },
  components: {
    MyOVerlay
  },
  created() {
    window.addEventListener('resize', () => {
      this.containerHeight = window.innerHeight - 57
    })
  }
}
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  position: absolute;
  top: 56px;
  z-index: 0;
  .btns {
    position: absolute;
    z-index: 10;
    top: 20px;
    left: 20px;
  }

  .map {
    height: 100%;
    width: 100%;
    .bm-view {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
