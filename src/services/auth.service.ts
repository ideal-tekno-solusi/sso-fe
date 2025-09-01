import axios from "../lib/axios"
import type { LoginPayload } from "../types/auth.type"

export const AuthService = {
  login(payload: LoginPayload) {
    return axios.post("/api/v1/login", payload)
  },
}
