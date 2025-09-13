import { NavLink } from "react-router-dom";

const Navbar = () => {
  const getActiveClass = ({ isActive }) =>
    isActive ? "list-item active" : "list-item";

  return (
    <nav className="navbarContainer">
      <ul>
        <li>
          <NavLink to="/" className={getActiveClass}>
            خانه
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className={getActiveClass}>
            محصولات
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={getActiveClass}>
            درباره ما
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={getActiveClass}>
            ارتباط با ما
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
