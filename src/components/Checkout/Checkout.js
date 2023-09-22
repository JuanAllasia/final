import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import {Timestamp, addDoc, collection, doc, documentId, getDocs, query, writeBatch, where,} from "firebase/firestore";
import { db } from "../../services/firebase/firebaseconfig";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { Link } from "react-router-dom";
import "./Checkout.css"


const Checkout = () => {
    const [confirmed, setConfirmed] = useState(false);
    const [order, setOrder] = useState(null);
    const crearOrder = () => {
        const nuevaOrden = {
        id: Math.random().toString(36).substr(2, 9), 
        fecha: new Date().toLocaleDateString(), 
        };
        setOrder(nuevaOrden);
        setConfirmed(true);
    }
    
    return (
        <div className="contenedor2">
            {confirmed ? (
            <div className="confirmation-message">
                <p>¡Compra confirmada! Gracias por tu pedido.</p>
                <p>Detalles de la orden:</p>
                <div className="order-details-container">
                <pre className="custom-pre">{JSON.stringify(order, null, 2)}</pre>
                </div>
            </div>
            ) : (
            <CheckoutForm onConfirm={crearOrder} />
            )}
        </div>
        );
    }

    export default Checkout;