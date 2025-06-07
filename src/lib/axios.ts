import ax from "axios"

const axios = ax.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000,
})

export default axios
