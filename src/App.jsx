import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home,SingleProduct, NotFound } from './Pages';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {NavBar} from './Shared/NavBar'

const App = () => {
  return(
    <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='products/:productId' element={<SingleProduct/>} />
          <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;