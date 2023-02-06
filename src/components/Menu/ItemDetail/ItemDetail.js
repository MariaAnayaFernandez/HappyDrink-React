import "./ItemDetail.scss"
import Card from 'react-bootstrap/Card';

export const ItemDetail = ( {img, nombre, categoria, ingredientes, precio} ) => {

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
                        <button className="btn-ordenar">Ordenar</button> 
                        <a className="btn-ordenar" href={`/menu`}>Menú</a> 
                      </div>
                    </div>
        </Card>
        </div>
        </div>
    )
}