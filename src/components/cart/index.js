import {useEffect, useState} from 'react';
import {formatMoney} from '../../services/formatMoney';


const Total = ({ cartItems }) => {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const newTotal = cartItems.reduce((acc, cur) => acc + cur.price, 0);
        setTotal(newTotal)
    }, [cartItems]);

    return <div className="CartTotal">
        Total: {formatMoney(total)}
    </div>
}

const CartItems = ({ cartItems, removeFromCart }) => {
    return <>
        <Total cartItems={cartItems}/>
        <ul>
        {cartItems.map((item, index) =>
            <li key={`cart-${index}`}>
                <b>{item.name}</b> - {formatMoney(item.price)}
                <button type="button" onClick={() => removeFromCart(index)}>remover</button>
            </li>)}
        </ul>
    </>;
}

const CartEmptyState = () =>
    <p className="empty-state">Nenhum item no carrinho</p>

export const Cart = ({ cartItems, removeFromCart }) => {
    return <div className="Cart">
        {cartItems.length === 0
            ? <CartEmptyState />
            : <CartItems cartItems={cartItems} removeFromCart={removeFromCart} />}
    </div>
}