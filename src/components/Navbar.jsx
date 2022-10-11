import { Link, NavLink } from "react-router-dom";
import "../style.css";
import logo from '../assets/pkgo.png'

export default function Navbar() {
  return (
    <>
      <div className="bg-blue-600 justify-between flex items-center px-5 py-5 text-xl">
        <div className=" flex justify-between items-center max-w-screen-xl">
          <Link to="/">
            <div>
              <img
              src={logo} 
              alt="" />
            </div>
          </Link>
        </div>

        <div className="flex justify-between ">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : undefined)}
            end
            to="/"
        
          >
            Home
          </NavLink>
          {' -- '}
          <NavLink
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to="/personajes"
          >
            Busca a tu personaje
          </NavLink>
        </div>
      </div>
    </>
  );
}
