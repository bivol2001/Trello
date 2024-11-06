import axios from "axios";
import { HttpClient } from "./api/api/http-client";

// const api = axios.create({
//     baseURL:"https://dev.dreamerz.net/",
// })

const api = new HttpClient({
  baseURL: "https://dev.dreamerz.net/",
});


api.instance.interceptors.request.use(
    (config) => {
        // config.headers['Content-Type'] = 'aplication/json' 
        console.log(config);
        
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

api.instance.interceptors.response.use(
    (response) => {
        console.log(response);
        
        return response.data
    },
    (error) => {
        if (error.response) {
            if (error.response.status === 404) {
                console.log("Nu s-o gasit datele")
            }
        }
    }
)

export default api.instance