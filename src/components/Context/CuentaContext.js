import { createContext, useContext, useEffect, useState } from "react";


export const CuentaContext = createContext()

export const useCuentaContext = () => {
  return useContext(CuentaContext)
}

const init = JSON.parse(localStorage.getItem('cuenta')) || []

export const CuentaProvider = ({children}) => {
  const [cuenta, setCuenta] = useState(init)
  
  const agregarCuenta = (item) => {

    const newCuenta = cuenta.reduce((acumulador, newItem) => {
      const siExiste = acumulador.find(
        item => item.id === newItem.id
      );
      if (siExiste) {
        return acumulador.map(item => {
          if (item.id === newItem.id) {
            return {
              ...item,
              cantidad: item.cantidad + newItem.cantidad,
            };
          }
          return item;
        });
      }
      return ([...acumulador, newItem]);
    }, [])

    newCuenta.push(item)
    setCuenta(newCuenta)

  }
  
  
    

  

  const removeItem = (id) => {
    setCuenta(cuenta.filter(item => item.id !== id))
  }

  const emptyCuenta = () => {
    setCuenta([])
  }
 
  const totalCuenta = () => {
    return cuenta.reduce((acc, item) => acc + item.precio * item.cantidad, 0)
  }

  const totalCantidad = ( )=>{
    return cuenta.reduce((acc, item)=> acc + item.cantidad, 0)
  }
    
  useEffect(() => {
    localStorage.setItem('cuenta', JSON.stringify(cuenta))
    }, [cuenta])

    return (
        <CuentaContext.Provider value={{
            cuenta,
            agregarCuenta,
            removeItem,
            emptyCuenta,
            totalCuenta,
            totalCantidad
            }}>
            {children}
        </CuentaContext.Provider>
    )
}



