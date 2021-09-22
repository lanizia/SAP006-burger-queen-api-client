import { ProductList } from '../../components/productsList/index.js';
import { Cart } from '../../components/cart/index';
import { post } from '../../api/api';
import { useState} from 'react';
import Navbar from '../../components/navbar/navbar.js';
import ClientName from '../../components/nameClient/nameClient.js';
import './style.css';
import { Button } from '../../components/button/button.js';

const Orders = () => {
  const [cartItems, setCartItems] = useState([]);
  const [data, setData] = useState({ client: '', table: '' });

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(data);
    post('/orders', {
      client: data.client,
      table: data.table,
      products: [{
        id: 123,
        qtd: 1
      }]
    })
  };

  const addToCart = (product) => {
    const newCartItems = [...cartItems, product];
    setCartItems(newCartItems);
  };

  const removeFromCart = (indexToBeRemoved) => {
    const newCartItems = cartItems.filter(
      (_, index) => indexToBeRemoved !== index,
    );
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
              data={data}
              setData={setData}
            />
            <Button 
              type='submit'
              value='client-name'
              className='btn-client'
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
