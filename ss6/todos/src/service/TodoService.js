import axios from 'axios';


export async function getList() {
    const resolve = await axios.get('http://localhost:8000/todos');
    return resolve.data;
}

export async function create(todo) {
    await axios.post('http://localhost:8000/todos', todo).then(() => {
            alert("Create Success");
    });
}