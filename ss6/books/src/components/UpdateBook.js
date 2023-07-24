import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import axios from 'axios';



const UpdateBook = () => {

   const [book, setBook] = useState({ title: '', quantity: '' });

   const [submitted, setSubmitted] = useState(false);


  const {id} = useParams();
  useEffect(() => {
   axios.get(`http://localhost:3030/books/${id}`)
     .then(response => {
       setBook(response.data);
     })
     .catch(error => {
       console.log(error);
     });
 }, [id]);

 const handleSubmit = () => {
   axios.put(`http://localhost:3030/books/${id}`, book)
     .then( () => {
        alert("Update Success");
        setSubmitted(true);
     })
     .catch(error => {
       console.log(error);
     });
 };
   if (submitted === true) {
      <redirect to="/books" />;
   }

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
};

export default UpdateBook;