import Header from "../../components/Header";
import "./HomePage.css";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductsGrid from "./ProductsGrid";

export function HomePage({ cart }) {
  // fetch("http://localhost:3000/api/products")
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //   });
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   axios.get("/api/products").then((response) => {
  //     setProducts(response.data);
  //   });
  // }, []);

  //Using Async Await
  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    };
    getHomeData();
  }, []);

  return (
    <>
      <title>Ecommerce Project</title>
      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
}
