
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListSong from './components/ListSong';
import Create from './components/Create';


function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListSong ></ListSong>}></Route>
        <Route path='/create' element={<Create />}></Route>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
