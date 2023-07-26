import ListUser from './components/ListUser';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';



const App = () => {
  return (
     <BrowserRouter>
      <Routes>
        <Route path='/' Component={Navbar}></Route>
        <Route path='/user' Component={ListUser}></Route>
      </Routes>
     </BrowserRouter>
  );
};

export default App;
