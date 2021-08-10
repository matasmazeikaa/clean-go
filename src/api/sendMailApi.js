import { api } from "./api"

const SEND_MAIL_API = "/emails/send"

export const sendMailApi = (data) => api.post(SEND_MAIL_API, data)
