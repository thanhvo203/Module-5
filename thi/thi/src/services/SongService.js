import axios from 'axios';

export async function getListSong() {
    const resolver = await axios.get(`http://localhost:8080/songs`);
    return resolver.data;
}
export async function createSong(song) {
    const resolver = await axios.post(`http://localhost:8080/songs`,song);
    return resolver.data;
}
export async function deleteSong(id) {
    const resolver = await axios.delete(`http://localhost:8080/songs/${id}`);
    return resolver.data;
}
export async function searchSong(name) {
    const resolver = await axios.get(`http://localhost:8080/songs?name_like=`+name);
    return resolver.data;
}
export async function getSongById(id) {
    const resolver = await axios.get(`http://localhost:8080/songs/${id}`);
    return resolver.data;
}
export async function updateSong(song) {
    const resolver = await axios.put(`http://localhost:8080/songs}`, song);
    return resolver.data;
}