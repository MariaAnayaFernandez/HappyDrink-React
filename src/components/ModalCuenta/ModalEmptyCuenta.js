import React, { useState } from 'react';
import { useCuentaContext } from '../Context/CuentaContext';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import './ModalCuenta.scss'



export const ModalEmptyCuenta = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  const { totalCantidad} = useCuentaContext()

    return (
      <>
        <Button variant="dark" onClick={handleShow}>
        <ReceiptLongIcon></ReceiptLongIcon> {totalCantidad()}
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Tu cuenta está vacía</Modal.Title>
          </Modal.Header>
          <Modal.Body >
              <h5>¿Qué deseas beber hoy?</h5>
            
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-dark" onClick={handleClose}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }


