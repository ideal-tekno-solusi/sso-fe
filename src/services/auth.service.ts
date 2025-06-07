import axios from "../lib/axios"
import type { LoginPayload } from "../types/auth.type"

export const AuthService = {
  login(payload: LoginPayload) {
    return axios.post("/auth/api/login", payload)
  },
}
