
import Loader from "components/Loader/Loader";
import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <div>
     <header>
        <nav>
          <ul>
            <li> <NavLink to="/">Home</NavLink></li>
            <li> <NavLink to="/movies">Movies</NavLink></li>
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