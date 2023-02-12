import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"
import {collection, getDocs, query, where} from "firebase/firestore"
import {db} from "../../../firebase/config"
import "./ItemListContainer.scss"


export const ItemListContainer = () =>{

  const [cocteles,setCocteles] = useState([])
  const [loading, setLoading] = useState(true)
  const {categoria} = useParams()

  useEffect(()=>{
    setLoading(true)

    const coctelesRef = collection(db, "cocteles")
    const q = categoria
      ? query(coctelesRef, where ("categoria", "==", categoria))
      : coctelesRef
      
      getDocs(q)
      .then((resp) =>{
        setCocteles(resp.docs.map((doc) => {
          return{
            ...doc.data(),
              id: doc.id
          }
        }))
      })
      .finally(()=>{
        setLoading(false)
      })
  
  }, [categoria])

 

  return(
    
<div>
  {
    loading 
    ? <h2>Cargando...</h2>
    :<ItemList cocteles={cocteles}/>
  }
  
</div>
  )
    
}