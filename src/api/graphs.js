import request from '@/util/request'

export const getLineData = (name, system, params, config) => {
  // 拦截器
  request.interceptors.response.use((res) => {
    if (res.data.code === 201) {
      this.$message.warning('登录已过期，请重新登录')
      this.$router.push('/login')
      return
    }

    if (res.data.code === 400) {
      this.$message.warning('数据缺失')
      this.myChart.hideLoading()
      return
    }
    return res
  })
  return request.get(`/data/${name}/${system}?${params}`, config)
}

export const getPieData = (name, system, field, config) => {
  return request.get(`/data/rowall/${name}/${system}/${field}`, config)
}

export const getNameList = (id, config) => {
  return request.get(`/map/${id}`, config)
}
