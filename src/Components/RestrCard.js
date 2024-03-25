import { CDN_URL } from "../utils/constants"

const RestrCard = (props) => {
    //destructuring
    const { resData } = props;
    // or 
    // const resData = props.resData

    return <div className="rest-card">
        <div style={{ height: '200px', }}><img  className="rest-image" src={CDN_URL + resData.info.cloudinaryImageId} /></div>
        <div className="rest-card-body">
            <div className="d-flex">
                <div className="card-name">{resData.info.name}</div>
            </div>
            <div className="address">{resData.info.locality}</div>
            <div className="card-name">{resData.info.avgRatingString}</div>
        </div>
    </div>
}

//higher order component
//input - RestrCard
//output - RestrCardisopen
export const withIsOpenLable = (RestrCard) => {
    return (props) => {
        return (<div>
            <label>Veg</label>
            <RestrCard {...props} />
        </div>)

    }
}

export default RestrCard;