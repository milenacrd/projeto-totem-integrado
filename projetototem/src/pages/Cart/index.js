import Button from '../../components/Button';
import './Cart.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const navigate = useNavigate();
    return (
         <div className="screen">
            <div className="screen-light">
                <Header />
        <div className="cart-container">                                                
            <h1 className="titles">Deseja adicionair mais produtos? </h1>
            <p className="subtitle">Você pode comprar mais itens ou finalizar a compra </p>
            
            <div className="carrinho-card">
                <p className="subtitle">Seu carrinho atual</p>
           
            <div className="itens-card">
                <p className="itens-quantity"> 
                    1 item
                </p>
                <p className="itens-price">
                    R$ 15,00
                </p>
            </div>
             </div>
            <div className="peso-botoes2">
            <Button className="btn-outline"  onClick={() => navigate('/menu')}>
                    Adicionar mais produtos
            </Button>

            <Button className="btn-primary" onClick={() => navigate('/checkout')}>
                    Finalizar compra
            </Button>
            </div>
        </div>
              <Footer />
            </div>
        </div>
    );
}

export default Cart;