import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./components/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { ItemDetailContainer } from './components/Menu/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './components/Menu/ItemListContainer/ItemListContainer';
import { CuentaProvider } from "./components/Context/CuentaContext"
import { Checkout } from './components/Checkout/Checkout';

function App() {

  return (
    <CuentaProvider>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/menu" element={<ItemListContainer/>}/>
        <Route path="/menu/:categoria" element={<ItemListContainer/>}/>
        <Route path="/detalle/:itemId" element={<ItemDetailContainer/>}/>
        <Route path="/checkout" element={<Checkout/>}></Route>
        <Route path="*" element={<Navigate to= {"/"} /> }/>
      </Routes>
    <Footer/>
    </BrowserRouter>
    </CuentaProvider>
  );
}

export default App;