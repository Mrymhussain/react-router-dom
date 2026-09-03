import { Link } from "react-router";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>

        <Link to="/pokemon">
          <li>Pokemon</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;