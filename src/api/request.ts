import api from "./api"
import { RegisterDto, TokensDto } from "./api/api/data-contracts";

export const getalldeams = async () => {
    return await api.get("/api/v1/p/dreams");
}
// export const register = async (email: string, password: string) => {
    
//     return await api.post("/api/v1/auth/register", {
//         email,
//         password
//     })
// }
export const register = async ({ email, password }: RegisterDto) => {
  return await api.post<TokensDto>("/api/v1/auth/register", {
    email,
    password,
  });
};
