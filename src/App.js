import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog/Blog";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";
import Products from "./components/Home/Products/Products";
import NotFound from "./components/NotFound/NotFound";
import Inventory from "./components/Inventory/Inventory";
import SignUp from "./components/Login/SignUp";
import Header from "./components/Shared/Header";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Update from "./components/Home/Products/Update";
import ManageInventory from "./components/Inventory/ManageInventory";
import RequireAuth from "./components/Login/RequireAuth";
import AddNewItem from "./components/Inventory/AddNewItem";
import AddItem from "./components/Optional/AddItem";
import ManageItem from "./components/Optional/ManageItem";
import MyItem from "./components/Optional/MyItem";
import Footer from "./components/Shared/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/update"
          element={
            <RequireAuth>
              <Update />
            </RequireAuth>
          }
        />
        <Route
          path="/inventory"
          element={
            <RequireAuth>
              <Inventory />
            </RequireAuth>
          }
        />
        <Route path="/manageinventory" element={<ManageInventory />} />
        <Route path="/addnewitem" element={<AddNewItem></AddNewItem>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp></SignUp>} />
        <Route path="/additem" element={<AddItem></AddItem>} />
        <Route path="/manageitem" element={<ManageItem></ManageItem>} />
        <Route path="/myitem" element={<MyItem></MyItem>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
