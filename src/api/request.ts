import api from "./api"
export const getalldeams=async() => {
    return await api.get("api/v1/dream");
}