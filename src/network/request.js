import axios from 'axios'
export function request(config) {
  const instance = axios.create({
    baseURL:'http://152.136.185.210:7878/api/hy66'
    // baseURL: 'https://www.haloapi.com',
    // headers: {
    //   "Accept-Language": "zh",
    //   "Ocp-Apim-Subscription-Key": "41ebd915861541819dc803e3eddfdeed"
    // }
  })
  //拦截器
  instance.interceptors.request.use(config => {
    // console.log(config);
    return config
  }, err => {
    console.log(err);
  })

  //响应拦截
  instance.interceptors.response.use(config=>{
    return config.data
  }),err =>{
    console.log(err);
  }
  return instance(config)
}