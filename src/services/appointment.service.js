import axios from "axios";

const API_URL = "/api/appointments";

export async function getAppointments() {
    const response = await axios.get(API_URL);
    return response.data;
}

export async function getAppointment(id) {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
}

export async function createAppointment(data) {
    const response = await axios.post(API_URL, data);
    return response.data;
}

export async function updateAppointment(id, data) {
    const response = await axios.put(`${API_URL}/${id}`, data);
    return response.data;
}

export async function deleteAppointment(id) {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
}
