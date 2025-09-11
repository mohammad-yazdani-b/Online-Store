import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbarContainer">
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "list-item active" : "list-item"
            }
          >
            خانه
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "list-item active" : "list-item"
            }
          >
            محصولات
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "list-item active" : "list-item"
            }
          >
            درباره ما
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "list-item active" : "list-item"
            }
          >
            ارتباط با ما
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
