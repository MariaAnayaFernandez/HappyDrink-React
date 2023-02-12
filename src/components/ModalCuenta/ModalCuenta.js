
import React, { useState } from 'react';
import { useCuentaContext } from '../Context/CuentaContext';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import './ModalCuenta.scss'
import {FaRegTrashAlt} from 'react-icons/fa';


function ModalCuenta() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  const { cuenta, totalCuenta, removeItem, totalCantidad} = useCuentaContext()

    return (
      <>
        <Button variant="dark" onClick={handleShow}>
        <ReceiptLongIcon></ReceiptLongIcon> {totalCantidad()}
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Tu cuenta es:</Modal.Title>
          </Modal.Header>
          <Modal.Body >
              {cuenta.map(item => (
              <div key={item.id} >
                  <div className="divCuenta">
                    <div>
                      <h5>{item.nombre}</h5>
                      <p>cantidad:{item.cantidad}</p>
                      <p>precio: ${item.precio}.00 MXN</p>
                    </div>
                    <p><button onClick={()=> removeItem(item.id)} className="btn-trash btn btn-danger "><FaRegTrashAlt/></button></p>
                  </div>
                  <hr></hr>
              </div>
            

            ))
            
            }
          
          <h4>Total: ${totalCuenta()}</h4>
            
          </Modal.Body>
          <Modal.Footer>
          <Button href="/checkout" variant="outline-dark" onClick={handleClose}>
              Finalizar Compra
            </Button>
          
            <Button variant="outline-dark" onClick={handleClose}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }


export default ModalCuenta;