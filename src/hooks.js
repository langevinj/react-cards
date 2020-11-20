import {useState, useEffect} from 'react'
import axios from "axios"
import { formatPokemon, formatPlayingCard } from "./helpers"

const useFlip = (initialVal=false) => {
    const[value, setValue] = useState(initialVal)
    const toggle = () => {
        setValue(oldValue => !oldValue)
    }
    return [value, toggle];
}

function useAxios(keyName, url){
   const [responses, setResponses] = useLocalStorage(keyName)
   const addCard = async (name) => {
        const res = await axios.get(typeof(name) === 'string' ? `${url}${name}/` : `${url}`)
        const formattedData = typeof(name) === 'string' ? formatPokemon(res.data) : formatPlayingCard(res.data);
        setResponses(data => [...data, formattedData])
   }

   const clearData = () => setResponses([]);

    return [responses, addCard, clearData]
}

function useLocalStorage(keyName, initialValue = []){
    //If item is not already in local storage, get it
    if(localStorage.getItem(keyName) !== true){
        initialValue = JSON.parse(localStorage.getItem(keyName))
    } 
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        localStorage.setItem(keyName, JSON.stringify(value))
    }, [value, keyName]);

    return [value, setValue]
}

export default useLocalStorage

export { useFlip, useAxios, useLocalStorage }