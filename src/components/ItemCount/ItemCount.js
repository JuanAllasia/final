import './ItemCount.css'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemCount = ({stock, initial, onAdd})=> {
    const[quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }
    
    const decrement = () => {
        if(quantity > 1){
            setQuantity(quantity -1)
        }
    }
    function mensaje() {
        toast.info('🦄 agregaste los items al carrito!', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    

    return(
        <div className='Counter'>
            <div className='Controls'>
                <button className='CounterButton' onClick={decrement}>-</button>
                <h4 className='CounterNum'>{quantity}</h4>
                <button className='CounterButton' onClick={increment}>+</button>
            </div>
            <div>
            <button className='CartButton' onClick={() => { onAdd(quantity); mensaje(); }} disabled={!stock}>Agregar al carrito</button>
            <ToastContainer />
            </div>
        </div>
    )
}

export default ItemCount;