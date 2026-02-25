import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Design2 from '../../components/Design2';
import './SelectPurchaseType.css';
import PurchasedCard from '../../components/PurchasedCard';
import { useNavigate } from 'react-router-dom';


const SelectPurchaseType = () => {
    const navigate = useNavigate();
    
    return (
        <div className="screen">
            <div className="screen-light">
                <Header />

                <main className="screen-content">
                    <h1 className="titles">
                        Como deseja comprar?
                    </h1>
                    <p className="subtitle"> 
                        Selecione o tipo de compra que deseja realizar
                    </p>

                    <div className="purchase-options">
                        <PurchasedCard
                            title="PRODUTO POR PESO"
                            description="Açaí, sorvetes, snacks"
                            icon="⚖️"
                            onClick={() => navigate('/pesar')}
                        />

                        <PurchasedCard
                            title="PRODUTO UNITÁRIO"
                            description="Bebidas, snacks embalados"
                            icon="🛍️"
                            onClick={() => navigate('/produtounitario')}
                        />
                    </div>

                    <p className="final-text">
                        Você pode selecionar ambas opções no mesmo pedido
                    </p>

                    <Design2 />
                </main>

                <Footer />
            </div>
        </div>
    );
}

export default SelectPurchaseType;