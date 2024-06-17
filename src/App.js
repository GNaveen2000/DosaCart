import './App.css';
import About from './componets/about/about.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigator from './componets/forms/Navigator';
import Footer from './componets/forms/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './componets/forms/product/Product';
import ViewProduct from './componets/forms/product/ViewProduct';
import AboutUs from './componets/forms/product/AboutUs';
import Order from './componets/forms/orders/Order';



function App() {
  return (
    <>
    <BrowserRouter>
     <Navigator />
     <Routes>
         <Route path="/" element={<About />}></Route>
          <Route path='aboutus' element={<AboutUs />}></Route>
          <Route path="Ouritems" element={<Product />}>  </Route>
          <Route path="orders" element={<Order />}>  </Route>
            <Route path="product/:productId" element={<ViewProduct />}>  </Route> 
          
      </Routes>
    <Footer />
     </BrowserRouter> 
     </>
  );
}

export default App;
