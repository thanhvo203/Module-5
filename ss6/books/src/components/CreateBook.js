import React, { useState } from 'react';

import { createBook } from '../service/BookService';



const CreateBook = () => {

   const [book, setBook] = useState({ title: '', quantity: '' });

   const [submitted, setSubmitted] = useState(false);




   const handleSubmit = () => {
      createBook(book)
      setSubmitted(true)
   };
   if (submitted) {
      <redirect to="/books" />;
   }

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