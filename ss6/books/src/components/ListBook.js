import { useEffect, useState } from "react";
import { deleteBook, getList } from "../service/BookService";
import { Link } from 'react-router-dom';


function ListBook() {
    const [books, setBooks] = useState([]);
    const [ flag , setFlag ] = useState(false)

    const list = () => {
        const showList = async () => {
            const data = await getList();
            setBooks(data);
        }
        showList();
    }

    useEffect(list, [flag])

        const handleDelete = async (id) => {
            const confirm = window.confirm("Do you wanna delete this");
                if (confirm) {
                    setFlag(!flag);
                    await deleteBook(id).then(() => {
                        alert("Delete Success");
                    })
                }
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
                                <td>{item.quantity}</td>
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