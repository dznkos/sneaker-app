import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { CartProvider } from '../context/cartContext';
import { Offers } from '../pages/Offers';
import { ProductDetail } from '../components/ProductDetail';
import { Cart } from '../components/Cart';


export const AppRouter = () => {
  return (
    <CartProvider>
      <Cart />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Offers />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </CartProvider>
  )
}
