import Navbar from '../../components/navbar/navbar.js';
import '../Kitchen/kitchen.css';
import { OrdersList } from '../../components/OrdersList/ordersList.js';

const Waiter = () => {

  return (
    <>
      <header className="container-nav">
        <div className="header">
          <Navbar />
        </div>
      </header>
      <main className="containerOrdersKitchen">
        <div className="contentOrdersKitchen">
          <h1>Para Entregar</h1>
        </div>
        <OrdersList showStatus="ready" nextStatus="delivered" nextStatusLabel="Pedido Entregue" />
      </main>
    </>
  );
};
export default Waiter;
