import axiosClient from 'api/axiosClient';

export const getAllClinics = async () => {
  return axiosClient.get('/clinics').then((res) => res.data);
};

export const deleteClinic = (id: string) => {
  return axiosClient.delete(`/clinics/${id}`);
};

export const addClinic = (data: FormData) => {
  return axiosClient.post('/clinics', data);
};

export const updateClinic = (data: { id: string }) => {
  return axiosClient.put(`/v1/clinics/${data.id}`, data);
};
