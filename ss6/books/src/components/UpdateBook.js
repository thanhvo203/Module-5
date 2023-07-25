import React, { useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { updateBook, getBookById } from '../service/BookService';
import axios from 'axios';



const UpdateBook = () => {

   const [book, setBook] = useState({ title: '', quantity: '' });
   const navigate = useNavigate();

   const { id } = useParams();


   const getBook = async () => {
      const book = await getBookById(id)
      setBook(book);
   }

   useEffect(() => {
      getBook();
   }, [id]);
   
      const handleSubmit = async () => {
        await updateBook(id,book);
         navigate("/")
      };
      


   return (
      <div>
         <h1>Update Book</h1>
         <label>
            Title:
            <input type="text" value={book.title} onChange={(e) => setBook({ ...book, title: e.target.value })} />
         </label>
         <label>
            Quantity:
            <input type="number" value={book.quantity} onChange={(e) => setBook({ ...book, quantity: e.target.value })} />
         </label>
         <button onClick={handleSubmit}>Submit</button>
      </div>
   );
}

export default UpdateBook;