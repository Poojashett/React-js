import { useState, useEffect, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
import userContext from "../utils/userContext"
import { useSelector } from "react-redux";


// header component 
const Header = () => {

    let [btnName, setbtnName] = useState(["Login"]);
    useEffect(() => {
    }, [btnName])


    const onlinestatus = useOnlinestatus();

    const {loggedInUser} = useContext(userContext);
    

    //redux selector
    const cartItems = useSelector((store) => store.cart.items);
    console.log('cartItems: ', cartItems);

    
    return <div className="header">
        <div className="logo-container">
            <div className="logo-content">
                <img height="40px" src={LOGO_URL} alt="Logo" />
                <div className="logo-name">CraveX</div>
            </div>
        </div>
        <div className="nav-container">
            <ul className="nav-list">
                <li>Online status
                    {onlinestatus  ? " yes" : "no"}
                </li>
                <li>{loggedInUser}</li>
                <li><Link to="/">Home</Link>  </li>
                <li><Link to="/about"> About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/grocery">grocery</Link></li>
                <button className="login" onClick={
                    () => {
                        btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
                    }
                }>{btnName}</button>

                <li><Link to= "/cart"> cart ({cartItems.length} items )</Link></li>

            </ul>
        </div>
    </div>
}

export default Header;