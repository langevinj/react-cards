import {useState} from 'react'
import axios from "axios"
import { formatPokemon, formatPlayingCard } from "./helpers"

const useFlip = (initialVal=false) => {
    const[value, setValue] = useState(initialVal)
    const toggle = () => {
        setValue(oldValue => !oldValue)
    }
    return [value, toggle];
}

function useAxios(url){
   const [data, setData] = useState([])

   const addCard = async (name) => {
        const res = await axios.get(typeof(name) === 'string' ? `${url}${name}/` : `${url}`)
        const formattedData = typeof(name) === 'string' ? formatPokemon(res.data) : formatPlayingCard(res.data);
        setData([...data, formattedData])
   }

   const clearData = () =>{
       setData([])
   }

    return [data, addCard, clearData]
}

export {useFlip, useAxios}