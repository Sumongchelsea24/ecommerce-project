import { Routes, Route } from "react-router";

import "./App.css";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import OrdersPage from "./pages/orders/OrdersPage";
import TrackingPage from "./pages/tracking/TrackingPage";
import { useEffect, useState } from "react";
import axios from "axios";
import { HomePage } from "./pages/home/HomePage";

function App() {
  const [cart, setCart] = useState([]);

  // useEffect(() => {
  //   axios.get("/api/cart-items?expand=product").then((response) => {
  //     setCart(response.data);
  //   });
  // }, []);

  //yasari use garyo vani reload garnu parxa
  // useEffect(() => {
  //   const fetchAppData = async () => {
  //     const response = await axios.get("/api/cart-items?expand=product");
  //     setCart(response.data);
  //   };
  //   fetchAppData();
  // }, []);

  const loadCart = async () => {
    try {
      const response = await axios.get("/api/cart-items?expand=product");
      setCart(response.data);
    } catch (error) {
      console.error("Failed to load cart:", error);
    }
  };

  useEffect(() => {
    loadCart(); // runs only once on mount
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
      <Route
        path="checkout"
        element={<CheckoutPage cart={cart} loadCart={loadCart} />}
      />
      <Route path="orders" element={<OrdersPage cart={cart} />} />
      <Route path="tracking" element={<TrackingPage />} />
    </Routes>
  );
}

export default App;
