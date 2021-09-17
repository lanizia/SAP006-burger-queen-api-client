// aqui estou criando o componente da lista de produtos

import productsJson from './products.json';
import {useState} from 'react';
import {formatMoney} from '../../services/formatMoney'; // esse arquivo me ajuda a converter para dinheiros hahah
import { Button } from '../button/button';
import './style.css';





export const ProductList = () => {
    const [products] = useState(productsJson); // aqui vamos fazer o fetch

    return <ul className='ProductsList'>
        {products.map(product => // fiz um map para pegar a lista de produtos dai mando adicionar o nome a imagem e o preço
            <li key={`product-${product.id}`}> /
                <b>{product.name}</b>
                <img src={product.image} alt={product.name}></img>
                <p>{formatMoney(product.price)}</p>
                <Button type="button" value="adicionar" className="btn-adicionar">Adicionar</Button>
            </li>)}
    </ul>

}