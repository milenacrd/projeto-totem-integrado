import './SingleProducts.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import agua from '../../assets/images/agua.jpg';
import cafe from '../../assets/images/cafe.jpg';
import sanduiche from '../../assets/images/sanduiche.jpg';
import cereal from '../../assets/images/cereal.jpg';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const PRODUCTS = [
  { id: 1, name: 'Água 500ml', image: agua, price: 5.0 },
  { id: 2, name: 'Café Expresso', image: cafe, price: 8.0 },
  { id: 3, name: 'Sanduíche Natural', image: sanduiche, price: 12.0 },
  { id: 4, name: 'Barra de Cereal', image: cereal, price: 2.5 },
];

const SingleProducts = () => {
  const navigate = useNavigate();

  const {
    addUnit,
    removeUnit,
    getItemQuantity,
    totalItems,
    totalPrice,
  } = useCart();

  return (
    <div className="screen">
      <div className="screen-light">
        <Header />

        <main className="single-products-container">
          <h1 className="titles">Selecionar Produtos</h1>
          <p className="subtitle">Adicione itens ao seu pedido</p>

          
          <div className="products-grid">
            {PRODUCTS.map((product) => {
              const qty = getItemQuantity(product.id);

              return (
                <div className="product-card" key={product.id}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />

                  <p className="product-name">{product.name}</p>

                  <p className="product-price">
                    R$ {product.price.toFixed(2)}
                  </p>

                
                  <div className="product-quantity">
                    <Button
                      className="btn-outline"
                      onClick={() => removeUnit(product)}
                    >
                      -
                    </Button>

                    <span className="quantity">{qty}</span>

                    <Button
                      className="btn-primary"
                      onClick={() => addUnit(product)}
                    >
                      +
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

        
          <div className="actions">
            <Button
              className="btn-outline btn-back"
              onClick={() => navigate('/menu')}
            >
              Voltar
            </Button>

            <Button
              className="btn-primary btn-complete-order"
              disabled={totalItems === 0}
              onClick={() => {
                alert(
                  `Pedido com ${totalItems} item(ns) — Total R$ ${totalPrice.toFixed(
                    2
                  )}`
                );
                navigate('/cart');
              }}
            >
              Confirmar ({totalItems}{' '}
              {totalItems === 0 ? 'Item' : 'Itens'})
            </Button>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default SingleProducts;
