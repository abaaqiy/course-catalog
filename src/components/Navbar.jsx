import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">CourseCatalog</Link>
      <div className="nav-links">
        <NavLink 
          to="/category/Beginner" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Beginner
        </NavLink>
        <NavLink 
          to="/category/Intermediate" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Intermediate
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar