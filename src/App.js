import './App.css';
import Register from './componets/forms/Register.js';
import Login from './componets/forms/Login.js'
import About from './componets/about/about.js';
import More from './componets/about/moreinfo.js';
import Ouritems from './componets/about/ourItems.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigator from './componets/forms/Navigator';
import Footer from './componets/forms/Footer';
import Demo from './componets/about/Demo';


function App() {
  return (
   
   <BrowserRouter>
    <Navigator />
    <Demo />
    <Routes>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/" element={<About />}></Route>
          <Route path="/More" element={<More />}></Route>
          <Route path="/Ouritems" element={<Ouritems />}></Route>
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
