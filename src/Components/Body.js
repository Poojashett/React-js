import RestrCard from "./RestrCard";
import resObj from "../utils/mockData";

//BODY COMPONENT
const Body = () => (
    <div className="body-container">
        <h2 className="body-head">Restaurants with online food delivery</h2>
        <div className="search-container">
            <input type="text" className="search-input" placeholder="Search for restaurants and food..." />
            <button className="search-button">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzDXZxdU5Q5iVuX08G2QbNyNDjLJy1eEDF2pPRoQGAX_tU3f2eY_wPuii-HwKq8bc7nsc&usqp=CAU" alt="Search Icon" />
            </button>
        </div>
        <div className="restr-container">
            {
                resObj.map((data) => <RestrCard key={data.id} resData={data} />)
            }
        </div>
    </div>
)

export default Body ;