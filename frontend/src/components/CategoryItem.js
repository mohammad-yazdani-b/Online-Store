import {Link} from "react-router-dom"

const CategoryItem = ({ item }) => {
  return (
    <div className="category-item">
      <img src={`/images/category/${item.src}`} className="category-img" alt="sample" />
      <p className="category-caption">{item.caption}</p>
    </div>
  );
};

export default CategoryItem;
