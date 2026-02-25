import { Routes, Route } from 'react-router-dom';
import SelectPurchaseType from './pages/SelectPurchaseType';
import Home from './pages/Home';
import WeighProduct from './pages/WeighProduct';
import WeightedProduct from './pages/WeightedProduct';
import SingleProducts from './pages/SingleProducts';
import { CartProvider } from './context/CartContext';
import Cart from './pages/Cart';


function App () {
    return (
        <CartProvider>
        <Routes> 
             <Route path="/" element={<Home />} />
            <Route path="/menu" element={<SelectPurchaseType />} />
            <Route path="/pesar" element={<WeighProduct />} />
            <Route path="/produtopesado" element={<WeightedProduct />} />
            <Route path="/produtounitario" element={<SingleProducts />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
        </CartProvider>
    );
}

export default App;