import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Design2 from '../../components/Design2';
import Footer from '../../components/Footer';
import Header2 from '../../components/Header2';
import './WeighProduct.css';

const WeighProduct = () => {
    const navigate = useNavigate();
    return (
            <div className="screen-light">  
                <Header2 />
                <main className="screen-content">
                    <h1 className="titles">
                        Posicione o produto na balança
                    </h1>
                    <div className="wheigh-icon-content">
                    <div className="weigh-icon">
                        ⚖️
                    </div>
                    </div>

                    <p className="subtitleazul">
                        Aguardando peso estável...      
                    </p>
                    <p className="final-text">
                        Mantenha o produto sobre a balança
                    </p>
                    <Button onClick={() => navigate('/produtopesado')}> Continuar </Button>


                    <Design2 />
                </main>

                <Footer />  
            </div>
    );
}

export default WeighProduct;