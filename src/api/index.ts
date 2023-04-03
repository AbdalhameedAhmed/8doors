import axios from 'axios';
const baseURL = `http://localhost:9999/clinic-management`

import { LoginFormData, SignupFormData } from 'types'

export const register = (data: SignupFormData) => {
    return axios.post(`${baseURL}/v1/account/register`, data)
}

export const apilogin = (data: LoginFormData) => {
    return axios.post(`${baseURL}/v1/authenticate`, data)
}