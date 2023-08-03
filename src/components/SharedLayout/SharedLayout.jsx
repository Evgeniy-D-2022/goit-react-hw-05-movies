
import Loader from "components/Loader/Loader";
import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import css from "./SharedLayout.module.css";

let activeLink = {
  color: '#3513fa',
};

const SharedLayout = () => {
  return (
    <div className={css.layout_wrap}>
     <header className={css.layout_header}>
        <nav className={css.layout_nav}>
          <ul className={css.layout_list}>
            <li className={css.layout_item}> 
            <NavLink className={css.layout_link} to="/"
            style={({ isActive }) =>
            isActive ? activeLink : undefined}
            >Home</NavLink>
            </li>
            <li className={css.layout_item}> 
            <NavLink className={css.layout_link} to="/movies"
            style={({ isActive }) =>
            isActive ? activeLink : undefined}
            >Movies</NavLink>
            </li>
          </ul>     
        </nav>
      </header>
      <Suspense fallback={<Loader/>}>
      <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;