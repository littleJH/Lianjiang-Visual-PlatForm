import request from '@/util/request'

export const getLineData = (name, system, params, config) => {
  return request.get(`/data/${name}/${system}?${params}`, config)
}

export const getPieData = (name, system, field, config) => {
  return request.get(`/data/rowall/${name}/${system}/${field}`, config)
}

export const getNameList = (id, config) => {
  return request.get(`/map/${id}`, config)
}
