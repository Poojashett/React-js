import { useDispatch, useSelector } from "react-redux";

import { clearCart } from "../utils/slice/cartSlice";

const Cart = () =>{

    const cartItems = useSelector((store)=>store.cart.items);

    const dispatch = useDispatch();


   const clearcart = () =>{
        dispatch(clearCart())
    }
    return (
        <div>
            <h1>hii</h1>
                {
                    cartItems.map((data,index)=>{
                       return  <li key={index}>{data?.name}</li>
                    })
                }

                <button onClick={clearcart}>clear the cart</button>
        </div>
    )

}

export default Cart;