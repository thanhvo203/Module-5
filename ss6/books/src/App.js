import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListBook from "./components/ListBook";
import UpdateBook from "./components/UpdateBook";
import CreateBook from "./components/CreateBook";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={ListBook}></Route>
        <Route path="/update/:id" Component={UpdateBook}></Route>
        <Route path="/create" Component={CreateBook}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
