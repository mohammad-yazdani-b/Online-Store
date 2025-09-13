import { useEffect, useState } from "react";
import axios from "axios";
import Product from "../components/Product";

const Producs = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    axios.get("/products").then((res) => setItem(res.data), []);
  });

  return (
    <section className="products">
      {item.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </section>
  );
};

export default Producs;
