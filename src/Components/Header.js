import { useState } from "react";
import { LOGO_URL } from "../utils/constants"
// header component 
const Header = () => {

    let [btnName, setbtnName] = useState(["Login"]);
    return <div className="header">
        <div className="logo-container">
            <div className="logo-content">
                <img height="40px" src={LOGO_URL} alt="Logo" />
                <div className="logo-name">CraveX</div>
            </div>
        </div>
        <div className="nav-container">
            <ul className="nav-list">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <button className="login" onClick={
                    () => {
                        btnName === "Login" ? setbtnName("Logout") :  setbtnName("Login");
                    }
                }>{btnName}</button>
            </ul>
        </div>
    </div>
}

export default Header;