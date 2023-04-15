import { axiosInstance } from './axiosInstance'

import { LoginFormData, SignupFormData } from 'types'

export const register = (data: SignupFormData) => {
    return axiosInstance.post(`/v1/account/register`, data)
}

export const apilogin = (data: LoginFormData) => {
    return axiosInstance.post(`/v1/authenticate`, data)
}
export const addClinic = (data: LoginFormData) => {
    return axiosInstance.post(`/v1/clinics`, data)
}