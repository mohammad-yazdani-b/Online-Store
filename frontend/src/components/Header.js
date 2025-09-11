import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
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
    </header>
  );
};

export default Header;
