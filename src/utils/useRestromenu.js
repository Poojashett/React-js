import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";



const useRestromenu = (resId) => {
    //fetch the data
   
    const [restrodata, setRestrodata] = useState([])

    useEffect(() => {
        fetchMenuitem();
    }, [])

    const fetchMenuitem = async () => {
        const data = await fetch(MENU_URL + resId)
        const getJsondata = await data.json();
        setRestrodata(getJsondata)
    }

    return restrodata;
}

export default useRestromenu;