import {useState} from 'react'
import axios from "axios"
import uuid from "uuid"

const useFlip = (initialVal=false) => {
    const[value, setValue] = useState(initialVal)
    const toggle = () => {
        setValue(oldValue => !oldValue)
    }
    return [value, toggle];
}

function useAxios(url){
   const [data, setData] = useState([])

   const addCard = async () => {
        const res = await axios.get(url)
        setData([...data, {...res.data, id: uuid()}])
   }
    return [data, addCard]
}

export {useFlip, useAxios}