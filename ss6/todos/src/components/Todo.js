import React, { useEffect, useState } from 'react';

import { create, getList } from '../service/TodoService';

function Todo() {

    const [list, setList] = useState([]);

    const [newList, setNewList] = useState('');
    
    const showList = async () => {
        const data = await getList();
        setList(data);
    }
    
    useEffect(() => {
        showList();
    }, []);


    const handleChange = async (event) => {
        setNewList(event.target.value);
    }

    const handleSubmit = async () => {
        await create ({
            fullName : newList
        })
        setNewList('');
        const data = await getList();
        setList(data);
    }

    return (
        <>
            <h1>Todo List</h1>
            <div>
                <input type='text' value={newList} onChange={handleChange}></input>
                <button type='submit' onClick={handleSubmit}>Submit</button>
            </div>
            <table>
                <tbody>
                {list.map((item) => {
                    return (
                        <tr key={item.id}>    
                            <td>{item.fullName}</td>   
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </>
    )
}
export default Todo;