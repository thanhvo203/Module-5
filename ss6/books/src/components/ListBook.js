import { useEffect, useState } from "react";
import { getList } from "../service/BookService";
import { Link } from 'react-router-dom';
import axios from "axios";


function ListBook() {
    const [books, setBooks] = useState([]);



    useEffect(() => {
        const showList = async () => {
            const data = await getList();
            setBooks(data);
        }
        showList();
    }, [])

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3030/books/${id}`)
            .then(() => {
                alert("Delete Success");

                axios.get(`http://localhost:3030/books`)
                    .then(response => {
                        setBooks(response.data);
                    })
                    .catch(error => {
                        console.log(error);
                    });

            }).catch(error => {
                console.log(error);
            })
    }


    return (
        <>
            <h1>List Book</h1>
            <Link to={"/create"}><button>Create Book</button></Link>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Quanlity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.title}</td>
                                <td>{item.quanlity}</td>
                                <td>
                                    <Link to={`/update/${item.id}`}>
                                        <button>Update</button>
                                    </Link>
                                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}
export default ListBook;