import './Home.css';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import Design from '../../components/Design';


const Home = () => {

  const navigate = useNavigate();
  return (
    <div className="screen">
      <Header />

      <main className="screen-content">
        <h1 className="title">
          Bem-vindo ao Totem Inteligente
        </h1>

        <Button onClick={() => navigate('/menu')}>
          INICIAR
          </Button>

        <p className="text">
          Toque na tela para começar o seu pedido
        </p>

        <Design />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
