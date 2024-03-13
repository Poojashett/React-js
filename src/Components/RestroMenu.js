import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestroMenu = () => {

    const [restrodata, setRestrodata] = useState([]);

    const{resId} = useParams()

    useEffect(
        () => {
            fetchMenuitem();
        }, []
    )



    const fetchMenuitem = async () => {
        const data = await fetch( MENU_URL + resId)
        const getJsondata = await data.json();
        setRestrodata(getJsondata)
    }
    if (restrodata.length === null) {
        return <Shimmer />
    }
    const {
        name,
        areaName,
        avgRating,
        city,
        cloudinaryImageId,
        cuisines,
        locality,
        totalRatingsString
    } = restrodata?.data?.cards[0]?.card?.card?.info || {};


    const { itemCards } = restrodata?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};
    // console.log('itemCards: ', itemCards);

    return restrodata.length === null ? (<Shimmer />) : (
        <div className="menu">
            <h1>{name}</h1>
            <div>{areaName}</div>
            <div>{avgRating}</div>
            <div>{city}</div>
            <div>{cuisines}</div>
            <div>{locality}</div>
            <div>{totalRatingsString}</div>
            <div><img src={CDN_URL + cloudinaryImageId} /></div>
            <ul>
                {
                    itemCards?.map((data) => {
                        return <li key={data?.card.info?.id}>{data?.card?.info?.name}</li>
                    })
                }

            </ul>
        </div>
    )

}

export default RestroMenu;