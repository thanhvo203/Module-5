import axios from 'axios';



export async function getList() {
    const resolve = await axios.get(`http://localhost:3030/books`);
    return resolve.data;
}

export async function createBook(book) {
    await axios.post(`http://localhost:3030/books`, book);
}
export async function deleteBook(id) {
    await axios.delete(`http://localhost:3030/books/${id}`);
}
export async function updateBook(id, book){
    await axios.put(`http://localhost:3030/books/`+id, book);
}
export async function getBookById(id) {
    const resolve = await axios.get(`http://localhost:3030/books/`+id);
    return resolve.data;
}

