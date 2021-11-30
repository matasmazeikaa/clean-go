import { api } from './api';

const SEND_MAIL_API = '/sendMail';

export const sendMailApi = (data) => api.post(SEND_MAIL_API, JSON.stringify(data));
