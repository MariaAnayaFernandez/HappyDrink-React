import { createContext, useContext, useEffect, useState } from "react";


export const CuentaContext = createContext()

export const useCuentaContext = () => {
    return useContext(CuentaContext)
}

const init = JSON.parse(localStorage.getItem('cuenta')) || []

export const CuentaProvider = ({children}) => {
    const [cuenta, setCuenta] = useState(init)

    const agregarCuenta = (item) => {
      setCuenta([...cuenta, item])
    }
  
    const removerItem = (id) => {
      setCuenta( cuenta.filter(item => item.id !== id) )
    }
  
    const enCuenta = (id) => {
      return cuenta.some(item => item.id === id)
    }
  
    const cuentaVacia = () => {
      setCuenta([])
    }
  
    const totalCuenta = () => {
      return cuenta.reduce((acc, item) => acc + item.precio * item.cantidad, 0)
    }

    const totalCantidad = () => {
        return cuenta.reduce((acc, item) => acc + item.cantidad, 0)
    }

    useEffect(() => {
      localStorage.setItem('cuenta', JSON.stringify(cuenta))
    }, [cuenta])

    return (
        <CuentaContext.Provider value={{
            cuenta,
            agregarCuenta,
            removerItem,
            enCuenta,
            cuentaVacia,
            totalCuenta,
            totalCantidad
        }}>
            {children}
        </CuentaContext.Provider>
    )
}



