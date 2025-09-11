import { useEffect, useState } from "react";
import axios from "axios";
import CategoryItem from "./CategoryItem";

const Category = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    axios.get("/categories").then((res) => setItem(res.data));
  }, []);

  return (
    <section className="category">
      {item.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </section>
  );
};
export default Category;
