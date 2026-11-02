import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="logo">
        <span className="logo-tj">TJ</span> Courses
      </NavLink>
      
      <div className="nav-links">
        <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          All Courses
        </NavLink>
        <NavLink to="/category/Beginner" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Beginner
        </NavLink>
        <NavLink to="/category/Intermediate" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Intermediate
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;