import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";


// header component 
const Header = () => {

    let [btnName, setbtnName] = useState(["Login"]);
    useEffect(() => {
    }, [btnName])
    return <div className="header">
        <div className="logo-container">
            <div className="logo-content">
                <img height="40px" src={LOGO_URL} alt="Logo" />
                <div className="logo-name">CraveX</div>
            </div>
        </div>
        <div className="nav-container">
            <ul className="nav-list">
                <li><Link to="/">Home</Link>  </li>
                <li><Link to="/about"> About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li>Cart</li>
                <button className="login" onClick={
                    () => {
                        btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
                    }
                }>{btnName}</button>
            </ul>
        </div>
    </div>
}

export default Header;