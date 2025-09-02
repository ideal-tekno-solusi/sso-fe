import axios from "../lib/axios"
import type { LoginPayload, LoginResponse } from "../types/auth.type"

export const AuthService = {
  login(payload: LoginPayload) {
    return axios.post<LoginResponse>("/api/v1/login", payload, {
      withCredentials: true
    })
  },
}
