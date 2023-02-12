import ModalCuenta from '../ModalCuenta/ModalCuenta';
import {ModalEmptyCuenta} from '../ModalCuenta/ModalEmptyCuenta'
import { useCuentaContext } from '../Context/CuentaContext';
import './NavBar.scss'


  export const NavBar = (props) => {

    const { cuenta } = useCuentaContext()

    const modalCuenta =()=> {
      if (cuenta.length === 0){
        return(<ModalEmptyCuenta></ModalEmptyCuenta>)
      }else{
        return(<ModalCuenta></ModalCuenta>)
      }
    }

   


    return (
      <header className="header">
        
        <nav className="nav_bar navbar navbar-expand-lg nav-fix">

          <a href="/home"><img src={require("../../imagenes/logo.png") }alt="logo happydrink"></img></a>
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="div_nav collapse navbar-collapse menu-div" id="navbarNav">
            <a className="text_nav_bar nav-link" href="/">Inicio</a>
            <a className="text_nav_bar nav-link" href="/menu">Menú</a>
            <p className="nav-link">
             {modalCuenta()}
            </p>
          </div>
      

          
        </nav>

      </header>
    );
  }