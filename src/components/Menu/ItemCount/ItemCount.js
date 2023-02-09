

export const ItemCount = ({max, cantidad, setCantidad, handleAddItem}) => {
    

    const handleRestar = () =>{
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad +1)
    }

    return (
        <div>
            <button onClick={handleRestar}className="btn-ordenar">-</button>
            <span className="btn-ordenar">{cantidad}</span>
            <button onClick={handleSumar}className="btn-ordenar">+</button>
            <button onClick={handleAddItem}className="btn-ordenar">Ordenar</button> 
        </div>
    )
    
}