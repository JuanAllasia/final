import React, {useContext} from "react"; 
import { CartContext} from "../../../context/CartContext";


const CardItem = (props) => {
    const { removeItem } = useContext(CartContext);

    const handleRemove = () => {
        removeItem(props.id); 
        console.log("Item removed!");
    };

    return (
        <div className="CarItem">
        <div className="CartItemInfo">
            <div className="CartItemDetails">
            <h2>{props.name}</h2>
            <p>Quantity: {props.quantity}</p>
            <p>Price: {props.price}</p>
            <p>Subtotal: {props.price * props.quantity}</p>
            <button onClick={handleRemove}>Remove Item</button>
            </div>
        </div>
        </div>
    );
};

export default CardItem;