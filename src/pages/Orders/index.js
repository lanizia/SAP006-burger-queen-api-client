import {ProductList} from '../../components/productsList/index.js';
import {Cart} from '../../components/cart/index'
import {useState} from 'react';
import './style.css';


const Orders = () => {

    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        const newCartItems = [...cartItems, product]
        setCartItems(newCartItems);
    }

    const removeFromCart = (indexToBeRemoved) => {
        const newCartItems = cartItems.filter((_, index) => indexToBeRemoved !== index)
        setCartItems(newCartItems);
    }

    return (
        <div className="ProductsPage">
          <div className="ProductsPage-list">
              <h1>Menu</h1>
              <ProductList addToCart={addToCart} />
          </div>

          <div className="ProductsPage-cart">
                <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
            </div>         
        </div>
      );
}
export default Orders