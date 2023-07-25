import React, { useState } from 'react';

import { createBook } from '../service/BookService';
import { useNavigate } from 'react-router-dom';



const CreateBook = () => {

   const [book, setBook] = useState({ title: '', quantity: '' });


   const navigate = useNavigate();
   const handleSubmit = () => {
      createBook(book).then(() => {
         navigate("/")
      })
   };

   return (
      <div>
         <h1>Create a new Book</h1>
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
};

export default CreateBook;