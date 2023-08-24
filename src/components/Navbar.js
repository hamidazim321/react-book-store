import { NavLink } from 'react-router-dom';

import '../styles/Navbar.css';
import user from '../assets/UserIcon.png';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand-name">
        <p>Bookstore CMS</p>
      </div>
      <ul className="navlist">
        <li className="nav">
          <NavLink className="dark" to="/">Books</NavLink>
        </li>
        <li>
          <NavLink className="grey" to="/categories">Categories</NavLink>
        </li>
      </ul>
      <button type="button" className="profile-btn">
        <img src={user} alt="profile" />
      </button>
    </nav>
  );
}
