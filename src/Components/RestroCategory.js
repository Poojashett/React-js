
import { useState } from "react";
import ListItem from "./ListItem";



const RestroCategory = ({ dataa, isButtonClicked, setShowIndex }) => {

    const handleclick = ()  =>{
        setShowIndex();
    }
    return (
        <div>
            {/* accordian header */}
            <h6 className="fontsize">{dataa?.title} ({dataa.itemCards.length})<span>
                <div>
                    <button onClick={handleclick}>
                        Click here
                    </button>

                    {/* accordian body */}
                    {isButtonClicked && (
                        <div>
                            {
                                dataa?.itemCards.map((itemdata, index) => {
                                    return <ListItem key={index} data={itemdata?.card?.info} />
                                })
                            }
                        </div>
                    )}
                </div>
            </span></h6>
        </div>
    )
}
export default RestroCategory;