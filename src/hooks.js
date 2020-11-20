import {useState} from 'react'

const useFlip = (initialVal=false) => {

    const[value, setValue] = useState(initialVal)
    const toggle = () => {
        setValue(oldValue => !oldValue)
    }

    return [value, toggle];
}

export {useFlip}