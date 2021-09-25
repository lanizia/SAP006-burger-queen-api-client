import Navbar from '../../components/navbar/navbar.js';
import {OrdersList} from '../../components/kitchen/kitchen.js';
import './kitchen.css';
const Kitchen = () => {
  
  return (
    <>
      <header className="container-nav">
        <div className="header">
          <Navbar />
        </div>
      </header>
      <main className="containerOrdersKitchen">
        <div className="contentOrdersKitchen">
          <h1>Pedidos recebidos</h1>
        </div>
       <OrdersList />
      
      </main>
    </>
  );
};
export default Kitchen;
