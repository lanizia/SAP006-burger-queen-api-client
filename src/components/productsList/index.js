import {useEffect, useState} from 'react';
import {formatMoney} from '../../services/formatMoney'; 
import { Button } from '../button/button';
import { get } from '../../api/api'
import './productsList.css';

export const ProductList = ({ addToCart }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        get('/products').then(setProducts);
    }, [])
     
    return <ul className='ProductsList'>
        {products.map(product => 
            <li key={`product-${product.id}`}> /
                <b>{product.name}</b>
                <img src={product.image} alt={product.name}></img>
                <p>{formatMoney(product.price)}</p>
                <Button type="button" value="adicionar" className="btn-adicionar" onClick={() => addToCart(product)}>Adicionar</Button>
            </li>)}
    </ul>

}