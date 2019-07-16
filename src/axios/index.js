import axios from "axios";

//创建一个实例
const instance = axios.create({
  baseURL: '/api/',
  timeout: 1000
});

//拦截器
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});


export default instance