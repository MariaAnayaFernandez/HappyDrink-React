import "./ItemDetail.scss"
import Card from 'react-bootstrap/Card';
import {ItemCount} from "../ItemCount/ItemCount"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useCuentaContext } from "../../Context/CuentaContext"



export const ItemDetail = ( {id, img, nombre, categoria, ingredientes, precio, stock} ) => {

  const {agregarCuenta} = useCuentaContext()

  const [cantidad, setCantidad] = useState(1)

  
    const navigate = useNavigate()  
    const handleVolver = () =>{
      navigate(-1)
    }

    

   const handleAddItem = () => {
      const item ={
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
        <div >
        <h5 className="detalle-title"> {nombre} </h5>
        <div className="card-detalle">
        <Card style={{ width: '25rem' }}>
                    <img  src={require(`../../../imagenes/${img}`)}  className="card-img-top" alt="Gin Old Fashion"/>
                    <div className="detalle-body">
    
                      <p>Categoría: {categoria}</p>
                      <p>{ingredientes}</p>
                      <div className="ordenar">
                        <p className="cantidad">${precio}.00</p>
                        <hr></hr>

                        
                          <ItemCount
                          cantidad={cantidad} 
                          max={stock}
                          setCantidad={setCantidad}
                          handleAddItem={handleAddItem}>
                          </ItemCount>
                         

                        
                           
                        <br></br>
                        <Link className="btn-ordenar" onClick={handleVolver}>Volver</Link> 
                      </div>
                    </div>
        </Card>
        </div>
        </div>
    )
}