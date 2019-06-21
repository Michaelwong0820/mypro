import Vue from 'vue'
import axios from 'axios'

//设置统一路径
axios.defaults.baseURL = 'https://www.zhengzhicheng.cn/api/public/v1/'
//使用适配器
axios.defaults.adapter = function (config) {
    return new Promise((resolve, reject) => {
        wx.request({
          url: config.url, //开发者服务器接口地址",
          data: config.data, //请求的参数",
          method: config.method,
          dataType: "json", //如果设为json，会尝试对返回的数据做一次 JSON.parse
          success: res => {
              resolve(res)
          },
          fail: (err) => {
              reject(err)
          },
          complete: () => {}
        });
      });
}

//添加到vue原型中
Vue.prototype.$https = axios