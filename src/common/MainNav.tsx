import { Link, useLocation } from "react-router-dom";
import { navItems } from "../data/MainNavData";
import "./MainNav.css";

function MainNav() {
  const location = useLocation();
  return (

    <nav className="navbar navbar-expand-lg bg-custom-dark" data-bs-theme="dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          ID+
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {navItems.map((itemMenu, index) => (
              <li className="nav-item" key={index}>
                <Link
                  className={
                    "nav-link" +
                    (location.pathname === itemMenu.url ? "active" : "")
                  }
                  to={itemMenu.url}
                  title={itemMenu.title}
                >
                  {itemMenu.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MainNav;
