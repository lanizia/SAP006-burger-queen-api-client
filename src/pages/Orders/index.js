import { ProductList } from '../../components/productsList/index.js';
import { Cart } from '../../components/cart/index';
import { post } from '../../api/api';
import { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/navbar.js';
import ClientName from '../../components/nameClient/nameClient.js';
import './style.css';

const Orders = () => {
  const [data, setData] = useState({ client: '', table: '' });

  const submitHandler = async (e) => {
    e.preventDefault();
    return ClientName(data);
  };

  useEffect(() => {
    post('/orders').then(setData);
  }, []);

  const [cartItems, setCartItems] = useState([]);

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
              submitHandler={submitHandler}
            />
          </div>

          <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
        </section>
      </main>
    </>
  );
};
export default Orders;
