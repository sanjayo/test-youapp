import apiService from "@/api/axios";

export const loginUser = async (data) => {
  try {
    const response = await apiService.post(`/login`, data);
    return response.data;
  } catch (error) {
    throw error.response ?? error;
  }
};

export const registerUser = async (data) => {
  try {
    const response = await apiService.post(`/register`, data);
    return response.data;
  } catch (error) {
    throw error.response ?? error;
  }
};

export const getProfile = async () => {
  try {
    const response = await apiService.get(`/getProfile`);
    return response.data;
  } catch (error) {
    throw error.response ?? error;
  }
};

export const updateProfile = async (data) => {
  try {
    const response = await apiService.put(`/updateProfile`, data);
    return response.data;
  } catch (error) {
    throw error.response ?? error;
  }
};
