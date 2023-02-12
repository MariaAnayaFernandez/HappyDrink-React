
import { useCuentaContext } from '../Context/CuentaContext';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

import "./Checkout.scss"

export const Checkout = () => {

    const { totalCantidad, totalCuenta} = useCuentaContext()

    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        email: ''
    })

    const handleImputChange = (e) => {
        setValues ({
            ...values,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(values)


    }

    return (
        <div className="checkout">
            <h2>Terminar compra</h2> 
            <hr></hr>
            <h4>HappyDrinks: {totalCantidad()}</h4>   
            <h4>Total: ${totalCuenta()}.00 MXN</h4>
            <hr></hr>
            <h4>Tus Datos:</h4>
            <form >
                <p>Nombre (s): </p>
                <input 
                className="form-control my-2"
                onChange={handleImputChange}
                type="text"
                name="nombre"
                value={values.nombre}
                ></input>

                <p>Apellidos: </p>
                <input 
                className="form-control my-2"
                onChange={handleImputChange}
                type="text"
                name="apellido"
                value={values.apellido}
                ></input>

                <p>Teléfono: </p>
                <input 
                className="form-control my-2"
                onChange={handleImputChange}
                type="text"
                name="telefono"
                value={values.telefono}
                ></input>


                <p>E-mail:</p>
                <input 
                className="form-control my-2"
                onChange={handleImputChange}
                type="email"
                name="email"
                value={values.email}
                ></input> 

                <Button className='btn-dark' onClick={handleSubmit}>Hacer Pedido</Button>



            </form>


        </div>
    )
}

