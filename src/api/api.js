import axios from "axios"

export const api = axios.create({
  baseURL: "https://hungry-liskov-ad36fc.netlify.app/.netlify/functions"
})
