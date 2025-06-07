export interface LoginPayload {
  username: string
  password: string
  redirectUrl: string
  clientId: string
  responseType: string
  scopes: string
  state: string
  codeChallenge: string
  codeChallengeMethod: string
}
