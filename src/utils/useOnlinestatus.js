//check online ststus
//return online stutus (boolean value)

import { useEffect, useState } from "react";

const useOnlinestatus = () => {
    
    const [onlinestatus , setOnlinestatus] = useState(true)
    //check if online
    
    useEffect(()=>{

        window.addEventListener("offline" , ()=>{
            setOnlinestatus(false)
        })

        window.addEventListener("online", () => {
            setOnlinestatus(true)
        })

    },[])

    return onlinestatus;
}

export default useOnlinestatus;