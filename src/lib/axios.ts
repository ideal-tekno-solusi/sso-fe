import ax from "axios"

const axios = ax.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 15000,
})

export default axios
