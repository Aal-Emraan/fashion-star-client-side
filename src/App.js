import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Cart from "./Pages/Cart/Cart";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AddProduct from "./Pages/Dashboard/DashboardComponents/AddProduct/AddProduct";
import AllGlasses from "./Pages/Dashboard/DashboardComponents/AllGlasses/AllGlasses";
import AllJewellers from "./Pages/Dashboard/DashboardComponents/AllJewellers/AllJewellers";
import AllOrders from "./Pages/Dashboard/DashboardComponents/AllOrders/AllOrders";
import AllProducts from "./Pages/Dashboard/DashboardComponents/AllProducts";
import AllWatches from "./Pages/Dashboard/DashboardComponents/AllWatches/AllWatches";
import UpdateCard from "./Pages/Dashboard/DashboardComponents/UpdateCard/UpdateCard";
import GlassesDetails from "./Pages/Glasses/GlasseDetails/GlassesDetails";
import Glasses from "./Pages/Glasses/Glasses/Glasses";
import Home from "./Pages/Home/Home";
import JewelleryDetails from "./Pages/Jewellery/Details/JewelleryDetails";
import Jewellery from "./Pages/Jewellery/Jewellery/Jewellery";
import Login from "./Pages/Login/Login";
import Details from "./Pages/ProductDetails/Details";
import Register from "./Pages/Register/Register";
import Footer from "./Pages/Shared/Footer/Footer";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import Watches from "./Pages/Watches/Watches/Watches";

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
          <Route path="/glasses/:id" element={<GlassesDetails />} />
          <Route path="/jewelleries" element={<Jewellery />} />
          <Route path="/jewelleries/:id" element={<JewelleryDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard" element={<AllProducts></AllProducts>} />
            <Route
              path="/dashboard/allProducts"
              element={<AllProducts></AllProducts>}
            />
            <Route
              path="/dashboard/allWatches"
              element={<AllWatches></AllWatches>}
            />
            <Route
              path="/dashboard/allGlasses"
              element={<AllGlasses></AllGlasses>}
            />
            <Route
              path="/dashboard/allJewellers"
              element={<AllJewellers></AllJewellers>}
            />
            <Route
              path="/dashboard/allOrders"
              element={<AllOrders></AllOrders>}
            />
            <Route
              path="/dashboard/update/:id"
              element={<UpdateCard></UpdateCard>}
            />
            <Route path="/dashboard/addproduct" element={<AddProduct />} />
          </Route>
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

// Live Site Link:  https://fashionstar-5bdad.web.app/
