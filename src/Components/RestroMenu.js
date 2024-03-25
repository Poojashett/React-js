import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestromenu from "../utils/useRestromenu";
import RestroCategory from "../Components/RestroCategory"
import { useState } from "react";


const RestroMenu = () => {
    const { resId } = useParams();
    
    const [showIndex , setShowIndex] = useState(0)

    const restrodata = useRestromenu(resId)

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

    const filteredCategory = restrodata?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item) => {
        return item.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    })


    return restrodata.length === null ? (<Shimmer />) : (
        <div className="menu">
            <h1>{name}</h1>
            <div>{areaName}</div>
            <div>{avgRating}</div>
            <div>{city}</div>
            <div>{cuisines}</div>
            <div>{locality}</div>
            <div>{totalRatingsString}</div>
            <div><img width="120px" src={CDN_URL + cloudinaryImageId} /></div>
            <ul >
                {
                    itemCards?.map((data) => {
                        return <li key={data?.card.info?.id}>{data?.card?.info?.name}</li>
                    })
                }

            </ul>


            {/* create accordians */}
            {/* controlled component  */}
            {
                filteredCategory?.map((catdata, index) => {
                    return <RestroCategory key={index} dataa={catdata?.card?.card} isButtonClicked={index === showIndex ? true : false} setShowIndex = {() => setShowIndex(index)}/>
                })
            }
            
        </div>
    )

}

export default RestroMenu;