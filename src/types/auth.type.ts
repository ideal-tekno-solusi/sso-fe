export interface LoginPayload {
  username: string
  password: string
}

export interface LoginResponse {
  redirect_uri: string
  code: string
  state: string
}
