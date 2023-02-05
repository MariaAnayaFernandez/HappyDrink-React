import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import {doc, getDoc} from "firebase/firestore"
import {db} from "../../../firebase/config"


export const ItemDetailContainer = () => {

    const [item,setItem] = useState(null)
    const [dataId] = useParams()

    useEffect (()=>{

        const docRef = doc(db, "cocteles", dataId)

        getDoc(docRef)
            .then(doc =>{
                setItem({...doc.data(), id: doc.id})
            })

     
    }, [dataId])

    return(
        <div>
            {
               item && <ItemDetail {...item}></ItemDetail>
            }
        </div>
    )
}