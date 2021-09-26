import { useState } from 'react';
import Navbar from '../../components/navbar/navbar.js';
import { DoneOrdersList } from '../../components/waiter/waiter.js';
import { put } from '../../api/api';
import '../Kitchen/kitchen.css';
const Waiter = () => {
  const [dataStatus, setDataStatus] = useState('pending')

  const updateStatus = async () => {
    await put('/orders', {
      status: dataStatus
    })
    setDataStatus({status:'delivered'})
  }
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
        <DoneOrdersList updateStatus={updateStatus} />
      </main>
    </>
  );
};
export default Waiter;
