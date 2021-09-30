import { useEffect, useState } from 'react';
import { formatMoney } from '../../services/formatMoney';
import { Button } from '../button/button';
import { get } from '../../api/api';
import './productsList.css';
import MenuBtn from '../menuBtn/menuBtn';

export const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [menuType, setMenuType] = useState('all-day');

  const filterByMenuType = (product) => product.type === menuType;

  useEffect(() => {
    get('/products').then(setProducts);
  }, []);

  return (
    <>
      <section className="btn-menu-content">
        <MenuBtn onChangeMenu={setMenuType} />
      </section>
      <ul className="ProductsList">
        {products.filter(filterByMenuType).map((product) => (
          <li key={`product-${product.id}`}>
            <b>
              {product.name}
              {product.flavor ? ` tipo ${product.flavor}` : null}
              {product.complement ? ` com ${product.complement}` : null}
            </b>
            <img src={product.image} alt={product.name}></img>
            <p>{formatMoney(product.price)}</p>
            <Button
              type="button"
              value="adicionar"
              className="btn-adicionar"
              onClick={() => addToCart(product)}
            >
              Adicionar
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
};
