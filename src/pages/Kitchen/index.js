import Navbar from '../../components/navbar/navbar.js';
//import '../../components/productsList/productsList.css';
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

        <section className="containerCardList">
          <div className="cardKitchen"> </div>
        </section>
      </main>
    </>
  );
};
export default Kitchen;
