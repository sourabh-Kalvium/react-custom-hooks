import { useState } from "react";


let useSessionStorage = (key, value) => {
    let [session, setSession] = useState(() => {

        const storedValueSession = sessionStorage.getItem(key)
        return storedValueSession ? JSON.parse(storedValueSession) : value
    })

    let updateValue=(newval)=>{
        setSession(newval)
        sessionStorage.setItem(key,JSON.stringify(newval))

    }
    
    return [session,updateValue]


}

export default useSessionStorage