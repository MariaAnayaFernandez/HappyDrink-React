import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./components/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { ItemDetailContainer } from './components/Menu/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './components/Menu/ItemListContainer/ItemListContainer';
import { ItemList } from "./components/Menu/ItemList/ItemList"


function App() {
  return (

    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/menu" element={<ItemListContainer/>}/>
        <Route path="*" element={<Navigate to ={"/"}/>}/>
     
        
      </Routes>
    
    <Footer/>

    </BrowserRouter>
  );
}

export default App;