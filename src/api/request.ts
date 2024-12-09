import axios from "axios";
import api from "./api/api";
import {
  LoginDto,
  RegisterDto,
  TokensDto,
  UserDto,
} from "./api/api/data-contracts";

export const getalldeams = async () => {
  return await api.get("/api/v1/p/dreams");
};
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

export const login = async ({ email, password }: LoginDto) => {
  return await api.post<TokensDto>("/api/v1/auth/login", {
    email,
    password,
  });
};

export const getRefreshToken = async () => {
  return await axios.get<TokensDto>("/api/v1/auth/refresh", {
    headers: {
      authorization: "Bearer " + localStorage.getItem("refreshToken"),
    },
  });
};
export const getUser = async () => {
  return await axios.get<any>("/api/v1/auth/profile");
};
