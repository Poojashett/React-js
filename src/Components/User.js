import { useState } from "react";


const User = ({name}) =>{
    
    const [countone , setCountone] = useState(0);
    const [counttwo] = useState([1]);


    return (
        <div className="about-card">
            <div>Name : pooja</div>
            <div>Kundapur</div>
            <div>{name}</div>
            <div>countone : {countone}</div>
            <button onClick={
                ()=>{
                    const result = countone + 1
                    setCountone(result);
                }
            }>increment the count</button>
            <div>conttwo : {counttwo} </div>
        </div>
    )
     
}
export default User;