// import axios from "axios";
import { access } from "fs";
import { HttpClient } from "./api/http-client";
import { getRefreshToken } from "../request";

// const api = axios.create({
//     baseURL:"https://dev.dreamerz.net/",
// })

const api = new HttpClient({
    baseURL: "https://dev.dreamerz.net/",
    headers: {
        authorization:'Bearer '+localStorage.getItem("accessToken")
    }
});


api.instance.interceptors.request.use(
    (config) => {
        // config.headers['Content-Type'] = 'aplication/json' 
        const token = localStorage.getItem("accessToken")
        if (token) {
            config.headers.authorization = 'Bearer '+ token
        }
        
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

api.instance.interceptors.response.use(
    (response) => {
        console.log(response);
        
        return response
    },
    (error) => {
        if (error.response) {
            if (error.response.status === 404) {
                console.log("Nu s-o gasit datele")
            }
            if (error.response.status === 401) {
      getRefreshToken()
        .then((rs: { data: { accessToken: any; refreshToken: any; }; }) => {
          const { accessToken, refreshToken } = rs.data;
          localStorage.setItem("refreshToken", refreshToken);
          localStorage.setItem("accessToken", accessToken);

        
        })
       
    }

        }
    }
)

export default api.instance