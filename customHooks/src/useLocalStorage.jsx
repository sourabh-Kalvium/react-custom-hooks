import { useState } from "react"
import React from 'react'

function useLocalStorage(key,initialValue) {
   
    const [value,setValue]=useState(()=>{
        const storedValueLocal = localStorage.getItem(key)
        return storedValueLocal ? JSON.parse(storedValueLocal):initialValue


    })


    const updateValue = (newValue)=>{
        setValue(newValue)
        localStorage.setItem(key, JSON.stringify(newValue))
    }

    return [value,updateValue];
}

export default useLocalStorage