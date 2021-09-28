import { ProductList } from '../../components/productsList/index.js';
import { Cart } from '../../components/cart/index';
import { post } from '../../api/api';
import { useState } from 'react';
import Navbar from '../../components/navbar/navbar.js';
import ClientName from '../../components/nameClient/nameClient.js';
import './style.css';
import { Button } from '../../components/button/button.js';

const Orders = () => {
  const [cartItems, setCartItems] = useState([]);
  const [data, setData] = useState({ client: '', table: '' });
  const [error, setError] = useState('');

  const submitHandler = async (event) => {
    try {
      event.preventDefault();
      console.log(data);
      await post('/orders', {
        client: data.client,
        table: data.table,
        products: cartItems
      })
      setData({ client: '', table: ''})
      setCartItems([])
    } catch (e) {
      console.log(e.code);
      console.log(e.message);
      setError('E-mail ou senha não preenchidos corretamente');
    }
 
  };


  const addToCart = (product) => {
    const foundIndex = cartItems.findIndex(item => item.id === product.id);
    const alreadyExists = foundIndex !== -1;

    let newCartItems;

    if(alreadyExists) {
      const found = cartItems[foundIndex];
      found.qtd += 1; 
      newCartItems = [...cartItems];
    } else {
      newCartItems = [...cartItems, {
         ...product,
         qtd: 1
      }];
    }

    setCartItems(newCartItems);
  };

  const removeFromCart = (indexToBeRemoved) => {
    const product = cartItems[indexToBeRemoved];

    let newCartItems;

    if(product.qtd === 1) {
      newCartItems = cartItems.filter(
        (_, index) => indexToBeRemoved !== index,
      );
    } else {
      product.qtd -= 1;
      newCartItems = [...cartItems];
    }
    
    setCartItems(newCartItems);
  };

  return (
    <>
      <header className="container-nav">
        <div className="header">
          <Navbar />
        </div>
      </header>

      <main className="ProductsPage">
        <div className="ProductsPage-list">
          <ProductList addToCart={addToCart} />
        </div>

        <section className="ProductsPage-cart">
          <div className="container-input-client">
            <ClientName
            error={error}
              data={data}
              setData={setData}
            />
            <Button 
              aria-label='order'
              type='submit'
              value='client-name'
              className='btn-client'
              id='orders'
              onClick={submitHandler}>
                  Enviar
            </Button>
          </div>

          <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
        </section>
      </main>
    </>
  );
};
export default Orders; 