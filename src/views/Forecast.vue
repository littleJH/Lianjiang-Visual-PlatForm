<template>
  <div class="container" :style="`height: ${containerHeight}px`">
    <graph></graph>
    <inputCard></inputCard>
  </div>
</template>

<script>
import graph from '@/components/fortcase/graph.vue'
import inputCard from '@/components/fortcase/form'
export default {
  data() {
    return {
      containerHeight: window.innerHeight - 57
    }
  },
  components: {
    graph,
    inputCard
  }
}
</script>

<style lang="less" scoped>
.container {
  position: absolute;
  top: 57px;
  width: 100%;
  display: flex;
}
</style>
