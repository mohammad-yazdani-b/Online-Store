import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Category from "../components/Category";
import AboutUs from "../components/AboutUs";

const Home = () => {
  return (
    <>
      <div className="banner">
        <div className="overly"></div>
        <img src="/images/Baner.jpg" className="img-responsive" alt="banner" />
      </div>
      <div className="title-section">
        <h3>
          <span>دسته بندی ها</span>
        </h3>
      </div>
      <Category />
      <div className="title-section">
        <h3>
          <span>درباره ما</span>
        </h3>
      </div>
      <AboutUs />
    </>
  );
};
export default Home;
