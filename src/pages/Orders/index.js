import {ProductList} from '../../components/productsList/index.js';
import {Cart} from '../../components/cart/index'
import './style.css';


const Orders = () => {
    return (
        <div className="ProductsPage">

          <div className="ProductsPage-list">
              <h1>Menu</h1>
              <ProductList/>
          </div>

          <div className="ProductsPage-cart">
                <Cart />
            </div>

         
        </div>
      );
}
export default Orders