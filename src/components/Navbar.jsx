import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar">
        <div className="container nav-inner">
          <div className="logo">
            <NavLink to="/">MISHEL RESTAURANT</NavLink>
          </div>

          <ul className="nav-links">
            <li>
              <NavLink end to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/menu">Menu</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
