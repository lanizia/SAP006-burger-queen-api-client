import Navbar from '../../components/navbar/navbar.js';
import { DoneOrdersList } from '../../components/waiter/waiter.js';
import '../Kitchen/kitchen.css';
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
       <DoneOrdersList />
      
      </main>
    </>
      );
}
export default Waiter