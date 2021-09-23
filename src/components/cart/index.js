import { useEffect, useState } from 'react';
import { formatMoney } from '../../services/formatMoney';
import { Button } from '../button/button';

const Total = ({ cartItems }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = cartItems.reduce((acc, cur) => acc + (cur.price * cur.qtd), 0);
    setTotal(newTotal);
  }, [cartItems]);

  return <div className="CartTotal">Total: {formatMoney(total)}</div>;
};

const CartItems = ({ cartItems, removeFromCart }) => {
  return (
    <>
      <Total cartItems={cartItems} />
      <ul>
        {cartItems.map((item, index) => (
          <li key={`cart-${index}`}>
            <b>
              {item.qtd}x -
              {item.name}
              {item.flavor ? ` tipo ${item.flavor}` : null}
              {item.complement ? ` com ${item.complement}` : null}-{' '}
              {formatMoney(item.price)}
            </b>
            <Button type="button" onClick={() => removeFromCart(index)}>
              remover
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
};

const CartEmptyState = () => (
  <p className="empty-state">Nenhum item no carrinho</p>
);

export const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div className="Cart">
      {cartItems.length === 0
       ? ( <CartEmptyState />)
        : (<CartItems cartItems={cartItems} removeFromCart={removeFromCart} />
      )}
    </div>
  );
}; 