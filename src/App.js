import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Cart from "./Pages/Cart/Cart";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Glasses from "./Pages/Glasses/Glasses/Glasses";
import Home from "./Pages/Home/Home";
import Jewelaries from "./Pages/Jewelaries/Jewelaries/Jewelaries";
import Login from "./Pages/Login/Login";
import Details from "./Pages/ProductDetails/Details";
import Register from "./Pages/Register/Register";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import Watches from "./Pages/Watches/Watches/Watches";
import WatchesHome from "./Pages/Watches/WatchesHome/WatchesHome";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watches" element={<Watches />} />
          <Route path="/glasses" element={<Glasses />} />
          <Route path="/jewelaries" element={<Jewelaries />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
