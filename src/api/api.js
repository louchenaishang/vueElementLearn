import axios from 'axios'
import addr from './addr'
import sign from '../common/sign'
import NProgress from 'nprogress'

// `withCredentials` indicates whether or not cross-site Access-Control requests
// should be made using credentials
// default false
// 跨域请求设置服务端返回的cookie
axios.defaults.withCredentials = true

//拦截器,请求
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  NProgress.start()
  sign(config)
  return config
}, function (error) {
  // Do something with request error
  NProgress.done()
  return Promise.reject(error)
})

//拦截器,响应
axios.interceptors.response.use(function (response) {
  // Do something with response data
  NProgress.done()
  return response
}, function (error) {
  NProgress.done()
  // Do something with response error
  return Promise.reject(error)
})


let base = addr

const requestLogin = params => {
  return axios.post(`${base}/login`, params)
}

const getUserList = params => {
  return axios.get(`${base}/users`, {params: params})
}

const getUserListPage = params => {
  return axios.get(`${base}/users`, {params: params})
}

const removeUser = params => {
  return axios.delete(`${base}/users/one`, {params: params})
}

const editUser = params => {
  return axios.put(`${base}/users/one`, params)
}

const addUser = params => {
  return axios.post(`${base}/users/one`, params)
}

const getUser = params => {
  return axios.get(`${base}/users/one`, {params: params})
}

const getDeptList = params => {
  return axios.get(`${base}/depts`, {params: params})
}

const getDeptListPage = params => {
  return axios.get(`${base}/depts`, {params: params})
}

const removeDept = params => {
  return axios.delete(`${base}/depts/one`, {params: params})
}

const editDept = params => {
  return axios.put(`${base}/depts/one`, params)
}

const addDept = params => {
  return axios.post(`${base}/depts/one`, params)
}

const getDept = params => {
  return axios.get(`${base}/depts/one`, {params: params})
}

const getApiVersion = params => {
  return axios.get(`${base}/version`, params)
}


//对外暴露的api方法
const Api = {
  requestLogin,
  getUserList,
  getUserListPage,
  removeUser,
  editUser,
  addUser,
  getUser,
  getDeptList,
  getDeptListPage,
  removeDept,
  editDept,
  addDept,
  getDept,
  getApiVersion,
}

export default Api
