import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Shop from './shop';
import HomePage from './HomePage';
import Navbar from './navbar';
import Contact from './Contact';
import ServicePage from './servicepage';
import ContactDealer from './displayContact';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [contact, setContact] = useState("")
  const [cart, setCart] = useState(0)
  return (
    <div className="App">
      <Router>
      <Navbar cart={cart} setContact={setContact}/>
        <Routes>
          <Route path="" exact element={<HomePage/>} />
          <Route path="shop" element={<Shop setCart={setCart} cart={cart}/>} />
          <Route path="shop/:id" element={<ContactDealer/>} />
          <Route path="service" element={<ServicePage/>} />
        </Routes>
        </Router>
        <Contact contact={contact}/>
    </div>
  );
}

export default App;
