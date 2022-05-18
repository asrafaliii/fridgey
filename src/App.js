import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import Products from './components/Home/Products/Products';
import NotFound from './components/NotFound/NotFound';
import Inventory from './components/Inventory/Inventory';
import SignUp from './components/Login/SignUp';
import Header from './components/Shared/Header';
import About from './components/About/About';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />}/>
        <Route path="/inventory" element={<Inventory />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp></SignUp>}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
  
    </div>
  );
}

export default App;
