import axios from "axios";

const api = axios.create({
    baseURL:process.env.REACT_APP_BASE_URL,
})

api.interceptors.request.use(
    (config) => {
        config.headers['Content-Type'] = 'aplication/json' 
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

api.interceptors.response.use(
    (response) => {
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

export default {
    get: api.get,
    post: api.post,
    put: api.put,
    delete: api.delete
}
