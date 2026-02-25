
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Button from '../../components/Button';
import './WeightedProduct.css';

const WeightedProduct = () => {
    const navigate = useNavigate();
    return (
        <div className="screen">
            <div className="screen-light">
                <Header />

        <main className="weighted-product-container">                                            
            <h1 className="titles">
                Peso detectado
                </h1>

            <div className="peso-card">
                <p className="subtitle">
                    Produto
                    </p>
                <p className="peso-valor">
                    0.300
                    </p>
                 <span className="peso-unidade">
                        KG
                </span>
                <div className="divider"></div>
                <p className="peso-preco">
                        R$ 15,00
                </p>
                <p className="peso-precoreal">
                        R$ 45,00/kg
                 </p>
            </div>
          

           <div className="peso-botoes">
             <Button className="btn-outline" onClick={() => navigate('/menu')}>
                     Cancelar
             </Button>

             <Button className="btn-primary" onClick={() => navigate('/produtounitario')}>
                     Confirmar
                </Button>
                </div>
                
              </main>
            
                  
              <Footer />
            </div>
        </div>
    );
}   

export default WeightedProduct