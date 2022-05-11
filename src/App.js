import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Header from './components/Header/Header';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import Products from './components/Home/Products/Products';
import NotFound from './components/NotFound/NotFound';
import Inventory from './components/Inventory/Inventory';

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
        <Route path="/login" element={<Login />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
  
    </div>
  );
}

export default App;
