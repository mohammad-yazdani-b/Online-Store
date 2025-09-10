import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <ul>
        <li>
          <Link className="list-item active">خانه</Link>
        </li>
        <li>
          <Link className="list-item">محصولات</Link>
        </li>
        <li>
          <Link className="list-item">درباره ما</Link>
        </li>
        <li>
          <Link className="list-item">ارتباط با ما</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
