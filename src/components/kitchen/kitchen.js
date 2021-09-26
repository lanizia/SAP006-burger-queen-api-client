import { useEffect, useState } from 'react';
import { get } from '../../api/api';
import { Button } from '../button/button'
import { getStatusLabel, getTime } from '../Time/getTime.js';

export const OrdersList = ({updateStatus}) => {
  const [orders, setOrders] = useState([]);

 const sortByDate = (a, b) => {
    return new Date(a.createdAt) - new Date(b.createdAt)
 }

  useEffect(() => {
    get('/orders').then(orders => {
      setOrders(orders.sort(sortByDate));
    });
  }, []);

  return (
    <>
      <section className='containerCardList'>
        <ul>
          {orders.map((order) => (
          
            <li className='cardKitchen' key={`order-${order.id}`}>
              <b><label className='orderLabel'>Horário:</label>{' '}
                <p> {getTime(order.createdAt)} </p>
                <label className='orderLabel'>Nome:</label>{' '}
                <p> {order.client_name} </p>
                <label className='orderLabel'>Mesa:</label>{' '}
                <p>{order.table} </p>
                <label className='orderLabel'>Status:</label>{' '}
                <p>{getStatusLabel(order.status)}</p>
                <label className='orderLabel'>Itens:</label>
                {order.Products.map((product) => (
                  <p>
                    {' '}
                    {product.qtd}x - {product.name}{' '}
                    {product.flavor ? ` tipo ${product.flavor};` : null}
                  </p>
                ))}
              </b>
              <Button type='submit' className='btn-final' onClick={updateStatus}> Pedido Finalizado </Button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
