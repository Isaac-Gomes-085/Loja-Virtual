import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div>
      <nav className="nav green darken-4">
        <div class="nav-wrapper">
          <a href="#" class="brand-logo">
            Shop here
          </a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <Link to="/catalago">Catalago</Link>
            </li>
            <li>
              <Link to="/carrinho">Carrinho</Link>
            </li>
            <li>
              <Link to="collapsible.html">JavaScript</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Layout;
