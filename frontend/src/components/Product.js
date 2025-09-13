const Product = ({ item }) => {
  return (
    <div className="product">
      <div className="img-product">
        <img
          src={`/images/product/${item.src}.jpg`}
          className="img-responsive"
        />
      </div>
      <h4 className="product-title">{item.title}</h4>
      <p className="price">
        {Number(item.price).toLocaleString("fa-IR")} تومان
      </p>
      <button onClick={() => alert(`${item.title} به سبد خرید اضافه شد`)}>افزودن به سبد خرید</button>
    </div>
  );
};

export default Product;
