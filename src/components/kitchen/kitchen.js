import { useEffect, useState } from 'react';
import { get } from '../../api/api';
import { Button} from '../button/button.js'


export const OrdersList = () => {
  const [orders, setOrders] = useState([]);

 const sortByDate = (a, b) => {
    return new Date(a.createdAt) - new Date(b.createdAt)
 }

  useEffect(() => {
    get('/orders').then(orders => {setOrders(orders.sort(sortByDate))});
  }, []);

  return (
    <>
      <section className='containerCardList'>
        <ul>
          {orders.map((order) => (
          
            <li className='cardKitchen' key={`order-${order.id}`}>
              <b>
              <label className='orderLabel'>Horário de chegada do Pedido:</label>
                <p>{order.createdAt} </p>
                <label className='orderLabel'>Nome:</label>{' '}
                <p> {order.client_name} </p>
                <label className='orderLabel'>Mesa:</label>{' '}
                <p>{order.table} </p>
                <label className='orderLabel'>Status do pedido:</label>{' '}
                <p>{order.status}</p>
                <label className='orderLabel'>Pedidos:</label>
                {order.Products.map((product) => (
                  <p>
                    {' '}
                    {product.qtd}x - {product.name}{' '}
                    {product.flavor ? ` tipo ${product.flavor};` : null}
                  </p>
                ))}
              </b>
              <Button className='btn-final'> Pedido Finalizado </Button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
