import { ProductList } from '../../components/productsList/index.js';
import { Cart } from '../../components/cart/index';
import './style.css';
import Navbar from '../../components/navbar/navbar.js';

const Orders = () => {
  return (
    <>
      <header className="container-nav">
        <div className="header">
          <Navbar />
        </div>
      </header>
      <section className="input-client-name"></section>
      <div className="ProductsPage">
        <div className="ProductsPage-list">
          <ProductList />
        </div>

        <div className="ProductsPage-cart">
          <Cart />
        </div>
      </div>
    </>
  );
};
export default Orders;
