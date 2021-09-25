import { useEffect, useState } from 'react';
import { get } from '../../api/api';
import { Button} from '../button/button.js'

const getStatusLabel = (status) => {
  const map = {
    pending: 'Pendente'
  }
  return map[status] || status
}
const getTime = (dateString) => {
  const date = new Date(dateString);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return hours + ':' + minutes;
}

export const OrdersList = () => {
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
              <Button className='btn-final'> Pedido Finalizado </Button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
