import { NavLink } from "react-router-dom";
import { IoPersonAdd, IoPeople } from "react-icons/io5";

function Navbar() {
  return (
    <aside>
      <header>
        <h1>HRNET</h1>
      </header>
      <nav>
        <ul>
          <li>
            <NavLink className="navlink button" to="/">
              <IoPersonAdd />
              Create employee
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink button" to="/employees">
              <IoPeople />
              View employees
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Navbar;
