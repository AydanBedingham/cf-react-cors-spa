import { Outlet, Link } from "react-router-dom";
import './index.css';

function Layout() {
  return (
    <div className="Layout">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}

export default Layout;
