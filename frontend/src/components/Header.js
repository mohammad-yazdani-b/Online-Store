import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to={"/login"} className="logInBtn">
        ورود / ثبت نام
      </Link>
      <div className="searchBox">
        <input
          type="search"
          className="serach"
          placeholder="دنبال چی میگردی؟"
          autoComplete="off"
        ></input>
        <button>
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div className="logo">🛍️فروشگاه من</div>
    </div>
  );
};

export default Header;
