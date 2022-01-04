import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import useFirebase from "./Hooks/useFirebase";
import Cart from "./Pages/Cart/Cart";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AllGlasses from "./Pages/Dashboard/DashboardComponents/AllGlasses/AllGlasses";
import AllJewellers from "./Pages/Dashboard/DashboardComponents/AllJewellers/AllJewellers";
import AllOrders from "./Pages/Dashboard/DashboardComponents/AllOrders/AllOrders";
import AllProducts from "./Pages/Dashboard/DashboardComponents/AllProducts";
import AllWatches from "./Pages/Dashboard/DashboardComponents/AllWatches/AllWatches";
import UpdateCard from "./Pages/Dashboard/DashboardComponents/UpdateCard/UpdateCard";
import GlassesDetails from "./Pages/Glasses/GlasseDetails/GlassesDetails";
import Glasses from "./Pages/Glasses/Glasses/Glasses";
import Home from "./Pages/Home/Home";
import Jewelaries from "./Pages/Jewelaries/Jewelaries/Jewelaries";
import Login from "./Pages/Login/Login";
import MyOrders from "./Pages/MyOrders/MyOrders";
import Details from "./Pages/ProductDetails/Details";
import Register from "./Pages/Register/Register";
import AdminRoute from "./Pages/Shared/AdminRoute/AdminRoute";
import Footer from "./Pages/Shared/Footer/Footer";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import PrivateRoute from "./Pages/Shared/PrivateRoute/PrivateRoute";
import Watches from "./Pages/Watches/Watches/Watches";

function App() {
  const { handleRegister } = useFirebase();
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watches" element={<Watches />} />
          <Route path="/glasses" element={<Glasses />} />
          <Route path="/glasses/:id" element={<PrivateRoute><GlassesDetails /></PrivateRoute>} />
          <Route path="/jewelaries" element={<Jewelaries />} />
          <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
          <Route path="/dashboard" element={<AdminRoute><Dashboard /></AdminRoute>}>
            <Route path="/dashboard" element={<AdminRoute><AllProducts></AllProducts></AdminRoute>} />
            <Route
              path="/dashboard/allProducts"
              element={<AdminRoute><AllProducts></AllProducts></AdminRoute>}
            />
            <Route
              path="/dashboard/allWatches"
              element={<AdminRoute><AllWatches></AllWatches></AdminRoute>}
            />
            <Route
              path="/dashboard/allGlasses"
              element={<AdminRoute><AllGlasses></AllGlasses></AdminRoute>}
            />
            <Route
              path="/dashboard/allJewellers"
              element={<AdminRoute><AllJewellers></AllJewellers></AdminRoute>}
            />
            <Route
              path="/dashboard/allOrders"
              element={<AdminRoute><AllOrders></AllOrders></AdminRoute>}
            />
            <Route
              path="/dashboard/update/:id"
              element={<AdminRoute><UpdateCard></UpdateCard></AdminRoute>}
            />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/myorders" element={<PrivateRoute><MyOrders /></PrivateRoute>} />

          <Route path="/details/:id" element={<PrivateRoute><Details /></PrivateRoute>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

// Live Site Link:  https://fashionstar-5bdad.web.app/
