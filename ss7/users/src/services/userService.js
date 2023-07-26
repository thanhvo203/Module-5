import axios from "axios"


export async function getUsers () {
    const res = await axios.get(`http://localhost:3030/user`);
    return res.data;
}

export async function deleteUser(id) {
    await axios.delete(`http://localhost:3030/user/${id}`);
}