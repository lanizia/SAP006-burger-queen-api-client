import { useEffect, useState } from 'react';
import { get, put } from '../../api/api';
import { Button } from '../button/button';
import { getStatusLabel } from '../time/getTime.js';
import { TimeOrPrepareTime } from '../timeOrPrepareTime/timeOrPrepareTime';

export const OrdersList = ({ showStatus, nextStatus, nextStatusLabel }) => {
  const [orders, setOrders] = useState([]);

  const byShowStatus = (order) => {
    return order.status === showStatus;
  };

  const sortByDate = (a, b) => {
    return new Date(a.createdAt) - new Date(b.createdAt);
  };

  const fetchOrders = async () => {
    const allOrders = await get('/orders');
    setOrders(allOrders.filter(byShowStatus).sort(sortByDate));
  };

  const updateStatus = async (orderId) => {
    await put(`/orders/${orderId}`, { status: nextStatus });
    fetchOrders();
  };

  useEffect(() => {
    fetchOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <section className='containerCardList'>
        <ul>
          {orders.map((order) => (
            <li className='cardKitchen' key={`order-${order.id}`}>
              <b>
                <TimeOrPrepareTime order={order} />
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
              <Button
                type='submit'
                className='btn-final'
                onClick={() => updateStatus(order.id)}
              >
                {' '}
                {nextStatusLabel}{' '}
              </Button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
