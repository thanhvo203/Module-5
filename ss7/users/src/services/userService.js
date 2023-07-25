import axios from "axios"

axios.defaults.baseURL = 'http://localhost:3030';

export async function getUsers () {
    const res = await axios.get(`http://localhost:3030/user`);
    return res.data;
}

export async function deleteUser(id) {
    await axios.delete(`http://localhost:3030/user/${id}`);
}