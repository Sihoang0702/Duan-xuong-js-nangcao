import { data } from "autoprefixer";
import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3000/",
});


// Add a request interceptor
instance.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

// Add a response interceptor
instance.interceptors.response.use(function ({data}) {
    
    return data;
  }, function (error) {
   
    return Promise.reject(error);
  });
export default instance;
