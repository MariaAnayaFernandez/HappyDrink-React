import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useCuentaContext } from "../../../Context/CuentaContext"
import ItemCount from "../../ItemCount/ItemCount"


export const ItemDetail = ( {img, nombre, menu, ingredientes, precio, categoria} ) => {

    const { agregarACuenta, isInCart } = useCuentaContext()

    const [cantidad, setCantidad] = useState(1)

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    const handleAgregar = () => {
        const item = {
            img, 
            nombre,
            menu,
            ingredientes,
            precio,
            categoria,
            cantidad
        }

        agregarACuenta(item)
    }

    return (
        <div className="menu-div">
                    <img  src={require(`../../../imagenes/${img}`)}  className="card-img-top" alt="Gin Old Fashion"/>
                    <div className="card-body">
                      <h5 className="card-title titulo-tarjeta"> {nombre} </h5>
                      <p className="card-text">Categoría: {categoria}</p>
                      <p className="card-text">{ingredientes}</p>
                      <div className="ordenar">
                        <p className="cantidad">${precio}.00</p>
                        <button className="btn-ordenar">Ordenar</button> 
                      </div>
                    </div>



            {
                !isInCart(nombre)
                    ? <ItemCount 
                            cantidad={cantidad}
                            setCantidad={setCantidad}
                            onAdd={handleAgregar}
                        />
                    : <Link to="/cart" className="btn btn-success">Terminar mi compra</Link>
            }
            


            
            <button className="btn btn-primary" onClick={handleVolver}>Volver</button>
        </div>
    )
}





