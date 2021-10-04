import { Link } from 'react-router-dom';
import  burger  from '../../assets/images/burger.jpg'
import './style.css';

const notFound = () => {
  return (
    <section className="not-found-container">
      <div className="not-found-page">
      <img src={burger} alt="burger" className="img-error-404"/>
      <div className="not-found-text">
        <h1 className="not-found-title">Ops! Página não encontrada</h1>
        <p >
          Desculpe, não encontramos a página que você buscou! Clique{' '}
          <Link to={'/'} className="not-found-link-home" id="go-back">
            AQUI {' '}
          </Link>
          para retornar.
        </p>
        </div>
      </div>
    </section>
  );
};
export default notFound;
