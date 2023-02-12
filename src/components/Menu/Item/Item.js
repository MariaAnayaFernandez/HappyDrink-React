import {ItemCount} from "../ItemCount/ItemCount"
import { useState } from "react"
import { useCuentaContext } from "../../Context/CuentaContext"
import { Link } from "react-router-dom"



export const Item = ({id, img, nombre, categoria, ingredientes, precio, stock}) =>{

    const {agregarCuenta} = useCuentaContext()

    const [cantidad, setCantidad] = useState(1)

    const handleAddItem = () => {
        const item={
            id, 
            img, 
            nombre, 
            categoria, 
            ingredientes, 
            precio, 
            stock,
            cantidad} 

        agregarCuenta(item)
         
    }

    return (
        <div className="menu-div">
            <img  src={require(`../../../imagenes/${img}`)}  className="card-img-top" alt="Gin Old Fashion"/>
            <div className="card-body">
                <h5 className="card-title titulo-tarjeta"> {nombre} </h5>
                <div className="ordenar">
                    <p className="cantidad">${precio}.00</p>
                    <hr></hr>
                        <div className="barra-orden">
                        
                          <ItemCount
                          cantidad={cantidad} 
                          max={stock}
                          setCantidad={setCantidad}
                          handleAddItem={handleAddItem}>
                          </ItemCount> 
                          
                        
                             <br></br>
                            <Link className="btn-ordenar" to={`/detalle/${id}`}>Ver Detalle</Link> 
                        </div>
                </div>
            </div>
        </div>
    )
}


