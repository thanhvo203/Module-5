import axios from 'axios';



export async function getList() {
    const resolve = await axios.get(`http://localhost:3030/books`);
    return resolve.data;
}

export async function createBook(book) {
    

    await axios.post(`http://localhost:3030/books`, book).then(() => {

        alert("Create Success");
            
    })
}

