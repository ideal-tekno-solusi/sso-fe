export interface LoginPayload {
  username: string
  password: string
}

export interface LoginResponse {
  data: {
    authorize_url: string
  }
}
