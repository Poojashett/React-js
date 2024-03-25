import { useDispatch } from "react-redux";
import { addItem } from "../utils/slice/cartSlice"


const ListItem = (props) =>{

    const {data} = props;
    const dispatch = useDispatch()

    const handlebutton = (item) =>{
        //dispatch
        dispatch(addItem(item))
    }
 
    return (
        <div>
            <ul>
                <li className="fontsize">{data.name}</li>
                <li className="fontsize">{data.price} rupee</li>
                <button onClick={()=>handlebutton(data)}>add item to the cart</button>
            </ul>
        </div>
    )
}

export default ListItem;