import RestrCard from "./RestrCard";
import Shimmer from "./Shimmer";
import resObj from "../utils/mockData";
import { useState, useEffect } from "react";

//BODY COMPONENT
const Body = () => {
    const [listfromresobj, setlistfromresobj] = useState([]);
    const [filteredrestro, setFilteredrestro] =useState([]);
    const [searchtext , setSearchtext]=useState([""]);
    
   

    useEffect(() => {
        fetchData()
    }, [])


    fetchData = async () => {
        const fetchdata = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await fetchdata.json();
        const finalData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setlistfromresobj(finalData)
        setFilteredrestro(finalData)
    }

    return listfromresobj.length === 0 ? <Shimmer /> : (<div className="body-container">
        <h2 className="body-head">Restaurants with online food delivery</h2>
        <div className="d-flex">
            <div className="search-container">
                <input type="text" className="search-input" placeholder="Search for restaurants and food..." value={searchtext}  onChange={(e)=>{
                    setSearchtext(e.target.value)
                }}/>
                <button className="search-button" onClick={
                    ()=>{
                        const filteredRestro = listfromresobj.filter((data) => {
                            return data.info.name.toLowerCase().includes(searchtext.toLowerCase());
                        });
                        setFilteredrestro(filteredRestro);
                    }
                }>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzDXZxdU5Q5iVuX08G2QbNyNDjLJy1eEDF2pPRoQGAX_tU3f2eY_wPuii-HwKq8bc7nsc&usqp=CAU" alt="Search Icon" />
                </button>
            </div>
            <div>
                <button className="top-rated" onClick={() => {
                    const filteredlist = listfromresobj.filter((obj) => {
                        return obj.info.avgRatingString > 4.5;
                    })
                    console.log('filteredlist: ', filteredlist);
                    setlistfromresobj(filteredlist)
                }}>Top Rated Restaurants</button>
            </div>
        </div>
        <div className="restr-container">
            {
                filteredrestro.map((data) => <RestrCard key={data.info.id} resData={data} />)
            }

        </div>
    </div>)
}

export default Body;