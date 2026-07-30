import axios from "axios";

const API_URL = "/api/clientes";

export async function getClientes() {
    const response = await axios.get(API_URL);
    return response.data;
}

export async function createCliente(data) {
    const response = await axios.post(API_URL, data);
    return response.data;
}

export async function updateCliente(id, data) {
    const response = await axios.put(`${API_URL}/${id}`, data);
    return response.data;
}

export async function deleteCliente(id) {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
}
