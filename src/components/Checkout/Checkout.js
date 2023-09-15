import '../Checkout/Checkout.css'
import verificado from './assets/verificado.png'


const Checkout = () =>{
    return(
        <div className='Checkout'>
            <img src={verificado} alt='Check Icon' className='CheckImg' />
            <h2 className='CheckText'>Your order was successful and is ready for pickup.</h2>
            <p>Thanks for trusting us!!</p>
        </div>
    )
}

export default Checkout