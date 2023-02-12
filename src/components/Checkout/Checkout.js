
import { useCuentaContext } from '../Context/CuentaContext';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Navigate } from 'react-router-dom';
import {db} from "../../firebase/config"
import { collection, addDoc } from 'firebase/firestore';
import "./Checkout.scss"


export const Checkout = () => {

    const { totalCantidad, totalCuenta, cuenta, emptyCuenta} = useCuentaContext()

    const [orderId, setOrderId] = useState(null)


    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        email: '',
        email2: ''
    })

    const handleImputChange = (e) => {
        setValues ({
            ...values,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (values.nombre.length < 3){
            return(<div>Nombre inválido</div>) 
        }

        if (values.apellido.length < 3){
            return(<div>Nombre inválido</div>)
        }

        if (values.telefono.length < 6){
            return(<div>Nombre inválido</div>)
        }

        if (values.email.length < 5){
            return(<div>Nombre inválido</div>)
        }

        if (values.email !== values.email2){
            return(<div>Nombre inválido</div>)
        }

        const orden = {
            cliente: values,
            items: cuenta,
            total: totalCuenta()
        }

        const ordersRef = collection (db, 'orders')
        addDoc (ordersRef, orden)
            .then((doc) => {
                setOrderId(doc.id)
                emptyCuenta()
            })
    }

    if (orderId){
     return (
        <div className='checkout'>
            <div className='chk-box'>
            <h2 className ="mje-fnl">¡Gracias por tu compra!</h2>
            <h2>Estámos preparando tus HappyDrinks, en unos minutos los recibirás en tu mesa.</h2>
                <h5>Referencia de orden: {orderId}</h5>
                <Button className='btn-dark' href="/">Volver</Button>

            </div>
                
            </div>
     )         
        
    }

    if (cuenta.length === 0){
        return <Navigate to="/"></Navigate>
    }

    return (
        <div className="checkout">
            <div className="chk-box">
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
                required={true}
                value={values.nombre}
                ></input>

                <p>Apellidos: </p>
                <input 
                className="form-control my-2"
                onChange={handleImputChange}
                type="text"
                name="apellido"
                required={true}
                value={values.apellido}
                ></input>

                <p>Teléfono: </p>
                <input 
                className="form-control my-2"
                onChange={handleImputChange}
                type="text"
                name="telefono"
                required={true}
                value={values.telefono}
                ></input>


                <p>E-mail:</p>
                <input 
                className="form-control my-2"
                onChange={handleImputChange}
                type="email"
                name="email"
                required={true}
                value={values.email}
                ></input> 

                <p>Validar E-mail:</p>
                <input 
                className="form-control my-2"
                onChange={handleImputChange}
                type="email"
                name="email2"
                required={true}
                value={values.email2}
                ></input> 

                <Button className='btn-dark' onClick={handleSubmit}>Hacer Pedido</Button>



            </form>
        </div>

        </div>
    )
}

