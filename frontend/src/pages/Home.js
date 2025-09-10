import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Category from "../components/Category";

const Home = () => {
  return (
    <>
      <div className="banner">
        <div className="overly"></div>
        <img src="/images/Baner.jpg" className="img-responsive" alt="banner" />
      </div>
      <div className="category-title">
        <h3>
          <span>دسته بندی ها</span>
        </h3>
        <Category />
      </div>
    </>
  );
};
export default Home;
