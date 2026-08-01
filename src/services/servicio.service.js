import axios from "axios";

const API_URL = "/api/servicios";

export async function getServicios() {
    const response = await axios.get(API_URL);
    return response.data;
}

export async function getServicio(id) {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
}

export async function createServicio(data) {
    const response = await axios.post(API_URL, data);
    return response.data;
}

export async function updateServicio(id, data) {
    const response = await axios.put(`${API_URL}/${id}`, data);
    return response.data;
}

export async function deleteServicio(id) {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
}
