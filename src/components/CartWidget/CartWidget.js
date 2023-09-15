import carro from './assets/carro.png'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import './CartWidget.css'

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    return(
        <Link to='/Cart'>
            <img  src={carro} alt='cart-widget' className='carro'/>
            {totalQuantity}
        </Link>
    )
}

export default CartWidget