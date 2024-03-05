import { CDN_URL } from "../utils/constants"
const RestrCard = (props) => {
    //destructuring
    const { resData } = props;
    // or 

    // const resData = props.resData

    return <div className="rest-card">
        <div style={{ height: '160px' }}><img width="100%" height="100%" className="rest-image" src={CDN_URL + resData.cloudinaryImageId} /></div>
        <div className="rest-card-body">
            <div className="card-name">{resData.resName}</div>
            <div className="address">{resData.address}</div>
        </div>
    </div>
}

export default RestrCard ;